package finale.bloombloom.db.repository;

import finale.bloombloom.db.entity.metadata.Wrap;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WrapRepository extends JpaRepository<Wrap, Long> {
    List<Wrap> findAll();
}
