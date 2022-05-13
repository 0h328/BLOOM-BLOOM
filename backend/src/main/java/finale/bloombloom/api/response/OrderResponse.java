package finale.bloombloom.api.response;

import finale.bloombloom.common.util.S3ImageUrlConverter;
import finale.bloombloom.db.entity.Bouquet;
import finale.bloombloom.db.entity.FlowerInfo;
import finale.bloombloom.db.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponse {
    private List<FlowerInfoResponse> flowerInfo;
    private String bouquetImage;
    private String orderDesc;
    private String customerName;

    public static OrderResponse from(Bouquet bouquet, List<FlowerInfo> flowerInfo, String orderDesc, S3ImageUrlConverter urlConverter) {
        List<FlowerInfoResponse> flowerInfoResponseList = flowerInfo.stream()
                .map(elem -> FlowerInfoResponse.from(elem, urlConverter))
                .collect(Collectors.toList());

        return OrderResponse.builder()
                .flowerInfo(flowerInfoResponseList)
                .bouquetImage(urlConverter.urlConvert(bouquet.getBouquetImage()))
                .orderDesc(orderDesc)
                .customerName(bouquet.getUser().getUserName())
                .build();
    }
}
