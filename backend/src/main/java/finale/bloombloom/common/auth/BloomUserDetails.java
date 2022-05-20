package finale.bloombloom.common.auth;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import finale.bloombloom.common.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import finale.bloombloom.db.entity.User;

/**
 * 현재 액세스 토큰으로 부터 인증된 유저의 부가 상세정보(활성화 여부, 만료, 롤 등) 정의.
 */
public class BloomUserDetails implements UserDetails {
    @Autowired
    private User user;
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialNonExpired;
    private boolean enabled = false;
    private List<GrantedAuthority> roles = new ArrayList<>();

    //authentication을 만들때 권한 부여 추가
    public BloomUserDetails(User user) {
        super();
        this.user = user;
        if (user.getUserRole() == Role.ROLE_USER)
            roles.add(new SimpleGrantedAuthority("ROLE_USER"));
        else
            roles.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
    }

    public User getUser() {
        return this.user;
    }

    @Override
    public String getUsername() {
        return this.user.getUserId();
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.accountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.accountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return this.credentialNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return this.enabled;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles;
    }

    @Override
    public String getPassword() {
        return null;
    }

    public void setAuthorities(List<GrantedAuthority> roles) {
        this.roles = roles;
    }
}

