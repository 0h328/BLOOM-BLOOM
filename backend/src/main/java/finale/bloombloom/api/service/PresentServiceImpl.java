package finale.bloombloom.api.service;

import finale.bloombloom.api.request.PresentBouquetSaveRequest;
import finale.bloombloom.api.response.PresentBouquetResponse;
import finale.bloombloom.api.response.UuidResponse;
import finale.bloombloom.common.exception.BloomBloomNotFoundException;
import finale.bloombloom.common.util.S3ImageUrlConverter;
import finale.bloombloom.db.entity.Bouquet;
import finale.bloombloom.db.entity.Present;
import finale.bloombloom.db.entity.User;
import finale.bloombloom.db.repository.BouquetRepository;
import finale.bloombloom.db.repository.PresentRepository;
import finale.bloombloom.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PresentServiceImpl implements PresentService{
    private final UserRepository userRepository;
    private final BouquetRepository bouquetRepository;
    private final PresentRepository presentRepository;
    private final S3ImageUrlConverter urlConverter;

    @Override
    @Transactional
    public UuidResponse savePresentBouquet(Long userSeq, PresentBouquetSaveRequest request) {
        Bouquet bouquet = findBouquetByBouquetSeq(request.getBouquetSeq());
        String userName = findUserByUserSeq(userSeq).getUserName();
        String uuid = UUID.randomUUID().toString().replace("-", "");
        presentRepository.save(request.toEntity(bouquet, userName, uuid));
        return UuidResponse.from(uuid);
    }

    @Override
    public PresentBouquetResponse findPresentBouquet(String uuid) {
        Present present = findPresentBouquetByUUID(uuid);
        Bouquet bouquet = present.getBouquet();
        return PresentBouquetResponse.from(present, bouquet, urlConverter);
    }

    private Present findPresentBouquetByUUID(String uuid) {
        return presentRepository.findByPresentUri(uuid)
                .orElseThrow(() -> new BloomBloomNotFoundException("해당 선물용 꽃다발이 존재하지 않습니다."));
    }

    private Bouquet findBouquetByBouquetSeq(Long bouquetSeq) {
        return bouquetRepository.findById(bouquetSeq)
                .orElseThrow(() -> new BloomBloomNotFoundException("해당 꽃다발이 존재하지 않습니다."));
    }

    private User findUserByUserSeq(Long userSeq) {
        return userRepository.findById(userSeq)
                .orElseThrow(() -> new BloomBloomNotFoundException("해당 사용자가 존재하지 않습니다."));
    }

}
