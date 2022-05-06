package finale.bloombloom.db.repository;


import finale.bloombloom.db.entity.Store;
import org.locationtech.jts.geom.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface StoreRepository extends JpaRepository<Store,Long> {
    //37.43997761179732 127.14630571590624,37.4425687391523 127.14933924204468
    String sql = "SELECT * FROM store as st WHERE MBRCONTAINS(ST_LINESTRINGFROMTEXT('LINESTRING(?1 ?2 , ?3 ?4)'), st.store_loc)";

    @Override
    Optional<Store> findById(Long storeSeq);

    @Transactional
    @Query(nativeQuery = true, value = sql)
    List<Store> findByPoint(double x1, double y1, double x2, double y2);
}
