package finale.bloombloom.api.response;

import finale.bloombloom.common.util.S3ImageUrlConverter;
import finale.bloombloom.db.entity.metadata.MainFlower;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MainFlowerResponse {
    private Long flowerSeq;
    private String flowerName;
    private String flowerColor;
    private String flowerImage;
    private String flowerDesc;

    public static MainFlowerResponse from(MainFlower mainFlower, S3ImageUrlConverter urlConverter) {
        return MainFlowerResponse.builder()
                .flowerSeq(mainFlower.getMainFlowerSeq())
                .flowerName(mainFlower.getMainFlowerName())
                .flowerColor(mainFlower.getMainFlowerColor())
                .flowerImage(urlConverter.urlConvert(mainFlower.getMainFlowerImage()))
                .flowerDesc(mainFlower.getMainFlowerDesc())
                .build();
    }
}
