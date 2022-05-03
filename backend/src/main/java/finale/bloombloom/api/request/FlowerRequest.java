package finale.bloombloom.api.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Valid
public class FlowerRequest {
    @NotNull(message = "꽃 ID는 비어있을 수 없습니다.")
    @Positive(message = "꽃 ID는 1 이상입니다.")
    private Long flowerSeq;
    @Min(value = 1, message = "1개 이상의 꽃이 있어야 합니다.")
    @Max(value = 7, message = "7개 이하의 꽃이 있어야 합니다.")
    private int flowerCount;
}
