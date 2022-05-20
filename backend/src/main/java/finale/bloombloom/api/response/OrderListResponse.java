package finale.bloombloom.api.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class OrderListResponse {
    private long orderSeq;
    private String storeName;
    private String storeContact;
    private String storeAddress;
    private LocalDateTime createdDate;
    private String bouquetImage;
}
