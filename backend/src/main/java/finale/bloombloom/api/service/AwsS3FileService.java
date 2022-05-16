package finale.bloombloom.api.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import finale.bloombloom.common.model.FileFolder;
import finale.bloombloom.config.S3Component;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.io.InputStream;

@Component
@RequiredArgsConstructor
public class AwsS3FileService implements FileService {
    private final AmazonS3 amazonS3;
    private final S3Component s3Component;

    @Override
    public void uploadFile(InputStream inputStream, ObjectMetadata objectMetadata, String fileName) {
        amazonS3.putObject(new PutObjectRequest(
                s3Component.getBucket(),
                fileName,
                inputStream,
                objectMetadata
        ).withCannedAcl(CannedAccessControlList.PublicRead));
    }

    @Override
    public String getFileUrl(String fileName) {
        return amazonS3.getUrl(s3Component.getBucket(), fileName).toString();
    }

    @Override
    public String getFileFolder(FileFolder fileFolder) {
        String folder = "";
        if (fileFolder == FileFolder.BOUQUET_FOLDER)
            folder = s3Component.getBouquetFolderName();

        if (fileFolder == FileFolder.MAIN_FLOWER_FOLDER)
            folder = s3Component.getMainFlowerFolderName();

        if (fileFolder == FileFolder.SUB_FLOWER_FOLDER)
            folder = s3Component.getSubFlowerFolderName();

        if (fileFolder == FileFolder.WRAP_FOLDER)
            folder = s3Component.getWrapFolderName();

        if (fileFolder == FileFolder.DECO_FOLDER)
            folder = s3Component.getDecoFolderName();

        if (fileFolder == FileFolder.STORE_FOLDER)
            folder = s3Component.getStoreFolderName();

        return folder;
    }
}
