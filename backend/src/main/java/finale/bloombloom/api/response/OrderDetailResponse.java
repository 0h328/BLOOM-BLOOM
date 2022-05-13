package finale.bloombloom.api.response;

import finale.bloombloom.db.entity.Bouquet;
import finale.bloombloom.db.entity.FlowerInfo;
import finale.bloombloom.db.entity.Store;
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
public class OrderDetailResponse {
    private String orderDesc;
    private String storeName;
    private String storeContact;
    private String storeAddress;
    private String storeMapId;
    private String storeBlogId;
    private String storeInstagramId;
    private String storeImageLink;
    private String bouquetImage;
    private List<FlowerInfoResponse> flowerInfo;

    public static OrderDetailResponse from(Bouquet bouquet, Store store, List<FlowerInfo> flowerInfo) {
        List<FlowerInfoResponse> flowerInfoResponses = flowerInfo.stream()
                .map(FlowerInfoResponse::from)
                .collect(Collectors.toList());
        return OrderDetailResponse.builder()
                .storeName(store.getStoreName())
                .storeContact(store.getStoreContact())
                .storeAddress(store.getStoreAddress())
                .storeMapId(store.getStoreMapId())
                .storeBlogId(store.getStoreBlogId())
                .storeInstagramId(store.getStoreInstagramId())
                .storeImageLink(store.getStoreImageLink())
                .bouquetImage(bouquet.getBouquetImage())
                .flowerInfo(flowerInfoResponses)
                .build();
    }
}
