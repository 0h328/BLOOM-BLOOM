package finale.bloombloom.api.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import finale.bloombloom.api.service.UserService;
import finale.bloombloom.common.auth.BloomUserDetails;
import finale.bloombloom.common.model.response.Result;
import finale.bloombloom.common.util.JwtTokenUtil;
import finale.bloombloom.db.entity.User;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Objects;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/oauth")
public class OAuthController {

    public final static String BASE_URI = "http://bloombloom.kro.kr:8080";
    private final UserService userService;

    /**
     * [value] : 로그인
     * [notes] : 카카오 로그인 버튼을 누르면 authorization_code를 포함한 uri를 얻는다.
     * 작성자 : 김정혁
     */
    @RequestMapping(value = "/login")
    public @ResponseBody
    String getKakaoAuthUrl(
            HttpServletRequest request) throws Exception {
        String reqUrl =
                "https://kauth.kakao.com/oauth/authorize"
                        + "?client_id=df2b93fe31185203897eca6511064994"
                        + "&redirect_uri="+BASE_URI+"/api/v1/oauth/kakao/callback"
                        + "&response_type=code";
        return reqUrl;
    }

    /**
     * [value] : redirect api
     * [notes]
     * 1. 카카오 로그인 버튼 클릭후 받아온 authorization_code를 이용해여 토큰을 얻는다.
     * 2. 얻은 토큰을 이용하여 사용자의 정보를 받는다.
     * 3. 회원가입 및 로그인 진행
     * 작성자 : 김정혁
     */
    @RequestMapping("/kakao/callback")
    public ResponseEntity<Result> home(String code) throws JsonProcessingException {
        // json을 object로 맵핑 시킬때 사용
        ObjectMapper objectMapper = new ObjectMapper();
        //code로 access token 받기
        String accessToken = userService.getAccessToken(code);
        //access token으로 사용자 정보 받기
        HashMap<String, Object> profile = userService.getUserInfo(accessToken);

        /**
         * 카카오로부터 받은 사용자의 정보로 회원가입 또는 로그인을 수행
         */

        /**z
         * DB에 회원이 없다면 회원가입 + 로그인
         */
        User user = userService.getUserByUserId(String.valueOf(profile.get("userId")));
        if (user==null) {
            return ResponseEntity.status(200).body(Result.builder().data(JwtTokenUtil.getToken(userService.createUser(profile).getUserId())).status(200).message("로그인 성공").build());
        }
        /**
         * 이미 회원이라면 로그인
         */
        else {
            return ResponseEntity.status(200).body(Result.builder().data(JwtTokenUtil.getToken(user.getUserId())).status(200).message("로그인 성공").build());
        }
    }
}
