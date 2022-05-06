package finale.bloombloom.db.entity;

import lombok.*;
import org.locationtech.jts.geom.Point;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "`store`")
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
