package finale.bloombloom.db.entity.metadata;

import lombok.*;

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
public class SubFlower {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subFlowerSeq;

    private String subFlowerImage;
    private String subFlowerDesc;
}
