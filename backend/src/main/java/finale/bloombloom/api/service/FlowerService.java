package finale.bloombloom.api.service;

import finale.bloombloom.api.request.BouquetSaveRequest;
import finale.bloombloom.api.request.FlowerRequest;
import finale.bloombloom.api.response.*;
import finale.bloombloom.common.exception.BloomBloomNotFoundException;
import finale.bloombloom.common.model.FileFolder;
import finale.bloombloom.common.util.S3ImageUrlConverter;
import finale.bloombloom.db.entity.Bouquet;
import finale.bloombloom.db.entity.FlowerInfo;
import finale.bloombloom.db.entity.Order;
import finale.bloombloom.db.entity.User;
import finale.bloombloom.db.entity.metadata.Deco;
import finale.bloombloom.db.entity.metadata.MainFlower;
import finale.bloombloom.db.entity.metadata.SubFlower;
import finale.bloombloom.db.entity.metadata.Wrap;
import finale.bloombloom.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class FlowerService {
    private final FileProcessService fileProcessService;
    private final UserRepository userRepository;
    private final BouquetRepository bouquetRepository;
    private final MainFlowerRepository mainFlowerRepository;
    private final SubFlowerRepository subFlowerRepository;
    private final DecoRepository decoRepository;
    private final WrapRepository wrapRepository;
    private final FlowerInfoRepository flowerInfoRepository;
    private final PresentRepository presentRepository;
    private final OrderRepository orderRepository;
    private final S3ImageUrlConverter urlConverter;

    public List<MainFlowerResponse> findAllMainFlower() {
        return mainFlowerRepository.findAll().stream()
                .map(mainFlower -> MainFlowerResponse.from(mainFlower, urlConverter))
                .collect(Collectors.toList());
    }

    public List<SubFlowerResponse> findAllSubFlower() {
        return subFlowerRepository.findAll().stream()
                .map(SubFlowerResponse::from)
                .collect(Collectors.toList());
    }

    public List<WrapResponse> findAllWrap() {
        return wrapRepository.findAll().stream()
                .map(WrapResponse::from)
                .collect(Collectors.toList());
    }

    public List<DecoResponse> findAllDeco() {
        return decoRepository.findAll().stream()
                .map(DecoResponse::from)
                .collect(Collectors.toList());
    }

    public List<BouquetResponse> findBouquet(Long userSeq) {
        return bouquetRepository.findAllByUser_UserSeq(userSeq).stream()
                .map(BouquetResponse::from)
                .collect(Collectors.toList());
    }

    public BouquetDetailResponse findBouquetDetail(Long bouquetSeq) {
        Bouquet bouquet = findBouquetDetailByBouquetSeq(bouquetSeq);
        List<FlowerInfo> flowerInfos = flowerInfoRepository.findByBouquet_BouquetSeq(bouquetSeq);
        return BouquetDetailResponse.from(bouquet, flowerInfos);
    }


    @Transactional
    public BouquetSaveResponse saveBouquet(Long userSeq, BouquetSaveRequest request, MultipartFile file) {
        Optional<Deco> deco = decoRepository.findById(request.getDecoSeq());
        Optional<Wrap> wrap = wrapRepository.findById(request.getWrapSeq());
        Optional<SubFlower> subFlower = subFlowerRepository.findById(request.getSubFlowerSeq());
        Optional<User> user = userRepository.findById(userSeq);

        if (user.isEmpty() || deco.isEmpty() || subFlower.isEmpty() || wrap.isEmpty())
            throw new BloomBloomNotFoundException("해당하는 정보를 찾을 수 없습니다.");

        // 1. 넘어온 이미지를 S3에 저장 후 주소를 반환받는다.
        String bouquetImage = null;
        try {
            bouquetImage = fileProcessService.upload(FileFolder.BOUQUET_FOLDER, file);
        } catch (IOException e) {
            log.error("이미지 업로드에 실패했습니다.");
            e.printStackTrace();
        }

        // 2. bouquet 테이블에 저장
        Bouquet bouquet = bouquetRepository.save(Bouquet.builder()
                .user(user.get())
                .subFlower(subFlower.get())
                .wrap(wrap.get())
                .deco(deco.get())
                .bouquetImage(bouquetImage)
                .build());

        // 3. flower_info 테이블에 저장
        saveFlowerInfo(request, bouquet);

        return BouquetSaveResponse.from(bouquet);
    }

    @Transactional
    public void deleteBouquet(Long bouquetSeq) {
        // 선물내역 삭제
        presentRepository.deleteByBouquet_BouquetSeq(bouquetSeq);
        // 꽃정보 삭제
        flowerInfoRepository.deleteByBouquet_BouquetSeq(bouquetSeq);
        // 주문 삭제
        orderRepository.deleteByBouquet_BouquetSeq(bouquetSeq);
        // 꽃다발 삭제
        bouquetRepository.deleteById(bouquetSeq);
    }

    public RecentBouquetResponse findRecentBouquet(Long userSeq, Pageable pageable) {
        // 1. 최근 제작한 꽃다발 조회 (BouquetResponse 형태로 변경)
        List<BouquetResponse> makeBouquetList = bouquetRepository.findByUser_UserSeqOrderByBouquetSeqDesc(userSeq, pageable).stream()
                .map(BouquetResponse::from)
                .collect(Collectors.toList());

        // 1. 해당 유저의 주문 내역 조회
        List<Order> orderList = orderRepository.findByUser_UserSeqOrderByOrderSeqDesc(userSeq, pageable);
        // 2. 주문 내역을 기반으로 최근 주문한 꽃다발 조회 (BouquetResponse 형태로 변경)
        List<BouquetResponse> orderBouquetList = findOrderBouquetListByOrderList(orderList).stream()
                .map(BouquetResponse::from)
                .collect(Collectors.toList());

        return new RecentBouquetResponse(makeBouquetList, orderBouquetList);
    }

    private List<Bouquet> findOrderBouquetListByOrderList(List<Order> orderList) {
        return orderList.stream()
                .map(order -> bouquetRepository.findById(order.getBouquet().getBouquetSeq()).orElseThrow(() -> new BloomBloomNotFoundException("주문에 해당하는 꽃다발이 없습니다.")))
                .collect(Collectors.toList());
    }

    private void saveFlowerInfo(BouquetSaveRequest request, Bouquet bouquet) {
        List<FlowerRequest> mainFlower = request.getMainFlower();
        mainFlower.stream().forEach(f -> {
            // 1. flowerSeq 로 MainFlower 엔티티를 찾는다.
            MainFlower flower = findMainFlowerByFlower(f);
            // 2. builder 를 사용하여 FlowerInfo 엔티티 생성
            FlowerInfo flowerInfo = FlowerInfo.builder()
                    .mainFlower(flower)
                    .flowerInfoCount(f.getFlowerCount())
                    .bouquet(bouquet)
                    .build();
            // 3. 저장
            flowerInfoRepository.save(flowerInfo);
        });
    }

    private MainFlower findMainFlowerByFlower(FlowerRequest f) {
        return mainFlowerRepository.findById(f.getFlowerSeq())
                .orElseThrow(() -> new BloomBloomNotFoundException("해당하는 정보를 찾을 수 없습니다."));
    }

    private Bouquet findBouquetDetailByBouquetSeq(Long bouquetSeq) {
        return bouquetRepository.findById(bouquetSeq)
                .orElseThrow(() -> new BloomBloomNotFoundException(String.format("해당 꽃다발이 존재하지 않습니다. ID : %d", bouquetSeq)));
    }

}
