package finale.bloombloom.api.response;

import finale.bloombloom.common.util.S3ImageUrlConverter;
import finale.bloombloom.db.entity.Bouquet;
import finale.bloombloom.db.entity.FlowerInfo;
import finale.bloombloom.db.entity.Order;
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

    public static OrderDetailResponse from(Order order, Bouquet bouquet, Store store, List<FlowerInfo> flowerInfo, S3ImageUrlConverter urlConverter) {
        List<FlowerInfoResponse> flowerInfoResponses = flowerInfo.stream()
                .map(elem -> FlowerInfoResponse.from(elem, urlConverter))
                .collect(Collectors.toList());
        return OrderDetailResponse.builder()
                .storeName(store.getStoreName())
                .storeContact(store.getStoreContact())
                .storeAddress(store.getStoreAddress())
                .storeMapId(store.getStoreMapId())
                .storeBlogId(store.getStoreBlogId())
                .storeInstagramId(store.getStoreInstagramId())
                .storeImageLink(urlConverter.urlConvert(store.getStoreImageLink()))
                .bouquetImage(urlConverter.urlConvert(bouquet.getBouquetImage()))
                .orderDesc(order.getOrderDesc())
                .flowerInfo(flowerInfoResponses)
                .build();
    }
}
