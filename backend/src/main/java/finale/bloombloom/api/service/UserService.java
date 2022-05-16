package finale.bloombloom.api.service;

import finale.bloombloom.db.entity.User;

import java.util.HashMap;

public interface UserService {
    // 회원가입
    User createUser(HashMap<String, Object> profile);

    // 유저 id로 유저 조회
    User getUserByUserId(String userId);

    //access token으로 사용자 정보 얻기
    HashMap<String, Object> getUserInfo(String accessToken);
}
