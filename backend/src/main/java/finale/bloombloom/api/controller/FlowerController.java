package finale.bloombloom.api.controller;

import finale.bloombloom.api.request.BouquetSaveRequest;
import finale.bloombloom.api.request.PresentBouquetSaveRequest;
import finale.bloombloom.api.response.*;
import finale.bloombloom.api.service.FlowerService;
import finale.bloombloom.api.service.PresentService;
import finale.bloombloom.common.auth.BloomUserDetails;
import finale.bloombloom.common.model.response.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/api/v1/flower")
@RestController
@RequiredArgsConstructor
public class FlowerController {
    private final FlowerService flowerService;
    private final PresentService presentService;

    /**
     * 기능: 유저가 보유한 꽃다발 리스트 조회
     * 작성자: 문준호
     */
    @GetMapping
    public ResponseEntity<Result> findBouquet(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        Long userSeq = getUserSeq(authentication);

        List<BouquetResponse> bouquets = flowerService.findBouquet(userSeq);
        return ResponseEntity.ok(Result.builder().data(bouquets).message("꽃다발 리스트 조회에 성공했습니다.").build());
    }


    /**
     * 기능: 꽃다발 상세 조회
     * 작성자: 문준호
     */
    @GetMapping("/{bouquetSeq}")
    public ResponseEntity<Result> findBouquetDetail(Authentication authentication, @PathVariable Long bouquetSeq) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        BouquetResponse bouquetDetail = flowerService.findBouquetDetail(bouquetSeq);
        return ResponseEntity.ok(Result.builder().data(bouquetDetail).message("꽃다발 상세조회에 성공했습니다.").build());
    }

    /**
     * 기능: 꽃 메타데이터 조회
     * 작성자: 문준호
     */
    @GetMapping("/main")
    public ResponseEntity<Result> findAllMainFlower(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        List<MainFlowerResponse> mainFlowers = flowerService.findAllMainFlower();
        return ResponseEntity.ok(Result.builder().data(mainFlowers).message("꽃 조회에 성공했습니다.").build());
    }

    /**
     * 기능: 부속꽃 메타데이터 조회
     * 작성자: 문준호
     */
    @GetMapping("/sub")
    public ResponseEntity<Result> findAllSubFlower(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        List<SubFlowerResponse> subFlowers = flowerService.findAllSubFlower();
        return ResponseEntity.ok(Result.builder().data(subFlowers).message("부속꽃 조회에 성공했습니다.").build());
    }

    /**
     * 기능: 포장지 메타데이터 조회
     * 작성자: 문준호
     */
    @GetMapping("/wrap")
    public ResponseEntity<Result> findAllWrap(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        List<WrapResponse> wraps = flowerService.findAllWrap();
        return ResponseEntity.ok(Result.builder().data(wraps).message("포장지 조회에 성공했습니다.").build());
    }

    /**
     * 기능: 장식 메타데이터 조회
     * 작성자: 문준호
     */
    @GetMapping("/deco")
    public ResponseEntity<Result> findAllDeco(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        List<DecoResponse> decos = flowerService.findAllDeco();
        return ResponseEntity.ok(Result.builder().data(decos).message("장식 조회에 성공했습니다.").build());
    }

    /**
     * 기능: 꽃다발 저장하기
     * 작성자: 문준호
     */
    @PostMapping
    public ResponseEntity<Result> saveBouquet(Authentication authentication, @RequestBody @Valid BouquetSaveRequest request) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        Long userSeq = getUserSeq(authentication);
        BouquetSaveResponse response = flowerService.saveBouquet(userSeq, request);
        return ResponseEntity.ok(Result.builder().data(response).message("꽃다발 저장에 성공했습니다.").build());
    }

    /**
     * 기능: 선물용 꽃다발 저장하기
     * 작성자: 문준호
     */
    @PostMapping("/present")
    public ResponseEntity<Result> savePresentBouquet(Authentication authentication, @RequestBody @Valid PresentBouquetSaveRequest request) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        Long userSeq = getUserSeq(authentication);
        String uuid = presentService.savePresentBouquet(userSeq, request);
        return ResponseEntity.ok(Result.builder().data(uuid).message("선물하기에 성공했습니다.").build());
    }


    private Long getUserSeq(Authentication authentication) {
        return ((BloomUserDetails) authentication.getDetails()).getUser().getUserSeq();
    }
}
