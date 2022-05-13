package finale.bloombloom.db.repository;

import finale.bloombloom.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // userSeq 로 검색
    Optional<User> findByUserId(String userId);
}