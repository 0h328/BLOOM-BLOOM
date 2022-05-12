import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import KakaoBtn from "../components/button/KakaoBtn";
import Title from "../components/login/Title";
import FlowerImg from "../components/login/FlowerImg";
import { useRouter } from "next/router";
import { maxWidth } from "@mui/system";
function Login() {
  const [imgHeight, setImgHeight] = useState<number>();
  const [imgWidth, setImgWidth] = useState<number>();
  const BASE_URI = "http://localhost:3000/kakaoLogin";
  // const BASE_URI = "https://bloombloom.kro.kr/kakaoLogin";
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
  const handleResize = () => {
    setImgWidth(window.innerHeight);
    console.log(
      `화면 사이즈 x : ${window.innerWidth}, y : ${window.innerHeight}`
    );
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      <Box
        sx={{
          mx: "auto",
          width: imgWidth > 420 ? 420 : imgWidth,
          position: "relative",
          height: "100vh",
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
