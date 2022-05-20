package finale.bloombloom.api.request;

import lombok.Getter;

@Getter
public class StoreLocationRequest {
    //남서쪽 위도
    private Double swLat;
    //남서쪽 경도
    private Double swLng;
    //북동쪽 위도
    private Double neLat;
    //남서쪽 경도
    private Double neLng;
}
