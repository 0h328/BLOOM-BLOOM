package finale.bloombloom.api.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import finale.bloombloom.api.service.UserService;
import finale.bloombloom.common.model.response.Result;
import finale.bloombloom.common.util.JwtTokenUtil;
import finale.bloombloom.db.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/oauth")
public class OAuthController {

    private final UserService userService;

    /**
     * 기능 : 로그인
     * 1. 얻은 토큰을 이용하여 사용자의 정보를 받는다.
     * 2. 회원가입 및 로그인 진행
     * 작성자 : 김정혁
     */
    @RequestMapping("/login")
    public ResponseEntity<Result> home(String accessToken) throws JsonProcessingException {
        /**
         * 리엑트에서 수행해서 accessToken까지 받아옴
         * code로 access token 받기
         */

        //access token으로 사용자 정보 받기
        HashMap<String, Object> profile = userService.getUserInfo(accessToken);

        /**
         * 카카오로부터 받은 사용자의 정보로 회원가입 또는 로그인을 수행
         */

        /**
         * DB에 회원이 없다면 회원가입 + 로그인
         */
        User user = userService.getUserByUserId(String.valueOf(profile.get("userId")));
        if (user == null)
            return ResponseEntity.status(200).body(
                    Result.builder()
                            .data(JwtTokenUtil.getToken(userService.createUser(profile).getUserId()))
                            .status(200)
                            .message("로그인 성공")
                            .build()
            );

        /**
         * 이미 회원이라면 로그인
         */
        else
            return ResponseEntity.status(200).body(
                    Result.builder()
                            .data(JwtTokenUtil.getToken(user.getUserId()))
                            .status(200)
                            .message("로그인 성공")
                            .build()
            );
    }

}
