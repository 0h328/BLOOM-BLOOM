package finale.bloombloom.api.response;

import finale.bloombloom.db.entity.metadata.Deco;
import finale.bloombloom.db.entity.metadata.MainFlower;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DecoResponse {
    private Long decoSeq;
    private String decoName;
    private String decoColor;
    private String decoImage;

    public static DecoResponse from(Deco deco) {
        return DecoResponse.builder()
                .decoSeq(deco.getDecoSeq())
                .decoName(deco.getDecoName())
                .decoColor(deco.getDecoColor())
                .decoImage(deco.getDecoImage())
                .build();
    }
}
