package finale.bloombloom.db.repository;

import finale.bloombloom.db.entity.Bouquet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BouquetRepository extends JpaRepository<Bouquet, Long> {
    List<Bouquet> findAllByUserUserSeq(Long userSeq);
}
