import React, { useEffect, useState } from "react";
import { getLogin } from "../components/apis/auth";
import { Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import qs from "qs";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styled from "styled-components";

const Ball = styled(motion.div)`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: #00cec9;
  //   border: 2px solid #252525;
  margin: 0.5em;
`;

const Text = styled(motion.div)`
  margin: 0.5em;
`;

const bounceTransition1 = {
  y: {
    duration: 1,
    yoyo: Infinity,
    ease: "easeIn",
    velocity: 1,
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 1,
  },
};
const bounceTransition = {
  y: {
    duration: 1,
    yoyo: Infinity,
    ease: "easeIn",
    velocity: 30,
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 1,
  },
};

function KakaoLogin() {
  const [code, setCode] = useState<string>();
  //   const [isLogin, setIsLogin] = useState<boolean>(false);
  const router = useRouter();
  const clientId = "df2b93fe31185203897eca6511064994";
  const redirectUri = "http://localhost:3000/kakaoLogin";
  useEffect(() => {
    setCode(new URL(window.location.href).searchParams.get("code"));
  }, []);

  const loginApi = async (code: string) => {
    try {
      console.log(code);
      getToken(code);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code !== undefined) loginApi(code);
  }, [code]);

  const getToken = async (code: string) => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: clientId,
      redirect_uri: redirectUri,
      code,
    });
    try {
      const response = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      login(response.data.access_token);
      console.log(response.data.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (accessToken: string) => {
    try {
      const response = getLogin(accessToken);
      response.then((result) =>
        localStorage.setItem("accessToken", result.data.data)
      );
      router.push("/main");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        mx: "auto",
        width: 420,
        position: "relative",
        display: "flex",
        backgroundColor: "#FFFAFA",
        height: "840px",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ position: "absolute", display: "flex", top: "40%" }}>
        <Ball
          transition={bounceTransition}
          animate={{
            y: ["-9em", "3.8em"],
            backgroundColor: ["#9b59b6", "#99DDCC"],
          }}
        />
        <Ball
          transition={bounceTransition}
          animate={{
            y: ["-10em", "4.8em"],
            backgroundColor: ["#9b59b6", "#EFDFBF"],
          }}
        />
        <Ball
          transition={bounceTransition}
          animate={{
            y: ["-11em", "5.8em"],
            backgroundColor: ["#9b59b6", "#FFC0D0"],
          }}
        />
        <Ball
          transition={bounceTransition}
          animate={{
            y: ["-12em", "6.8em"],
            backgroundColor: ["#9b59b6", "#BAD7DF"],
          }}
        />
      </Box>
    </Box>
  );
}
export default KakaoLogin;
