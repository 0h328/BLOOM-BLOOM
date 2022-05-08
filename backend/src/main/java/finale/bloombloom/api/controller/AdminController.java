package finale.bloombloom.api.controller;

import finale.bloombloom.api.request.AdminSaveRequest;
import finale.bloombloom.api.request.AdminUpdateRequest;
import finale.bloombloom.api.response.StoreDetailResponse;
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

    /**
     *  업장 리스트 조회
     *  작성자 : 박건우
     */
    @GetMapping
    ResponseEntity<Result> findAllStore(Authentication authentication) {
        List<StoreListResponse> stores = adminService.findAllStore();

        return ResponseEntity.status(200).body(Result.builder().data(stores).status(200).message("업장 리스트 조회에 성공하였습니다.").build());
    }

    /**
     *  업장 정보 조회
     *  작성자 : 박건우
     */
    @GetMapping("/{storeSeq}")
    ResponseEntity<Result> findStore(Authentication authentication, @PathVariable Long storeSeq) {
        StoreDetailResponse store = adminService.findStore(storeSeq);

        return ResponseEntity.status(200).body(Result.builder().data(store).status(200).message("업장 정보 조회에 성공하였습니다.").build());
    }

    /**
     *  업장 삭제
     *  작성자 : 박건우
     */
    @DeleteMapping("/{storeSeq}")
    ResponseEntity<Result> deleteStore(Authentication authentication, @PathVariable Long storeSeq) {
        adminService.deleteStore(storeSeq);

        return ResponseEntity.status(200).body(Result.builder().status(200).message("업장 삭제에 성공하였습니다.").build());
    }

    /**
     *  업장 등록
     *  작성자 : 박건우
     */
    @PostMapping
    ResponseEntity<Result> createStore(Authentication authentication, @RequestBody AdminSaveRequest req) {
        adminService.saveStore(req);

        return ResponseEntity.status(200).body(Result.builder().status(200).message("업장 등록에 성공하였습니다.").build());
    }

    /**
     *  업장 수정
     *  작성자 : 박건우
     */
    @PatchMapping
    ResponseEntity<Result> updateStore(Authentication authentication, @RequestBody AdminUpdateRequest req) {
        adminService.updateStore(req);

        return ResponseEntity.status(200).body(Result.builder().status(200).message("업장 수정에 성공하였습니다.").build());
    }

}
