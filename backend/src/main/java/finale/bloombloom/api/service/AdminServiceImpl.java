package finale.bloombloom.api.service;

import finale.bloombloom.api.request.AdminSaveRequest;
import finale.bloombloom.api.response.StoreListResponse;
import finale.bloombloom.db.entity.Store;
import finale.bloombloom.db.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService{
    private final StoreRepository storeRepository;
    private final EntityManager em;
    /**
     *
     * 업장 등록 (네이티브 쿼리로 insert)
     * 반영된 레코드 건수 return
     * 작성자 : 김정혁
     */
    @Transactional
    @Override
    public int saveStore(AdminSaveRequest req) {

        Query query = em.createNativeQuery("insert into store\n" +
                "(store_name,store_contact,store_address,store_reg_num,store_loc,store_map_id,store_blog_id,store_instagram_id,store_image_link)\n"+
                " values(?1,?2,?3,?4,ST_GEOMFROMTEXT(\""+
                String.format("POINT(%s %s)",req.getStoreLat(),req.getStoreLng()) +
                "\"),?5,?6,?7,?8)");
        query.setParameter(1,req.getStoreName());
        query.setParameter(2,req.getStoreContact());
        query.setParameter(3,req.getStoreAddress());
        query.setParameter(4,req.getStoreRegNum());
        query.setParameter(5,req.getStoreMapId());
        query.setParameter(6,req.getStoreBlogId());
        query.setParameter(7,req.getStoreInstagramId());
        query.setParameter(8,req.getStoreImageLink());

        return query.executeUpdate();

    public List<StoreListResponse> findAllStore() {
          return storeRepository.findAllStoreListBy().stream()
                  .map(StoreListResponse::from)
                  .collect(Collectors.toList());
    }
}
