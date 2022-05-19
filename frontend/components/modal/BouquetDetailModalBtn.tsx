import React, { useState } from "react";
import { Box, Typography, Grid, Button, Link } from "@mui/material";
import { deleteBouquet } from "../apis/bouquetApi";
import CommonButton from "../common/CommonButton";
import Router from 'next/router';

interface btnProps {
  handleBtn?: (code: number) => void;
  bouquetSeq: number;
}
function BouquetDetailModalBtn({ handleBtn, bouquetSeq }: btnProps) {
  const SendQuery = () => {
    const param = bouquetSeq;
    Router.push('/ordermap/?bouquetSeq='+param,'/ordermap');
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        width: "60%",
        justifyContent: "space-evenly",
      }}
    >
      <Button
        variant="contained"
        size="small"
        sx={{
          alignItems: "center",
        }}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#EFDFBF",
          color: "#000",
          fontFamily: "OneMobileLight",
          borderRadius: "5",
          width: "100%",
          height: "auto",
          maxHeight: "50%",
        }}
        onClick={() => handleBtn(0)}
      >
        <Typography
          component="div"
          sx={{
            ...btnStyleIcon,
          }}
        >
          📜
        </Typography>
        <Typography
          component="div"
          sx={{
            ...btnStyle1,
          }}
        >
          메세지와 함께 공유하기
        </Typography>
      </Button>
      <CommonButton
        icon={"📱"}
        text={"꽃다발 주문하기"}
        backgroundColor={"#FFE0E0"}
        handleBtn={SendQuery}
      ></CommonButton>
      
    </Box>
  );
}

export const btnStyle = {
  backgroundColor: "#FFE0E0",
  color: "#000000",
  fontFamily: "OneMobileLight",
  margin: "10px",
  textAlign: "center",
  width: "auto",
  "&:hover": { backgroundColor: "#BAD7DF" },
};
export const btnStyle1 = {
  height: "auto",
  width: "fit-content",
  fontWeight: "600",
  fontSize: "14px",
  fontFamily: "OneMobileLight",
  color: "#000",
  margin: "2%",
  textAlign: "center",
};

export const btnStyleIcon = {
  height: "auto",
  width: "20%",
  fontWeight: "600",
  fontSize: "14px",
  fontFamily: "OneMobileLight",
  color: "#000",
  padding: "2%",
};

export default BouquetDetailModalBtn;
