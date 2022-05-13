package finale.bloombloom.api.service;

import finale.bloombloom.api.request.AdminSaveRequest;
import finale.bloombloom.api.request.AdminUpdateRequest;
import finale.bloombloom.api.response.StoreDetailResponse;
import finale.bloombloom.api.response.StoreListResponse;
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
public class AdminServiceImpl implements AdminService {
    private final StoreRepository storeRepository;
    private final EntityManager em;

    /**
     * 업장 리스트 조회
     * 작성자 : 박건우
     */
    @Override
    public List<StoreListResponse> findAllStore() {
        return storeRepository.findAllStoreListBy().stream()
                .map(StoreListResponse::from)
                .collect(Collectors.toList());
    }

    /**
     * 업장 정보 조회
     * 작성자 : 박건우
     */
    @Override
    public StoreDetailResponse findStore(Long storeReq) {
        return StoreDetailResponse.from(storeRepository.findStoreByStoreSeq(storeReq).get());
    }

    /**
     * 업장 검색
     * 작성자 : 박건우
     */
    @Override
    public List<StoreListResponse> searchStore(String storeName) {
        return storeRepository.findStoreListByStoreName(storeName).stream()
                .map(StoreListResponse::from)
                .collect(Collectors.toList());
    }

    /**
     * 업장 삭제
     * 작성자 : 박건우
     */
    @Override
    public void deleteStore(Long storeReq) {
        storeRepository.deleteById(storeReq);
    }

    /**
     * 업장 수정
     * 작성자 : 박건우
     */
    @Override
    public void updateStore(AdminUpdateRequest req) {
        storeRepository.save(req.toEntity());
    }

    /**
     * 업장 등록 (네이티브 쿼리로 insert)
     * 반영된 레코드 건수 return
     * 작성자 : 김정혁
     */
    @Transactional
    @Override
    public int saveStore(AdminSaveRequest req) {
        Query query = em.createNativeQuery(
                "insert into store\n" +
                        "(store_name,store_contact,store_address,store_reg_num,store_loc,store_map_id,store_blog_id,store_instagram_id,store_image_link)\n" +
                        " values(?1,?2,?3,?4,ST_GEOMFROMTEXT(\"" +
                        String.format("POINT(%s %s)", req.getStoreLat(), req.getStoreLng()) +
                        "\"),?5,?6,?7,?8)");
        query.setParameter(1, req.getStoreName());
        query.setParameter(2, req.getStoreContact());
        query.setParameter(3, req.getStoreAddress());
        query.setParameter(4, req.getStoreRegNum());
        query.setParameter(5, req.getStoreMapId());
        query.setParameter(6, req.getStoreBlogId());
        query.setParameter(7, req.getStoreInstagramId());
        query.setParameter(8, req.getStoreImageLink());

        return query.executeUpdate();
    }

}
