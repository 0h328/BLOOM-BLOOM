package finale.bloombloom.db.repository;

import finale.bloombloom.db.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Long> {
    List<Order> findByUserUserId(String userId);

}
