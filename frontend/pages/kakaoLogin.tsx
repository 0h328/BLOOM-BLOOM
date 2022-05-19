import React, { useEffect, useState } from "react";
import { getLogin } from "../components/apis/auth";
import { Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import qs from "qs";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styled from "styled-components";

function KakaoLogin() {
  const [code, setCode] = useState<string>();
  const [token, setToken] = useState<string>("");
  //   const [isLogin, setIsLogin] = useState<boolean>(false);
  const router = useRouter();
  const clientId = "df2b93fe31185203897eca6511064994";
  // const redirectUri = "http://localhost:3000/kakaoLogin";
  const redirectUri = "https://bloombloom.kro.kr/kakaoLogin";

  useEffect(() => {
    setCode(new URL(window.location.href).searchParams.get("code"));
  }, []);

  const loginApi = async (code: string) => {
    try {
      console.log("code" + code);
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
      console.log("kakaoToken" + response.data.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (accessToken: string) => {
    try {
      const response = getLogin(accessToken).then((result) => {
        localStorage.setItem("accessToken", result.data.data);
        setToken(result.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token !== null && token !== "") {
      router.push("/main");
    }
  }, [token]);

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
    ></Box>
  );
}
export default KakaoLogin;
