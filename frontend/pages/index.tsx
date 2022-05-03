import React from "react";
import { Box } from "@mui/material";
import KakaoBtn from "../components/Button/KakaoBtn";
import Title from "../components/login/Title";
import FlowerImg from "../components/login/FlowerImg";
import { useRouter } from "next/router";
function Login() {
  const BASE_URI = "http://localhost:3000/kakaoLogin";
  const router = useRouter();
  const handleLogin = () => {
    kakaoLogin();
  };

  const kakaoLogin = async () => {
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=df2b93fe31185203897eca6511064994&redirect_uri=${BASE_URI}&response_type=code`;
    try {
      router.push(url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box
        sx={{
          mx: "auto",
          width: 420,
          position: "relative",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FFFAFA",
            height: "800px",
            minHeight: "100vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Title />
          <FlowerImg />

          <Box sx={{ position: "absolute", top: "730px", left: "70px" }}>
            <KakaoBtn
              handleBtn={handleLogin}
              title="카카오톡으로 시작하기"
            ></KakaoBtn>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
