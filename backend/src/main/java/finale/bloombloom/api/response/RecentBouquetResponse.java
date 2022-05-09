package finale.bloombloom.api.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RecentBouquetResponse {
    private List<BouquetResponse> makeBouquet;
    private List<BouquetResponse> orderBouquet;
}
