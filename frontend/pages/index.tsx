import React from "react";
import { Box } from "@mui/material";
import KakaoLogin from "../components/login/KakaoLogin";
import Title from "../components/login/Title";
import FlowerImg from "../components/login/FlowerImg";
function Login() {
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
          }}
        >
          <Title />
          <FlowerImg />
          <KakaoLogin />
        </Box>
      </Box>
    </>
  );
}

export default Login;
