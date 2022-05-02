package finale.bloombloom.api.controller;

import finale.bloombloom.api.response.*;
import finale.bloombloom.api.service.FlowerService;
import finale.bloombloom.common.model.response.Result;
import finale.bloombloom.db.entity.Bouquet;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/v1/flower")
@RestController
@RequiredArgsConstructor
public class FlowerController {
    private final FlowerService flowerService;

    @GetMapping
    public ResponseEntity<Result> findBouquet(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        Long userSeq = 1L;

        List<BouquetResponse> bouquets = flowerService.findBouquet(userSeq);
        return ResponseEntity.ok(Result.builder().data(bouquets).message("꽃다발 리스트 조회에 성공했습니다.").build());
    }

    @GetMapping("/main")
    public ResponseEntity<Result> findAllMainFlower(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        List<MainFlowerResponse> mainFlowers = flowerService.findAllMainFlower();
        return ResponseEntity.ok(Result.builder().data(mainFlowers).message("꽃 조회에 성공했습니다.").build());
    }

    @GetMapping("/sub")
    public ResponseEntity<Result> findAllSubFlower(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        List<SubFlowerResponse> subFlowers = flowerService.findAllSubFlower();
        return ResponseEntity.ok(Result.builder().data(subFlowers).message("부속꽃 조회에 성공했습니다.").build());
    }

    @GetMapping("/wrap")
    public ResponseEntity<Result> findAllWrap(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        List<WrapResponse> wraps = flowerService.findAllWrap();
        return ResponseEntity.ok(Result.builder().data(wraps).message("포장지 조회에 성공했습니다.").build());
    }

    @GetMapping("/deco")
    public ResponseEntity<Result> findAllDeco(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        List<DecoResponse> decos = flowerService.findAllDeco();
        return ResponseEntity.ok(Result.builder().data(decos).message("장식 조회에 성공했습니다.").build());
    }

}
