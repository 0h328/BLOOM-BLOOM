package finale.bloombloom.api.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PresentBouquetSaveResponse {
    private String uuid;

    public static PresentBouquetSaveResponse from(String uuid) {
        return PresentBouquetSaveResponse.builder().uuid(uuid).build();
    }
}
