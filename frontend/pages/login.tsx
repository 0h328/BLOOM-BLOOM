import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import Image from "next/image";
import KakaoBtn from "../components/login/KakaoBtn";
import Title from "../components/login/Title";
const Login = () => {
  const handleBtn = () => {
    handleLogin();
  };
  const handleLogin = () => {};
  return (
    <Box>
      <Title></Title>
      <Box>
        <Image
          src="/img/loginFlower1.jpg"
          alt="KakaoLogo"
          width={478}
          height={288}
        ></Image>
        <Image
          src="/img/loginFlower2.jpg"
          alt="KakaoLogo"
          width={478}
          height={288}
        ></Image>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Login;
