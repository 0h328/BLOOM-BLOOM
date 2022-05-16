package finale.bloombloom.api.request;

import finale.bloombloom.db.entity.Store;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.locationtech.jts.geom.Point;
import org.locationtech.jts.io.ParseException;
import org.locationtech.jts.io.WKTReader;

import javax.validation.constraints.NotNull;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AdminSaveRequest {
    @NotNull(message = "꽃집 이름은 비어있을 수 없습니다.")
    private String storeName;
    @NotNull(message = "꽃집 연락처는 비어있을 수 없습니다.")
    private String storeContact;
    @NotNull(message = "꽃집 주소는 비어있을 수 없습니다.")
    private String storeAddress;
    @NotNull(message = "꽃집 사업자 등록번호는 비어있을 수 없습니다.")
    private String storeRegNum;
    @NotNull(message = "꽃집 위도는 비어있을 수 없습니다.")
    private double storeLat;
    @NotNull(message = "꽃집 경도는 비어있을 수 없습니다.")
    private double storeLng;
    private String storeMapId;
    private String storeBlogId;
    private String storeInstagramId;
    @NotNull(message = "포장지 ID는 비어있을 수 없습니다.")
    private String storeImageLink;

    public Store toEntity() {
        String pointWKT = String.format("POINT(%s %s)", this.getStoreLat(), this.getStoreLng());
        System.out.println(pointWKT);
        System.out.println(this.getStoreLng()+ " "+this.getStoreLat());
        Point point = null;
        try {
            point = (Point) new WKTReader().read(pointWKT);
        }
        catch (ParseException e) {
            System.out.println("WKTReader() 에러");
            e.printStackTrace();
        }

        return Store.builder()
                .storeName(this.getStoreName())
                .storeContact(this.getStoreContact())
                .storeAddress(this.getStoreAddress())
                .storeRegNum(this.getStoreRegNum())
                .storeLoc(point)
                .storeMapId(this.getStoreMapId())
                .storeBlogId(this.getStoreBlogId())
                .storeInstagramId(this.getStoreInstagramId())
                .storeImageLink(this.getStoreImageLink())
                .build();
    }
}
