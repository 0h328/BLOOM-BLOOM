package finale.bloombloom.api.service;

import finale.bloombloom.api.request.AdminSaveRequest;
import finale.bloombloom.api.request.AdminUpdateRequest;
import finale.bloombloom.api.response.StoreDetailResponse;
import finale.bloombloom.api.response.StoreListResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface AdminService {
    /**
     * 업장 리스트 조회
     * 작성자 : 박건우
     */
    List<StoreListResponse> findAllStore();

    /**
     * 업장 정보 조회
     * 작성자 : 김정혁
     */
    StoreDetailResponse findStore(Long storeReq);

    /**
     * 업장 검색
     * 작성자 : 박건우
     */
    List<StoreListResponse> searchStore(String storeName);

    /**
     * 업장 삭제
     * 작성자 : 박건우
     */
    void deleteStore(Long storeReq);

    /**
     * 업장 수정
     * 작성자 : 박건우
     */
    void updateStore(AdminUpdateRequest req);

    /**
     * 업장 등록
     * 작성자 : 김정혁
     */
    String saveStore(AdminSaveRequest req, MultipartFile file);
}
