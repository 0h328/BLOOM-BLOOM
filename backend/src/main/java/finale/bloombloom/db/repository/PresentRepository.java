package finale.bloombloom.db.repository;

import finale.bloombloom.db.entity.Present;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PresentRepository extends JpaRepository<Present, Long> {
}
