package finale.bloombloom.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@ConfigurationProperties(prefix = "cloud.aws.s3")
@Component
public class S3Component {
    private String bucket;

    @Value("${cloud.aws.s3.folder.bouquet}")
    private String bouquetFolderName;
}
