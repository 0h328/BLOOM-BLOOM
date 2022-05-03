import React, { useEffect, useState } from "react";
import { getLogin } from "../components/apis/auth";
import Spring from "../components/login/Spring";
import { Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import qs from "qs";
import { useRouter } from "next/router";
function KakaoLogin() {
  const [code, setCode] = useState<string>();
  //   const [isLogin, setIsLogin] = useState<boolean>(false);
  const router = useRouter();
  const clientId = "df2b93fe31185203897eca6511064994";
  const redirectUri = "http://localhost:3000/kakaoLogin";
  useEffect(() => {
    setCode(new URL(window.location.href).searchParams.get("code"));
  }, []);

  useEffect(() => {
    if (code !== undefined) loginApi(code);
  }, [code]);

  const loginApi = async (code: string) => {
    try {
      console.log(code);
      getToken(code);
    } catch (error) {
      console.log(error);
    }
  };

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
        backgroundColor: "#FFFAFA",
        height: "840px",
        minHeight: "100vh",
      }}
    >
      <CircularProgress sx={{ color: "#FFC0D0" }} />
    </Box>
  );
}
export default KakaoLogin;
