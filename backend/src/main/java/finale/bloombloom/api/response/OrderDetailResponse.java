package finale.bloombloom.api.response;

import finale.bloombloom.db.entity.Bouquet;
import finale.bloombloom.db.entity.Store;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailResponse {
    private String orderDecs;
    private Store store;
    private Bouquet bouquet;
}
