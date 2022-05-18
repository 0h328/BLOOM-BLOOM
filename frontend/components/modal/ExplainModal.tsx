import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CommonButton from "../common/CommonButton";
import { Router } from "react-router-dom";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";

interface modalProps {
  explainModal: boolean;
  handleExplainModal: (state: boolean) => void;
}
function ExplainModal({ explainModal, handleExplainModal }: modalProps) {
  const router = useRouter();
  return (
    <>
      {explainModal ? (
        <Box
          className="modal"
          sx={{
            position: "absolute",
            width: "420px",
            height: "100vh",
            backgroundColor: "rgb(31 31 31 / 33%)",
            zIndex: 900,
          }}
        >
          <Box
            sx={{
              mt: "10vh",
              width: "90%",
              height: "80vh",
              backgroundColor: "#FFFAFA",
              zIndex: 1300,
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "6px 6px 4px rgba(0, 0, 0, 0.25)",
              mx: "auto",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                ...textStyle,
                fontSize: "1rem",
                height: "6vh",
              }}
            >
              꽃다발을 다음과 같은 순서로 만들 수 있습니다
              {/* <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => {
                  handleExplainModal(false);
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton> */}
            </Box>
            <Box
              sx={{
                ...textStyle,
              }}
            >
              1.포장지 리본 부속꽃을 골라주세요
            </Box>
            <Box sx={{ height: "10vh", display: "flex" }}>
              <Box sx={{ mx: "auto", width: "10vh" }}>
                {" "}
                <img
                  src={"/img/wrapSkyblue.png"}
                  alt="꽃다발"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box sx={{ mx: "auto", width: "10vh" }}>
                {" "}
                <img
                  src={"/img/ribbonDeepPink.png"}
                  alt="리본"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box sx={{ mx: "auto", width: "10vh" }}>
                {" "}
                <img
                  src={"/img/flower2.png"}
                  alt="부속꽃"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
            </Box>
            <Box
              sx={{
                ...textStyle,
              }}
            >
              2.꽃다발에 넣을 꽃을 골라주세요
            </Box>
            <Box sx={{ height: "10vh", display: "flex" }}>
              <Box sx={{ mx: "auto", width: "8vh" }}>
                <img
                  src={"/img/gerberaPink.png"}
                  alt="부속꽃"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box sx={{ mx: "auto", width: "8vh" }}>
                <img
                  src={"/img/ranunculusPurple.png"}
                  alt="부속꽃"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box sx={{ mx: "auto", width: "8vh" }}>
                <img
                  src={"/img/tulipYellow.png"}
                  alt="부속꽃"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
              <Box sx={{ mx: "auto", width: "8vh" }}>
                <img
                  src={"/img/roseOrange.png"}
                  alt="부속꽃"
                  width={"100%"}
                  height={"auto%"}
                ></img>
              </Box>
            </Box>
            <Box
              sx={{
                ...textStyle,
              }}
            >
              3.꽃으로 빈 꽃다발을 채워주세요
            </Box>
            <Box sx={{ mx: "auto", width: "16vh" }}>
              <img
                src={"/img/empty.png"}
                alt="빈꽃다발"
                width={"100%"}
                height={"auto%"}
              ></img>
            </Box>
            <Box
              sx={{
                ...textStyle,
              }}
            >
              4.꽃다발 완성💐
            </Box>
            <Box sx={{ mx: "auto", width: "20vh" }}>
              <img
                src={"/img/mainimage.png"}
                alt="부속꽃"
                width={"100%"}
                height={"auto%"}
              ></img>
            </Box>
            <Box
              sx={{
                mx: "auto",
                height: "10vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                size="small"
                sx={{
                  mx: "auto",
                }}
                style={{
                  backgroundColor: "#FFE0E0",
                  color: "#000",
                  fontFamily: "OneMobileLight",
                  borderRadius: "5",
                  width: "40%",
                  height: "2rem",
                }}
                onClick={() => handleExplainModal(false)}
              >
                <Typography
                  component="div"
                  sx={{
                    ...btnStyleText,
                  }}
                >
                  다음에 만들기 😢
                </Typography>
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{
                  mx: "auto",
                }}
                style={{
                  backgroundColor: "#FFE0E0",
                  color: "#000",
                  fontFamily: "OneMobileLight",
                  borderRadius: "5",
                  width: "40%",
                  height: "2rem",
                }}
                onClick={() => {
                  router.push("/bouquet");
                }}
              >
                <Typography
                  component="div"
                  sx={{
                    ...btnStyleText,
                  }}
                >
                  꽃다발 만들기 🌸
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}
export const textStyle = {
  height: "6vh",
  display: "flex",
  alignItems: "center",
  color: "#000",
  fontFamily: "ONEMobileLight",
  fontSize: "0.8rem",
  fontWeight: 600,
  textAlign: "center",
};

export const btnStyleText = {
  height: "auto",
  fontWeight: "600",
  fontSize: "13px",
  fontFamily: "OneMobileLight",
  color: "#000",
  padding: "2%",
  textAlign: "center",
  width: "100%",
  minWidth: "fit-content",
};
export default ExplainModal;
