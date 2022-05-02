package finale.bloombloom.api.response;

import finale.bloombloom.db.entity.metadata.MainFlower;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MainFlowerResponse {
    private Long flowerSeq;
    private String flowerName;
    private String flowerColor;
    private String flowerImage;
    private String flowerDesc;

    public static MainFlowerResponse from(MainFlower mainFlower) {
        return MainFlowerResponse.builder()
                .flowerSeq(mainFlower.getMainFlowerSeq())
                .flowerName(mainFlower.getMainFlowerName())
                .flowerColor(mainFlower.getMainFlowerColor())
                .flowerImage(mainFlower.getMainFlowerImage())
                .flowerDesc(mainFlower.getMainFlowerDesc())
                .build();
    }
}
