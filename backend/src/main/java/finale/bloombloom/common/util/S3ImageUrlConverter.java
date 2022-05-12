package finale.bloombloom.common.util;

import org.springframework.stereotype.Component;

@Component
public class S3ImageUrlConverter {
    public String urlConvert(String url) {
        StringBuilder result = new StringBuilder();
        String prefix = "https://s3.ap-northeast-2.amazonaws.com/finale.bloombloom";

        int pathStartIndex = url.lastIndexOf("/", url.lastIndexOf("/") - 1);

        return result.append(prefix).append(url.substring(pathStartIndex)).toString();
    }
}
