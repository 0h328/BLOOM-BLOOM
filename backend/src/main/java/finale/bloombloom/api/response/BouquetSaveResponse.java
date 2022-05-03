package finale.bloombloom.api.response;

import finale.bloombloom.db.entity.Bouquet;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BouquetSaveResponse {
    private Long bouquetSeq;
    private String bouquetImage;

    public static BouquetSaveResponse from(Bouquet bouquet) {
        return BouquetSaveResponse.builder()
                .bouquetSeq(bouquet.getBouquetSeq())
                .bouquetImage(bouquet.getBouquetImage())
                .build();
    }
}
