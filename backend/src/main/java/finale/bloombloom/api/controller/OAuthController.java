package finale.bloombloom.api.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.Objects;

@RequiredArgsConstructor
@RestController
public class OAuthController {



    @RequestMapping(value = "/login/getKakaoAuthUrl")
    public @ResponseBody
    String getKakaoAuthUrl(
            HttpServletRequest request) throws Exception {
        String reqUrl =
                "https://kauth.kakao.com/oauth/authorize"
                        + "?client_id=df2b93fe31185203897eca6511064994"
                        + "&redirect_uri=http://localhost:8080/oauth/kakao/callback"
                        + "&response_type=code";

        return reqUrl;
    }



    @RequestMapping("/oauth/kakao/callback")
    public KakaoProfile  home(String code) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();

        System.out.println(code);
        // 3. 인증 코드를 받은 후, 파라미터들을 포함해 토큰 요청
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code"); // 고정값
        params.add("client_id", "df2b93fe31185203897eca6511064994");
        params.add("redirect_uri", "http://localhost:8080/oauth/kakao/callback");
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

        // JSON 응답을 객체로 변환
        OAuthToken oauthToken = null;
        try {
            oauthToken = objectMapper.readValue(accessTokenResponse.getBody(), OAuthToken.class);
        } catch (
                JsonProcessingException e) {
            e.printStackTrace();
        }
        System.out.println("this is token "+oauthToken.getAccess_token());
        // 5, 6, 7 : 발급받은 Access 토큰으로 API를 호출해서 사용자의 정보를 응답으로 받는 코드
        HttpHeaders headersForRequestProfile = new HttpHeaders();
        headersForRequestProfile.add("Authorization", "Bearer " + Objects.requireNonNull(oauthToken).getAccess_token());
        headersForRequestProfile.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        HttpEntity<MultiValueMap<String, String>> kakaoResourceProfileRequest = new HttpEntity<>(headersForRequestProfile);

        // Http 요청하기 - POST 방식으로 - 그리고 response 변수의 응답을 받음.
        ResponseEntity<String> resourceProfileResponse = rt.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                kakaoResourceProfileRequest,
                String.class
        );



        KakaoProfile profile = null;
        try {
            profile = objectMapper.readValue(resourceProfileResponse.getBody(), KakaoProfile.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        System.out.println("this is profile "+profile.getKakao_account().getProfile());
        System.out.println("this is profile "+profile.getProperties().getNickname());
        System.out.println("this is profile "+profile.getKakao_account().getProfile().getNickname());
        System.out.println("this is profile "+profile.getId());


        return profile;
    }



}


/*
{"id":2223233937,
"connected_at":"2022-04-30T09:23:06Z",
"properties":{"nickname":"김정혁"},
"kakao_account":{"profile_nickname_needs_agreement":false,"profile":{"nickname":"김정혁"}}}
 */
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