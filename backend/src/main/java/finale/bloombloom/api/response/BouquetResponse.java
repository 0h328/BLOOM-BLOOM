package finale.bloombloom.api.response;

import finale.bloombloom.common.util.S3ImageUrlConverter;
import finale.bloombloom.db.entity.Bouquet;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BouquetResponse {
    private Long bouquetSeq;
    private String bouquetImage;

    public static BouquetResponse from(Bouquet bouquet, S3ImageUrlConverter urlConverter) {
        return BouquetResponse.builder()
                .bouquetSeq(bouquet.getBouquetSeq())
                .bouquetImage(urlConverter.urlConvert(bouquet.getBouquetImage()))
                .build();
    }
}
