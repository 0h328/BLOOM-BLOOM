package finale.bloombloom.db.repository;

import finale.bloombloom.db.entity.Store;
import finale.bloombloom.db.entity.mapper.StoreDetailMapper;
import finale.bloombloom.db.entity.mapper.StoreListMapper;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StoreRepository extends JpaRepository<Store,Long> {
    /**
     *  업장 리스트 조회
     *  작성자 : 박건우
     */
    List<StoreListMapper> findAllStoreListBy();

    /**
     *  업장 정보 조회
     *  작성자 : 박건우
     */
    Optional<StoreDetailMapper> findStoreByStoreSeq(Long storeSeq);
}
