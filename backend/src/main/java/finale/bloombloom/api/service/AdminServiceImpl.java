package finale.bloombloom.api.service;

import finale.bloombloom.api.request.AdminSaveRequest;
import finale.bloombloom.api.response.StoreListResponse;
import finale.bloombloom.db.entity.Store;
import finale.bloombloom.db.repository.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService{
    private final StoreRepository storeRepository;

    @Override
    public List<StoreListResponse> findAllStore() {
          return storeRepository.findAllStoreListBy().stream()
                  .map(StoreListResponse::from)
                  .collect(Collectors.toList());
    }

    @Override
    public Store saveStore(AdminSaveRequest req) {
        return storeRepository.save(req.toEntity());
    }
}
