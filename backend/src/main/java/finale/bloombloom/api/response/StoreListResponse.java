package finale.bloombloom.api.response;

import finale.bloombloom.db.entity.mapping.StoreListMapping;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class StoreListResponse {
    private Long storeSeq;
    private String storeName;
    private String storeContact;
    private String storeAddress;
    private String storeRegNum;

    public static StoreListResponse from(StoreListMapping store) {
        return StoreListResponse.builder()
                .storeSeq(store.getStoreSeq())
                .storeName(store.getStoreName())
                .storeContact(store.getStoreContact())
                .storeAddress(store.getStoreAddress())
                .storeRegNum(store.getStoreRegNum())
                .build();
    }
}
