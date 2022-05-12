import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import KakaoBtn from "../components/button/KakaoBtn";
import Title from "../components/login/Title";
import FlowerImg from "../components/login/FlowerImg";
import { useRouter } from "next/router";
import { maxWidth } from "@mui/system";
import { setScreenSize } from "../components/common/Size";
function Login() {
  const [windowHeight, setWindowHeight] = useState<number>();
  // const BASE_URI = "http://localhost:3000/kakaoLogin";
  const BASE_URI = "https://bloombloom.kro.kr/kakaoLogin";
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

  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  useEffect(() => {
    setScreenSize();
    setWindowHeight(window.innerHeight);
  }, []);
  return (
    <>
      <Box
        style={{}}
        sx={{
          mx: "auto",
          width: windowHeight > 480 ? 420 : "100vw",
          position: "relative",
          height: windowHeight > 480 ? 420 : "85vh",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FFFAFA",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          <Title />
          <FlowerImg />
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              top: "75%",
              display: "flex",
              justifyContent: "center",
            }}
          >
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
