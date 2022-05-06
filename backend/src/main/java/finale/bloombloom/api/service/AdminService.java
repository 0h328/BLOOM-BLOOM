package finale.bloombloom.api.service;

import finale.bloombloom.api.request.AdminSaveRequest;
import finale.bloombloom.api.response.StoreListResponse;
import finale.bloombloom.db.entity.Store;

import java.util.List;

public interface AdminService {
    // 업장 리스트 조회
    List<StoreListResponse> findAllStore();

    // 업장 등록
    Store saveStore(AdminSaveRequest req);
}
