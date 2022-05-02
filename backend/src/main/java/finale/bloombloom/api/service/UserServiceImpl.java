package finale.bloombloom.api.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import finale.bloombloom.db.entity.User;
import finale.bloombloom.db.repository.UserRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    //회원가입
    @Override
    public User createUser(HashMap<String, Object> profile) {
        User user = User.builder()
                .userId(String.valueOf(profile.get("userId")))
                .userName(profile.get("nickname").toString())
                .build();
        return userRepository.save(user);
    }

    //userid (회원번호)로 유저 찾기
    @Override
    public User getUserByUserId(String userId) {
        Optional<User> user = userRepository.findByUserId(userId);
        if(user.isPresent())
        return userRepository.findByUserId(userId).get();
        else return null;
    }

    /**
     * authorization_code를 이용하여 access token을 요청하고 결과값을 받아 객체로 파싱
     */
    @Override
    public String getAccessToken(String code) {
        // json을 object로 맵핑 시킬때 사용
        ObjectMapper objectMapper = new ObjectMapper();

        // 인증 코드를 받은 후, 파라미터들을 포함해 토큰 요청
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code"); // 고정값
        params.add("client_id", "df2b93fe31185203897eca6511064994");
        params.add("redirect_uri", "http://localhost:8080/api/v1/oauth/kakao/callback");
        params.add("code", code);

        // HttpHeader 오브젝트 생성
        HttpHeaders headersForAccessToken = new HttpHeaders();
        headersForAccessToken.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        // HttpHeader와 HttpBody를 하나의 오브젝트에 담기
        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest = new HttpEntity<>(params, headersForAccessToken);

        // POST방식으로 key-value 데이터를 요청(카카오쪽으로)
        RestTemplate rt = new RestTemplate(); //http 요청을 간단하게 해줄 수 있는 클래스

        // 실제로 요청하기
        // Http 요청하기 - POST 방식으로 - 그리고 response 변수에 응답을 받음.
        ResponseEntity<String> accessTokenResponse = rt.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );

        // JSON 응답을 객체로 변환(access token)
        OAuthToken oauthToken = null;
        try {
            oauthToken = objectMapper.readValue(accessTokenResponse.getBody(), OAuthToken.class);
        } catch (
                JsonProcessingException e) {
            e.printStackTrace();
        }
        return oauthToken.getAccess_token();
    }

    /**
     * access token을 이용하여 사용자의 정보를 요청하고 결과값을 받아 객체로 파싱
     */
    @Override
    public HashMap<String, Object> getUserInfo(String accessToken) {
        // json을 object로 맵핑 시킬때 사용
        ObjectMapper objectMapper = new ObjectMapper();

        // 발급받은 Access 토큰으로 API를 호출해서 사용자의 정보를 응답으로 받는 코드
        HttpHeaders headersForRequestProfile = new HttpHeaders();
        headersForRequestProfile.add("Authorization", "Bearer " + accessToken);
        headersForRequestProfile.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        HttpEntity<MultiValueMap<String, String>> kakaoResourceProfileRequest = new HttpEntity<>(headersForRequestProfile);

        // POST방식으로 key-value 데이터를 요청(카카오쪽으로)
        RestTemplate rt = new RestTemplate(); //http 요청을 간단하게 해줄 수 있는 클래스

        // Http 요청하기 - POST 방식으로 - 그리고 response 변수의 응답을 받음.
        ResponseEntity<String> resourceProfileResponse = rt.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoResourceProfileRequest,
                String.class
        );

        // JSON 응답을 객체로 변환 (사용자 정보)
        KakaoProfile profile = null;
        try {
            profile = objectMapper.readValue(resourceProfileResponse.getBody(), KakaoProfile.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        HashMap<String,Object> result =new HashMap<String,Object>();
        result.put("nickname",profile.getProperties().getNickname());
        result.put("userId",profile.getId());
        return result;
    }
}

@Getter
class OAuthToken {
    public String access_token;
    private String token_type;
    private String refresh_token;
    private int expires_in;
    private String scope;
    private int refresh_token_expires_in;
}


@Getter
class KakaoProfile {
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