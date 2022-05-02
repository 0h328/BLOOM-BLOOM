import React from "react";
import { Box, Typography } from "@mui/material";
import KakaoBtn from "../components/Button/KakaoBtn";
import Title from "../components/login/Title";
import Image from "next/image";

import FlowerImg from "../components/login/FlowerImg";
function Login() {
  const handleLogin = () => {};
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
            height: "100vh",
            minHeight: "100vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Title />
          <FlowerImg />
          <Box
            sx={{
              position: "absolute",
              top: "680px",
              left: "70px",
              backgroundColor: "#FEE500",
              width: "280px",
              height: "45px",
              borderRadius: "5px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                alignItems: "center",
                justifyItems: "center",
                top: "8px",
                left: "30px",
              }}
            >
              <Image
                src="/img/kakaoLogo.png"
                alt="KakaoLogo"
                width={30}
                height={33}
              ></Image>
            </Box>
            <Typography
              style={{
                position: "absolute",
                top: "12px",
                left: "80px",
                fontWeight: "600",
                fontFamily: "JuliusSansOne",
                fontSize: "15px",
                color: "#3A1D1D",
              }}
            >
              카카오톡으로 시작하기
            </Typography>
          </Box>
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
