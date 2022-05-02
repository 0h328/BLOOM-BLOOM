package finale.bloombloom.api.controller;

import finale.bloombloom.api.response.DecoResponse;
import finale.bloombloom.api.response.MainFlowerResponse;
import finale.bloombloom.api.response.SubFlowerResponse;
import finale.bloombloom.api.response.WrapResponse;
import finale.bloombloom.api.service.FlowerService;
import finale.bloombloom.common.model.response.Result;
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

    @GetMapping("/main")
    public ResponseEntity<Result> readMainFlower(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        List<MainFlowerResponse> mainFlowerResponses = flowerService.readMainFlower();
        return ResponseEntity.ok(Result.builder().data(mainFlowerResponses).message("꽃 조회에 성공했습니다.").build());
    }

    @GetMapping("/sub")
    public ResponseEntity<Result> readSubFlower(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        List<SubFlowerResponse> subFlowerResponses = flowerService.readSubFlower();
        return ResponseEntity.ok(Result.builder().data(subFlowerResponses).message("부속꽃 조회에 성공했습니다.").build());
    }

    @GetMapping("/wrap")
    public ResponseEntity<Result> readWrap(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        List<WrapResponse> wrapResponses = flowerService.readWrap();
        return ResponseEntity.ok(Result.builder().data(wrapResponses).message("포장지 조회에 성공했습니다.").build());
    }

    @GetMapping("/deco")
    public ResponseEntity<Result> readDeco(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder().status(401).message("인증실패").build());

        List<DecoResponse> decoResponses = flowerService.readDeco();
        return ResponseEntity.ok(Result.builder().data(decoResponses).message("장식 조회에 성공했습니다.").build());
    }

}
