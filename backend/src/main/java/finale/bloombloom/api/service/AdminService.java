package finale.bloombloom.api.service;

import finale.bloombloom.api.request.AdminSaveRequest;
import finale.bloombloom.db.entity.Store;

public interface AdminService {
    // 업장 등록
    public int saveStore(AdminSaveRequest req);
}
