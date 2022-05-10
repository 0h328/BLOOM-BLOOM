package finale.bloombloom.api.response;

import finale.bloombloom.db.entity.metadata.Wrap;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class WrapResponse {
    private Long wrapSeq;
    private String wrapColor;
    private String wrapImage;
    private String wrapFrontImage;
    private String wrapBackImage;

    public static WrapResponse from(Wrap wrap) {
        return WrapResponse.builder()
                .wrapSeq(wrap.getWrapSeq())
                .wrapColor(wrap.getWrapColor())
                .wrapImage(wrap.getWrapImage())
                .wrapFrontImage(wrap.getWrapFrontImage())
                .wrapBackImage(wrap.getWrapBackImage())
                .build();
    }
}
