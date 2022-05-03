import React from "react";
import { Box } from "@mui/material";
import KakaoBtn from "../components/Button/KakaoBtn";
import Title from "../components/login/Title";
import { getLogin, getKaokaoLogin } from "../components/apis/auth";
import FlowerImg from "../components/login/FlowerImg";
import Router, { useRouter } from "next/router";
import axios from "axios";

function Login() {
  const router = useRouter();
  const handleLogin = () => {
    loginApi();
  };
  const loginApi = async () => {
    try {
      const response = await getLogin();
      console.log(response.data);
      kakaoLogin(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const kakaoLogin = async (url: string) => {
    try {
      router.push(url);
      // const response = await axios.get(url);
      // const response = await getKaokaoLogin(kakaoApi.substring(23));
      // const response = await getKaokaoLogin(url);
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
