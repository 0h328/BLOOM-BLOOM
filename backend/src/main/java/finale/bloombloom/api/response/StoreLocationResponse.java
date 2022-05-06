package finale.bloombloom.api.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class StoreLocationResponse {
    private long store_seq;
    private String store_name;
    private String store_contact;
    private String store_address;
    private String store_reg_num;
    private double store_lat;
    private double store_lng;
    private String store_map_id;
    private String store_blog_id;
    private String store_instagram_id;
    private String store_image_li;
}
