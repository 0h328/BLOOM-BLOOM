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
public class MainFlower {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mainFlowerSeq;

    private String mainFlowerImage;
    private String mainFlowerName;
    private String mainFlowerDesc;
    private String mainFlowerColor;
}
