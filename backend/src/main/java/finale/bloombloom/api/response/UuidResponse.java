package finale.bloombloom.api.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UuidResponse {
    private String uuid;

    public static UuidResponse from(String uuid) {
        return UuidResponse.builder().uuid(uuid).build();
    }
}
