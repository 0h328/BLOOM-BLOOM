package finale.bloombloom.common.auth;

import lombok.Getter;

@Getter
public class KakaoProfile {
    private long id;
    private String connected_at;
    private Properties properties;
    private KakaoAccount kakao_account;

    @Getter
    public static class Properties {
        private String nickname;
    }

    @Getter
    public static class KakaoAccount {
        private Boolean profile_nickname_needs_agreement;
        private Profile profile;

        @Getter
        public static class Profile {
            private String nickname;
        }
    }
}
