package finale.bloombloom.db.entity;

import finale.bloombloom.common.model.Role;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userSeq;
    private String userName;
    private String userId;
    @Enumerated(EnumType.STRING)
    private Role userRole;
}
