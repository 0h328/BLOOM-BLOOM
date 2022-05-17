import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import BouquetImg from "../../components/present/BouquetImg";
import CommonButton from "../common/CommonButton";

interface modalProps {
  bouquetImage: string;
  handleCheckModal: (state: boolean) => void;
  checkModal: boolean;
  handleComplete: () => void;
}

function BouquetCheckModal({
  bouquetImage,
  handleCheckModal,
  checkModal,
  handleComplete,
}: modalProps) {
  const [curHeight, setCurHeight] = useState<number>();
  const [curWidth, setCurWidth] = useState<number>();
  const [imgHeight, setImgHeight] = useState<number>();
  const [imgWidth, setImgWidth] = useState<number>();
  const closeBouquetDetailModal = () => {
    handleCheckModal(false);
  };
  const handleResize = () => {
    setImgWidth(window.innerWidth * 0.9);
    setImgHeight(imgWidth * 1.2);
    setCurHeight(window.innerHeight);
    // console.log(
    //   `화면 사이즈 x : ${window.innerWidth}, y : ${window.innerHeight}`
    // );
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setImgWidth(window.innerWidth * 0.9);
    setImgHeight(imgWidth * 1.2);
    setCurHeight(window.innerHeight);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    console.log(imgWidth);
  });
  return (
    <>
      {checkModal ? (
        <Box
          sx={{
            position: "absolute",
            width: "420px",
            height: "100%",
            backgroundColor: "rgb(31 31 31 / 33%)",
            zIndex: 900,
          }}
        >
          <Box
            sx={{
              mt: "10%",
              width: "90%",
              height: "90%",
              backgroundColor: "#FFFAFA",
              zIndex: 1300,
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "6px 6px 4px rgba(0, 0, 0, 0.25)",
              mx: "auto",
            }}
          >
            <Box sx={{ height: "10%", mx: "auto" }}>
              <Typography
                sx={{
                  // backgroundColor: "#FFE0E0",
                  color: "#000000",
                  fontFamily: "ONEMobileLight",
                  fontSize: "1.1em",
                }}
              >
                완성된 꽃다발이 마음에 드시나요?
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "center", height: "60%" }}
            >
              <img
                src={bouquetImage}
                alt="꽃다발"
                width={"100%"}
                height={"100%"}
              ></img>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "15%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <CommonButton
                icon={"🌼"}
                text={"더 꾸미러 가기"}
                handleBtn={closeBouquetDetailModal}
                backgroundColor="#EFDFBF"
              ></CommonButton>
              <Link href="/confirm" passHref>
                <CommonButton
                  icon={"👍"}
                  text={"꽃다발 꾸미기 완성"}
                  handleBtn={handleComplete}
                  backgroundColor="#FFE0E0"
                ></CommonButton>
              </Link>
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export const btnStyle = {
  margin: "5%",
  width: "40%",
  backgroundColor: "#FFE0E0",
  color: "#000000",
  fontFamily: "ONEMobileLight",
  "&:hover": { backgroundColor: "#BAD7DF" },
};

export default BouquetCheckModal;
