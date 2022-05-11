import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";
import { bounceTransition1 } from "./kakaoLogin";

const Custom404 = () => {
  const [isLogin, setIsLogin] = useState(false);
  const Cross = styled(motion.div)`
    width: 100%;
    height: 2em;
    background-color: transparent;
    fontsize: 3rem;
  `;

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLogin(true);
    }
  }, []);
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "80%",
        }}
      >
        {isLogin ? (
          <Box
            sx={{
              width: "90%",
              height: "80%",
              backgroundColor: "#BAD7DF",
              borderRadius: "10px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "6rem",
                fontFamily: "JuliusSansOne",
              }}
            >
              404
            </Typography>
            <Cross
              transition={bounceTransition1}
              animate={{
                y: ["1rem", "3rem"],
                backgroundColor: ["#9b59b6", "rgba(255, 224, 224, 0)"],
              }}
            >
              <Typography
                sx={{
                  fontFamily: "JuliusSansOne",
                  whiteSpace: "pre-wrap",
                  lineHeight: "2rem",
                }}
              >
                ❌ ❌ ❌ ❌ ❌
                <br /> 접근할 수 없는 페이지 입니다
                <br /> 메인페이지로 이동합니다
                <br />❌ ❌ ❌ ❌ ❌
              </Typography>
            </Cross>
          </Box>
        ) : (
          <Box>로그인 후 이용해주세요</Box>
        )}
      </Box>
    </Box>
  );
};

export default Custom404;
