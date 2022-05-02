package finale.bloombloom.db.repository;

import finale.bloombloom.db.entity.metadata.MainFlower;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MainFlowerRepository extends JpaRepository<MainFlower, Long> {
    List<MainFlower> findAll();
}
