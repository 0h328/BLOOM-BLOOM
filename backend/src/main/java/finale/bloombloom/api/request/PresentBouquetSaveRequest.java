package finale.bloombloom.api.request;

import finale.bloombloom.db.entity.Bouquet;
import finale.bloombloom.db.entity.Present;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PresentBouquetSaveRequest {
    @NotNull(message = "꽃다발 ID는 비어있을 수 없습니다.")
    @Positive(message = "꽃다발 ID는 1 이상입니다.")
    private Long bouquetSeq;
    private String presentDesc;

    public Present toEntity(Bouquet bouquet, String sender, String uuid) {
        return Present.builder()
                .bouquet(bouquet)
                .presentDesc(this.presentDesc)
                .presentSender(sender)
                .presentUri(uuid)
                .build();
    }
}
