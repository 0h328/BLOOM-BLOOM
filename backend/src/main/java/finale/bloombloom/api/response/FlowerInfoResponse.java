package finale.bloombloom.api.response;

import finale.bloombloom.common.util.S3ImageUrlConverter;
import finale.bloombloom.db.entity.FlowerInfo;
import finale.bloombloom.db.entity.metadata.MainFlower;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class FlowerInfoResponse {
    private String flowerName;
    private String flowerImage;
    private int flowerCount;

    public static FlowerInfoResponse from(FlowerInfo flowerInfo, S3ImageUrlConverter urlConverter) {
        MainFlower mainFlower = flowerInfo.getMainFlower();
        return FlowerInfoResponse.builder()
                .flowerName(mainFlower.getMainFlowerName())
                .flowerImage(urlConverter.urlConvert(mainFlower.getMainFlowerImage()))
                .flowerCount(flowerInfo.getFlowerInfoCount())
                .build();
    }
}
