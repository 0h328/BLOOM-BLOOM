package finale.bloombloom.api.service;


import com.amazonaws.services.s3.model.ObjectMetadata;
import finale.bloombloom.common.model.FileFolder;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class FileProcessService {
    private final FileService amazonS3Service;

    public String upload(FileFolder fileFolder, MultipartFile file) throws IOException {
        String fileName = amazonS3Service.getFileFolder(fileFolder) + createUniqueFileName(file.getOriginalFilename());

        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(file.getSize());
        objectMetadata.setContentType(file.getContentType());

        try (InputStream inputStream = file.getInputStream()) {
            amazonS3Service.uploadFile(inputStream, objectMetadata, fileName);
        } catch (IOException e) {
            throw new IllegalArgumentException(String.format("파일 변환 중 에러가 발생했습니다. (%s)", file.getOriginalFilename()));
        }

        return amazonS3Service.getFileUrl(fileName);
    }

    /**
     * 기능: 파일명 부여
     * 작성자: 문준호
     */
    private String createUniqueFileName(String fileName) {
        String uuid = UUID.randomUUID().toString();
        String extension = getFileExtension(fileName);
        return uuid + extension;
    }

    /**
     * 기능: 파일 확장자명을 얻어오는 메소드
     * 작성자: 문준호
     */
    private String getFileExtension(String fileName) {
        return fileName.substring(fileName.lastIndexOf("."));
    }

}
