package finale.bloombloom.api.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class StoreLocationResponse {
    private long storeSeq;
    private String storeName;
    private String storeContact;
    private String storeAddress;
    private String storeRegNum;
    private double storeLat;
    private double storeLng;
    private String storeMapId;
    private String storeBlogId;
    private String storeInstagramId;
    private String storeImageLink;

    public void ConvertLink(String link){
        this.storeImageLink = link;
    }
}
