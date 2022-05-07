package finale.bloombloom.api.response;

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

    public static BouquetDetailResponse from(Bouquet bouquet, List<FlowerInfo> flowerInfo) {
        List<FlowerInfoResponse> flowerInfoResponses = flowerInfo.stream()
                .map(FlowerInfoResponse::from)
                .collect(Collectors.toList());
        return BouquetDetailResponse.builder()
                .bouquetImage(bouquet.getBouquetImage())
                .flowerInfo(flowerInfoResponses)
                .build();
    }

}
