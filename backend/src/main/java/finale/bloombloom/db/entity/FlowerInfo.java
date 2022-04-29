package finale.bloombloom.db.entity;

import finale.bloombloom.db.entity.metadata.MainFlower;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FlowerInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long flowerInfoSeq;

    private int flowerInfoCount;

    @OneToOne
    @JoinColumn(name = "main_flower_seq")
    private MainFlower mainFlower;

    @ManyToOne
    @JoinColumn(name = "bouquet_seq")
    private Bouquet bouquet;
}
