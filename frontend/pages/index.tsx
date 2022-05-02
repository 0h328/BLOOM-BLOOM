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
