package finale.bloombloom.db.repository;

import finale.bloombloom.db.entity.metadata.SubFlower;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubFlowerRepository extends JpaRepository<SubFlower, Long> {
    List<SubFlower> findAll();
}
