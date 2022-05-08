package finale.bloombloom.api.service;

import finale.bloombloom.api.request.AdminSaveRequest;
import finale.bloombloom.api.response.StoreListResponse;
import finale.bloombloom.db.entity.Store;

import java.util.List;

public interface AdminService {
    /**
     *  업장 리스트 조회
     *  작성자 : 박건우
     */
    List<StoreListResponse> findAllStore();

    /**
     *  업장 삭제
     *  작성자 : 박건우
     */
    void deleteStore(Long storeReq);

    /**
     *  업장 등록
     *  작성자 : 김정혁
     */
    int saveStore(AdminSaveRequest req);
}
