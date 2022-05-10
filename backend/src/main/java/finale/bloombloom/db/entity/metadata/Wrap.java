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
public class Wrap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long wrapSeq;

    private String wrapImage;
    private String wrapFrontImage;
    private String wrapBackImage;
    private String wrapColor;
}
