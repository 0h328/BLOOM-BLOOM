package finale.bloombloom.api.response;

import finale.bloombloom.common.util.S3ImageUrlConverter;
import finale.bloombloom.db.entity.mapper.StoreDetailMapper;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class StoreDetailResponse {
    private Long storeSeq;
    private String storeName;
    private String storeContact;
    private String storeAddress;
    private String storeRegNum;
    private String storeMapId;
    private String storeBlogId;
    private String storeInstagramId;
    private String storeImageLink;

    public static StoreDetailResponse from(StoreDetailMapper store, S3ImageUrlConverter urlConverter) {
        return StoreDetailResponse.builder()
                .storeSeq(store.getStoreSeq())
                .storeName(store.getStoreName())
                .storeContact(store.getStoreContact())
                .storeAddress(store.getStoreAddress())
                .storeRegNum(store.getStoreRegNum())
                .storeMapId(store.getStoreMapId())
                .storeBlogId(store.getStoreBlogId())
                .storeInstagramId(store.getStoreInstagramId())
                .storeImageLink(urlConverter.urlConvert(store.getStoreImageLink()))
                .build();
    }
}
