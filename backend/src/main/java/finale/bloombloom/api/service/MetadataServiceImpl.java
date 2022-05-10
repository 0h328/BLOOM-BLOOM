package finale.bloombloom.api.service;

import finale.bloombloom.common.model.FileFolder;
import finale.bloombloom.db.entity.metadata.Deco;
import finale.bloombloom.db.entity.metadata.MainFlower;
import finale.bloombloom.db.entity.metadata.SubFlower;
import finale.bloombloom.db.entity.metadata.Wrap;
import finale.bloombloom.db.repository.DecoRepository;
import finale.bloombloom.db.repository.MainFlowerRepository;
import finale.bloombloom.db.repository.SubFlowerRepository;
import finale.bloombloom.db.repository.WrapRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class MetadataServiceImpl implements MetadataService {
    private final FileProcessService fileProcessService;

    private final MainFlowerRepository mainFlowerRepository;
    private final SubFlowerRepository subFlowerRepository;
    private final DecoRepository decoRepository;
    private final WrapRepository wrapRepository;

    @Override
    public void saveMainFlowerImage(Map<String, String> request, MultipartFile file) {
        String imageLink = uploadImage(FileFolder.MAIN_FLOWER_FOLDER, file);

        mainFlowerRepository.save(MainFlower.builder()
                .mainFlowerImage(imageLink)
                .mainFlowerName(request.get("name"))
                .mainFlowerDesc(request.get("desc"))
                .mainFlowerColor(request.get("color"))
                .build()
        );
    }


    @Override
    public void saveSubFlowerImage(Map<String, String> request, MultipartFile file) {
        String imageLink = uploadImage(FileFolder.SUB_FLOWER_FOLDER, file);

        subFlowerRepository.save(SubFlower.builder()
                .subFlowerImage(imageLink)
                .subFlowerDesc(request.get("desc"))
                .build());
    }

    @Override
    public void saveWrapImage(Map<String, String> request, List<MultipartFile> file) {
        Map<String, String> imageLinks = uploadImages(FileFolder.WRAP_FOLDER, file);

        wrapRepository.save(Wrap.builder()
                .wrapImage(imageLinks.get("전체"))
                .wrapFrontImage(imageLinks.get("앞"))
                .wrapBackImage(imageLinks.get("뒤"))
                .wrapColor(request.get("color"))
                .build());
    }

    @Override
    public void saveDecoImage(Map<String, String> request, MultipartFile file) {
        String imageLink = uploadImage(FileFolder.DECO_FOLDER, file);

        decoRepository.save(Deco.builder()
                .decoImage(imageLink)
                .decoColor(request.get("color"))
                .decoName(request.get("name"))
                .build());
    }

    private Map<String, String> uploadImages(FileFolder folder, List<MultipartFile> files) {
        Map<String, String> imageLinks = new HashMap<>();
        try {
            for (MultipartFile file : files) {
                String fileName = getFileName(file);    // 앞, 뒤, 전체
                imageLinks.put(fileName, fileProcessService.upload(folder, file));
            }
        } catch (IOException e) {
            log.error("이미지 업로드에 실패했습니다.");
            e.printStackTrace();
        }

        return imageLinks;
    }

    private String getFileName(MultipartFile file) {
        return file.getOriginalFilename().substring(0, file.getOriginalFilename().lastIndexOf('.'));
    }


    private String uploadImage(FileFolder folder, MultipartFile file) {
        String imageLink = null;
        try {
            imageLink = fileProcessService.upload(folder, file);
        } catch (IOException e) {
            log.error("이미지 업로드에 실패했습니다.");
            e.printStackTrace();
        }

        return imageLink;
    }

}
