package finale.bloombloom.db.entity;

import lombok.*;
import org.locationtech.jts.geom.Point;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long storeSeq;

    private String storeName;
    private String storeContact;
    private String storeAddress;
    private String storeRegNum;
    private Point storeLoc;
    private String storeMapId;
    private String storeBlogId;
    private String storeInstagramId;
    private String storeImageLink;
}
