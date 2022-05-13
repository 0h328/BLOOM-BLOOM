package finale.bloombloom.api.request;

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
}
