package finale.bloombloom.api.controller;

import finale.bloombloom.api.request.AdminSaveRequest;
import finale.bloombloom.api.response.StoreListResponse;
import finale.bloombloom.api.service.AdminService;
import finale.bloombloom.common.model.response.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/admin")
@RestController
@RequiredArgsConstructor
public class AdminController {
    private final AdminService adminService;

    @GetMapping
    ResponseEntity<Result> findAllStore() {
        List<StoreListResponse> stores = adminService.findAllStore();

        return ResponseEntity.status(200).body(Result.builder().data(stores).status(200).message("업장 리스트 조회에 성공하였습니다.").build());
    }

    @PostMapping("/store")
    ResponseEntity<Result> createStore(Authentication authentication, @RequestBody AdminSaveRequest req) {

        adminService.saveStore(req);

        return ResponseEntity.status(200).body(Result.builder().status(200).message("업장 등록에 성공하였습니다.").build());
    }
}