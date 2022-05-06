package finale.bloombloom.api.service;

import finale.bloombloom.api.request.AdminSaveRequest;
import finale.bloombloom.db.entity.Store;
import finale.bloombloom.db.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService{
    private final StoreRepository storeRepository;

    @Override
    public Store saveStore(AdminSaveRequest req) {
        return storeRepository.save(req.toEntity());
    }
}
