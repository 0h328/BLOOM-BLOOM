package finale.bloombloom.api.service;

import finale.bloombloom.api.request.BouquetSaveRequest;
import finale.bloombloom.api.response.*;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FlowerService {
    List<MainFlowerResponse> findAllMainFlower();

    List<SubFlowerResponse> findAllSubFlower();

    List<WrapResponse> findAllWrap();

    List<DecoResponse> findAllDeco();

    List<BouquetResponse> findBouquet(Long userSeq);

    BouquetDetailResponse findBouquetDetail(Long bouquetSeq);

    BouquetSaveResponse saveBouquet(Long userSeq, BouquetSaveRequest request, MultipartFile file);

    void deleteBouquet(Long bouquetSeq);

    RecentBouquetResponse findRecentBouquet(Long userSeq, Pageable pageable);
}
