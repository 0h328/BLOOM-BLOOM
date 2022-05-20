package finale.bloombloom.api.service;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

public interface MetadataService {
    void saveMainFlowerImage(Map<String, String> request, MultipartFile file);

    void saveSubFlowerImage(Map<String, String> request, MultipartFile file);

    void saveWrapImage(Map<String, String> request, List<MultipartFile> file);

    void saveDecoImage(Map<String, String> request, MultipartFile file);
}
