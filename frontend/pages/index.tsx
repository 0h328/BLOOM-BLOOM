import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import KakaoBtn from "../components/button/KakaoBtn";
import Title from "../components/login/Title";
import FlowerImg from "../components/login/FlowerImg";
import { useRouter } from "next/router";
import { maxWidth } from "@mui/system";
import { setScreenSize } from "../components/common/Size";
import { detectMobileDevice } from "../components/common/DetectMobileDevice";
import Inform from "../components/common/Inform";
import { motion } from "framer-motion";
import styled from "styled-components";

function Login() {
  const [windowHeight, setWindowHeight] = useState<number>();
  const [isMobile, setIsMobile] = useState<boolean>(false);
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
    setIsMobile(detectMobileDevice(window.navigator.userAgent));
  }, []);
  return (
    <>
      {isMobile ? (
        <>
          <Box
            style={{}}
            sx={{
              mx: "auto",
              width: 420,
              position: "relative",
              height: "100vh",
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
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  top: "15vh",
                  width: "100%",
                }}
              >
                <Title />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  top: "10vh",
                  left: "10vh",
                }}
              >
                {" "}
                <img
                  src={"/img/peonyPurple.png"}
                  alt="리본"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  top: "22vh",
                  left: "20vh",
                }}
              >
                {" "}
                <motion.div
                  animate={{ scale: 1.1 }}
                  transition={{ yoyo: Infinity }}
                  // animate={{ y: 3 }}
                  // transition={{
                  //   yoyo: Infinity,
                  // }}
                >
                  <img
                    src={"/img/hydrangeaBlue.png"}
                    alt="리본"
                    width={"100%"}
                    height={"auto%"}
                  ></img>
                </motion.div>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  top: "50vh",
                  right: "5vh",
                }}
              >
                {" "}
                <img
                  src={"/img/carnationPink.png"}
                  alt="리본"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  top: "20vh",
                  right: "1vh",
                }}
              >
                {" "}
                <motion.div
                  animate={{ scale: 1.1 }}
                  transition={{ yoyo: Infinity }}
                >
                  <img
                    src={"/img/lilyYellow.png"}
                    alt="리본"
                    width={"100%"}
                    height={"auto%"}
                  ></img>
                </motion.div>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  bottom: "3vh",
                  left: "16vh",
                }}
              >
                {" "}
                <img
                  src={"/img/ranunculusPink.png"}
                  alt="리본"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  bottom: "8vh",
                  right: "5vh",
                }}
              >
                {" "}
                <img
                  src={"/img/gerberaOrange.png"}
                  alt="리본"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  top: "1vh",
                  right: "18vh",
                }}
              >
                {" "}
                <img
                  src={"/img/rosePink.png"}
                  alt="리본"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  top: "36vh",
                  left: "38vh",
                }}
              >
                {" "}
                <img
                  src={"/img/lisianthusWhite.png"}
                  alt="리본"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  bottom: "10vh",
                  left: "4vh",
                }}
              >
                {" "}
                <motion.div
                  animate={{ scale: 1.1 }}
                  transition={{ yoyo: Infinity }}
                >
                  <img
                    alt="리본"
                    src={"/img/tulipPurple.png"}
                    width={"100%"}
                    height={"auto%"}
                  ></img>
                </motion.div>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  top: "30vh",
                  left: "4vh",
                }}
              >
                {" "}
                <img
                  src={"/img/carnationOrange.png"}
                  alt="리본"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  bottom: "22vh",
                  right: "2vh",
                }}
              >
                {" "}
                <motion.div
                  animate={{ scale: 1.1 }}
                  transition={{ yoyo: Infinity }}
                >
                  <img
                    src={"/img/peonyWhite.png"}
                    alt="리본"
                    width={"100%"}
                    height={"auto%"}
                  ></img>
                </motion.div>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  bottom: "22vh",
                  left: "24vh",
                }}
              >
                {" "}
                <img
                  src={"/img/hyacinthPink.png"}
                  alt="리본"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  top: "5vh",
                  right: "5vh",
                }}
              >
                {" "}
                <img
                  src={"/img/tulipRed.png"}
                  alt="리본"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  bottom: "42vh",
                  left: "15vh",
                }}
              >
                {" "}
                <img
                  src={"/img/hydrangeaPurple.png"}
                  alt="리본"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  bottom: "22vh",
                  left: "0vh",
                }}
              >
                {" "}
                <img
                  src={"/img/freesiaPink.png"}
                  alt="리본"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  mx: "auto",
                  width: "10vh",
                  top: "-3vh",
                  left: "-2vh",
                }}
              >
                {" "}
                <motion.div
                  animate={{ scale: 1.1 }}
                  transition={{ yoyo: Infinity }}
                >
                  <img
                    src={"/img/ranunculusYellow.png"}
                    alt="리본"
                    width={"100%"}
                    height={"auto%"}
                  ></img>
                </motion.div>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                mx: "auto",
                top: "59vh",
                width: "100%",
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
        </>
      ) : (
        <Inform />
      )}
    </>
  );
}

export default Login;
