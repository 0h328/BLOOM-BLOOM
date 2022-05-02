package finale.bloombloom.api.response;

import finale.bloombloom.db.entity.metadata.SubFlower;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SubFlowerResponse {
    private Long flowerSeq;
    private String flowerImage;
    private String flowerDesc;

    public static SubFlowerResponse from(SubFlower subFlower) {
        return SubFlowerResponse.builder()
                .flowerSeq(subFlower.getSubFlowerSeq())
                .flowerImage(subFlower.getSubFlowerImage())
                .flowerDesc(subFlower.getSubFlowerDesc())
                .build();
    }
}
