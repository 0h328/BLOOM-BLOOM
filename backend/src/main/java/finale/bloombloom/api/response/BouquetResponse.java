package finale.bloombloom.api.response;

import finale.bloombloom.db.entity.Bouquet;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BouquetResponse {
    private Long bouquetSeq;
    private String bouquetImage;

    public static BouquetResponse from(Bouquet bouquet) {
        return BouquetResponse.builder()
                .bouquetSeq(bouquet.getBouquetSeq())
                .bouquetImage(bouquet.getBouquetImage())
                .build();
    }
}
