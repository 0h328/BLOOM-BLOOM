package finale.bloombloom.db.repository;

import finale.bloombloom.db.entity.FlowerInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FlowerInfoRepository extends JpaRepository<FlowerInfo, Long> {
    List<FlowerInfo> findByBouquet_BouquetSeq(Long bouquetSeq);

    void deleteByBouquet_BouquetSeq(Long bouquetSeq);
}
