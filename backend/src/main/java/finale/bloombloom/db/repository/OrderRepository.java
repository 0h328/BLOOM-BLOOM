package finale.bloombloom.db.repository;

import finale.bloombloom.db.entity.Order;
import finale.bloombloom.db.entity.Store;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserUserId(String userId);

    void deleteByBouquet_BouquetSeq(Long bouquetSeq);

    List<Order> findByUser_UserSeqOrderByOrderSeqDesc(Long userSeq, Pageable pageable);

    Optional<Order> findByOrderUri(String uuid);

    void deleteByStore_StoreSeq(Long storeSeq);



}
