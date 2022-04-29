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
public class Deco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long decoSeq;

    private String decoImage;
    private String decoName;
    private String decoColor;
}
