package finale.bloombloom.api.service;

import finale.bloombloom.api.request.BouquetSaveRequest;
import finale.bloombloom.api.request.FlowerRequest;
import finale.bloombloom.api.response.*;
import finale.bloombloom.common.exception.BloomBloomNotFoundException;
import finale.bloombloom.db.entity.Bouquet;
import finale.bloombloom.db.entity.FlowerInfo;
import finale.bloombloom.db.entity.User;
import finale.bloombloom.db.entity.metadata.Deco;
import finale.bloombloom.db.entity.metadata.MainFlower;
import finale.bloombloom.db.entity.metadata.SubFlower;
import finale.bloombloom.db.entity.metadata.Wrap;
import finale.bloombloom.db.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FlowerService {
    private final UserRepository userRepository;
    private final BouquetRepository bouquetRepository;
    private final MainFlowerRepository mainFlowerRepository;
    private final SubFlowerRepository subFlowerRepository;
    private final DecoRepository decoRepository;
    private final WrapRepository wrapRepository;
    private final FlowerInfoRepository flowerInfoRepository;

    public List<MainFlowerResponse> findAllMainFlower() {
        return mainFlowerRepository.findAll().stream()
                .map(MainFlowerResponse::from)
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

    public BouquetResponse findBouquetDetail(Long bouquetSeq) {
        return BouquetResponse.from(findBouquetDetailByBouquetSeq(bouquetSeq));
    }


    @Transactional
    public BouquetSaveResponse saveBouquet(Long userSeq, BouquetSaveRequest request) {
        Optional<Deco> deco = decoRepository.findById(request.getDecoSeq());
        Optional<Wrap> wrap = wrapRepository.findById(request.getWrapSeq());
        Optional<SubFlower> subFlower = subFlowerRepository.findById(request.getSubFlowerSeq());
        Optional<User> user = userRepository.findById(userSeq);

        if (user.isEmpty() || deco.isEmpty() || subFlower.isEmpty() || wrap.isEmpty())
            throw new BloomBloomNotFoundException("해당하는 정보를 찾을 수 없습니다.");

        // 1. bouquet 테이블에 저장
        Bouquet bouquet = bouquetRepository.save(request.toEntity(user.get(), wrap.get(), deco.get(), subFlower.get()));
        // 2. flower_info 테이블에 저장
        saveFlowerInfo(request, bouquet);

        return BouquetSaveResponse.from(bouquet);
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
