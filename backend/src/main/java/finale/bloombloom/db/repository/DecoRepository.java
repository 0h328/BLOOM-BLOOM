package finale.bloombloom.db.repository;

import finale.bloombloom.db.entity.metadata.Deco;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DecoRepository extends JpaRepository<Deco, Long> {
    List<Deco> findAll();
}
