package finale.bloombloom.api.response;

import finale.bloombloom.db.entity.Bouquet;
import finale.bloombloom.db.entity.FlowerInfo;
import finale.bloombloom.db.entity.User;
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
public class OrderResponse {
    private List<FlowerInfoResponse> flowerInfo;
    private String bouquetImage;
    private String orderDesc;
    private String customerName;

    public static OrderResponse from(User user, Bouquet bouquet, List<FlowerInfo> flowerInfo, String orderDesc) {
        List<FlowerInfoResponse> flowerInfoResponseList = flowerInfo.stream()
                .map(FlowerInfoResponse::from)
                .collect(Collectors.toList());

        return OrderResponse.builder()
                .flowerInfo(flowerInfoResponseList)
                .bouquetImage(bouquet.getBouquetImage())
                .orderDesc(orderDesc)
                .customerName(user.getUserName())
                .build();
    }
}
