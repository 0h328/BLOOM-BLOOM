package finale.bloombloom.api.controller;

import finale.bloombloom.api.request.AdminSaveRequest;
import finale.bloombloom.api.request.AdminUpdateRequest;
import finale.bloombloom.api.response.StoreDetailResponse;
import finale.bloombloom.api.response.StoreListResponse;
import finale.bloombloom.api.service.AdminService;
import finale.bloombloom.common.auth.BloomUserDetails;
import finale.bloombloom.common.model.response.Result;
import finale.bloombloom.db.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/api/v1/admin")
@RestController
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    /**
     * 업장 리스트 조회
     * 작성자 : 박건우
     */
    @GetMapping
    ResponseEntity<Result> findAllStore(
            Authentication authentication
    ) {
        if (authentication == null)
            return ResponseEntity.status(401).body(
                    Result.builder()
                            .message("인증 실패")
                            .build()
            );

        String role = null;
        for (GrantedAuthority authority : authentication.getAuthorities())
            role = authority.getAuthority();

        if (!role.equals("ROLE_ADMIN"))
            return ResponseEntity.status(403).body(
                    Result.builder()
                            .message("권한 없음")
                            .build()
            );

        List<StoreListResponse> stores = adminService.findAllStore();
        return ResponseEntity.status(200).body(
                Result.builder()
                        .message("업장 리스트 조회에 성공하였습니다.")
                        .data(stores)
                        .build()
        );
    }

    /**
     * 업장 정보 조회
     * 작성자 : 박건우
     */
    @GetMapping("/{storeSeq}")
    ResponseEntity<Result> findStore(
            Authentication authentication,
            @PathVariable Long storeSeq
    ) {
        if (authentication == null)
            return ResponseEntity.status(401).body(
                    Result.builder()
                            .message("인증 실패")
                            .build()
            );

        String role = ((GrantedAuthority) authentication.getAuthorities()).getAuthority();
        if (!role.equals("ROLE_ADMIN"))
            return ResponseEntity.status(403).body(
                    Result.builder()
                            .message("권한 없음")
                            .build()
            );

        StoreDetailResponse store = adminService.findStore(storeSeq);
        return ResponseEntity.status(200).body(
                Result.builder()
                        .message("업장 정보 조회에 성공하였습니다.")
                        .data(store)
                        .build()
        );
    }

    /**
     * 업장 검색
     * 작성자 : 박건우
     */
    @PostMapping("/search")
    ResponseEntity<Result> searchStore(
            Authentication authentication,
            @RequestParam String storeName
    ) {
        if (authentication == null)
            return ResponseEntity.status(401).body(
                    Result.builder()
                            .message("인증 실패")
                            .build()
            );

        String role = ((GrantedAuthority) authentication.getAuthorities()).getAuthority();
        if (!role.equals("ROLE_ADMIN"))
            return ResponseEntity.status(403).body(
                    Result.builder()
                            .message("권한 없음")
                            .build()
            );

        List<StoreListResponse> stores = adminService.searchStore(storeName);
        return ResponseEntity.status(200).body(
                Result.builder()
                        .message("업장 검색에 성공하였습니다.")
                        .data(stores)
                        .build()
        );
    }

    /**
     * 업장 삭제
     * 작성자 : 박건우
     */
    @DeleteMapping("/{storeSeq}")
    ResponseEntity<Result> deleteStore(
            Authentication authentication,
            @PathVariable Long storeSeq
    ) {
        if (authentication == null)
            return ResponseEntity.status(401).body(
                    Result.builder()
                            .message("인증 실패")
                            .build()
            );

        String role = ((GrantedAuthority) authentication.getAuthorities()).getAuthority();
        if (!role.equals("ROLE_ADMIN"))
            return ResponseEntity.status(403).body(
                    Result.builder()
                            .message("권한 없음")
                            .build()
            );

        adminService.deleteStore(storeSeq);
        return ResponseEntity.status(200).body(
                Result.builder()
                        .message("업장 삭제에 성공하였습니다.")
                        .build()
        );
    }

    /**
     * 업장 등록
     * 작성자 : 박건우
     */
    @PostMapping
    ResponseEntity<Result> createStore(
            Authentication authentication,
            @RequestPart(value = "request") AdminSaveRequest req,
            @RequestPart(value = "file") MultipartFile file
    ) {
        if (authentication == null)
            return ResponseEntity.status(401).body(
                    Result.builder()
                            .message("인증 실패")
                            .build()
            );

        String role = ((GrantedAuthority) authentication.getAuthorities()).getAuthority();
        if (!role.equals("ROLE_ADMIN"))
            return ResponseEntity.status(403).body(
                    Result.builder()
                            .message("권한 없음")
                            .build()
            );

        String storeImageLink = adminService.saveStore(req, file);
        Map<String, String> response = new HashMap<>();
        response.put("storeImageLink", storeImageLink);

        return ResponseEntity.status(200).body(
                Result.builder()
                        .data(response)
                        .message("업장 등록에 성공하였습니다.")
                        .build()
        );
    }

    /**
     * 업장 수정
     * 작성자 : 박건우
     */
    @PatchMapping
    ResponseEntity<Result> updateStore(
            Authentication authentication,
            @RequestBody AdminUpdateRequest req
    ) {
        if (authentication == null)
            return ResponseEntity.status(401).body(
                    Result.builder()
                            .message("인증 실패")
                            .build()
            );

        String role = ((GrantedAuthority) authentication.getAuthorities()).getAuthority();
        if (!role.equals("ROLE_ADMIN"))
            return ResponseEntity.status(403).body(
                    Result.builder()
                            .message("권한 없음")
                            .build()
            );

        adminService.updateStore(req);
        return ResponseEntity.status(200).body(
                Result.builder()
                        .message("업장 수정에 성공하였습니다.")
                        .build()
        );
    }

}
