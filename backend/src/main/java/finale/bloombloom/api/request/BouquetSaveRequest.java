package finale.bloombloom.api.request;

import finale.bloombloom.db.entity.Bouquet;
import finale.bloombloom.db.entity.User;
import finale.bloombloom.db.entity.metadata.Deco;
import finale.bloombloom.db.entity.metadata.SubFlower;
import finale.bloombloom.db.entity.metadata.Wrap;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BouquetSaveRequest {
    @NotNull(message = "포장지 ID는 비어있을 수 없습니다.")
    @Positive(message = "포장지 ID는 1 이상입니다.")
    private Long wrapSeq;
    @NotNull(message = "장식 ID는 비어있을 수 없습니다.")
    @Positive(message = "장식 ID는 1 이상입니다.")
    private Long decoSeq;
    @NotNull(message = "부속꽃 ID는 비어있을 수 없습니다.")
    @Positive(message = "부속꽃 ID는 1 이상입니다.")
    private Long subFlowerSeq;
    @NotNull(message = "꽃 리스트는 null 일 수 없습니다.")
    @Valid
    private List<FlowerRequest> mainFlower;
    @NotEmpty(message = "꽃다발 이미지 링크는 공백일 수 없습니다.")
    private String bouquetImage;

    public Bouquet toEntity(User user, Wrap wrap, Deco deco, SubFlower subFlower) {
        return Bouquet.builder()
                .user(user)
                .wrap(wrap)
                .deco(deco)
                .subFlower(subFlower)
                .bouquetImage(this.getBouquetImage())
                .build();
    }
}
