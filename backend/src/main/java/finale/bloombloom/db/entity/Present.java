package finale.bloombloom.db.entity;

import lombok.*;
import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Present {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long presentSeq;

    @ManyToOne
    @JoinColumn(name = "bouquet_seq")
    private Bouquet bouquet;

    private String presentDesc;
    private String presentUri;
    private String presentSender;
}

/**
 * String a = UUID.randomUUID().toString();
 */
