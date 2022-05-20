package finale.bloombloom.api.controller;

import finale.bloombloom.api.service.MetadataService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RequestMapping("/api/v1/upload")
@RestController
@RequiredArgsConstructor
public class FileUploadController {

    private final MetadataService metadataService;

    /**
     * 기능: 꽃 봉오리 이미지 DB 저장 및 S3 업로드
     * 작성자: 문준호
     */
    @PostMapping("/main-flower")
    public ResponseEntity saveMainFlowerImage(
            @RequestPart Map<String, String> request,
            @RequestPart MultipartFile file
    ) {
        metadataService.saveMainFlowerImage(request, file);

        return ResponseEntity.ok("꽃 봉오리 이미지 업로드에 성공했습니다.");
    }

    /**
     * 기능: 부속꽃 이미지 DB 저장 및 S3 업로드
     * 작성자: 문준호
     */
    @PostMapping("/sub-flower")
    public ResponseEntity saveSubFlowerImage(
            @RequestPart Map<String, String> request,
            @RequestPart MultipartFile file
    ) {
        metadataService.saveSubFlowerImage(request, file);
        return ResponseEntity.ok("부속꽃 이미지 업로드에 성공했습니다.");
    }

    /**
     * 기능: 포장 이미지 DB 저장 및 S3 업로드
     * 작성자: 문준호
     */
    @PostMapping("/wrap")
    public ResponseEntity saveWrapImage(
            @RequestPart Map<String, String> request,
            @RequestPart List<MultipartFile> file
    ) {
        metadataService.saveWrapImage(request, file);
        return ResponseEntity.ok("포장지 이미지 업로드에 성공했습니다.");
    }

    /**
     * 기능: 장식 이미지 DB 저장 및 S3 업로드
     * 작성자: 문준호
     */
    @PostMapping("/deco")
    public ResponseEntity saveDecoImage(
            @RequestPart Map<String, String> request,
            @RequestPart MultipartFile file
    ) {
        metadataService.saveDecoImage(request, file);
        return ResponseEntity.ok("장식 이미지 업로드에 성공했습니다.");
    }

}
