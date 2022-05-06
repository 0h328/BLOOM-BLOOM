package finale.bloombloom.db.repository;

import finale.bloombloom.db.entity.Store;
import finale.bloombloom.db.entity.mapping.StoreListMapping;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StoreRepository extends JpaRepository<Store,Long> {
    @Override
    Optional<Store> findById(Long storeSeq);

    List<StoreListMapping> findAllStoreListBy();
}
