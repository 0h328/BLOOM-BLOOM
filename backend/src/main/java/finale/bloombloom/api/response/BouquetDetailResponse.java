package finale.bloombloom.api.response;

import finale.bloombloom.common.util.S3ImageUrlConverter;
import finale.bloombloom.db.entity.Bouquet;
import finale.bloombloom.db.entity.FlowerInfo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BouquetDetailResponse {
    private String bouquetImage;
    private List<FlowerInfoResponse> flowerInfo;

    public static BouquetDetailResponse from(Bouquet bouquet, List<FlowerInfo> flowerInfo, S3ImageUrlConverter urlConverter) {
        List<FlowerInfoResponse> flowerInfoResponses = flowerInfo.stream()
                .map(elem -> FlowerInfoResponse.from(elem, urlConverter))
                .collect(Collectors.toList());
        return BouquetDetailResponse.builder()
                .bouquetImage(urlConverter.urlConvert(bouquet.getBouquetImage()))
                .flowerInfo(flowerInfoResponses)
                .build();
    }

}
