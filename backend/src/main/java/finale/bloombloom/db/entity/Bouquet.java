package finale.bloombloom.db.entity;

import finale.bloombloom.db.entity.metadata.Deco;
import finale.bloombloom.db.entity.metadata.SubFlower;
import finale.bloombloom.db.entity.metadata.Wrap;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Bouquet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bouquetSeq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_seq")
    private User user;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "wrap_seq")
    private Wrap wrap;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sub_flower_seq")
    private SubFlower subFlower;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "deco_seq")
    private Deco deco;

    private String bouquetImage;
}
