package finale.bloombloom.db.repository;

import finale.bloombloom.db.entity.Bouquet;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BouquetRepository extends JpaRepository<Bouquet, Long> {
    List<Bouquet> findByUser_UserSeqOrderByBouquetSeqDesc(Long userSeq);

    Optional<Bouquet> findByBouquetSeq(Long bouquetSeq);

    List<Bouquet> findByUser_UserSeqOrderByBouquetSeqDesc(Long userSeq, Pageable pageable);
}
