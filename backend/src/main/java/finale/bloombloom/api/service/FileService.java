package finale.bloombloom.api.service;

import com.amazonaws.services.s3.model.ObjectMetadata;
import finale.bloombloom.common.model.FileFolder;

import java.io.InputStream;

public interface FileService {
    void uploadFile(InputStream inputStream, ObjectMetadata objectMetadata, String fileName);

    String getFileUrl(String fileName);

    String getFileFolder(FileFolder fileFolder);
}
