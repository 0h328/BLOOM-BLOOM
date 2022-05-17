import React, { useState } from "react";
import { Box, Typography, Grid, Button, Link } from "@mui/material";
import { deleteBouquet } from "../apis/bouquetApi";
import CommonButton from "../common/CommonButton";
interface btnProps {
  handleBtn?: (code: number) => void;
  bouquetSeq: number;
}
function BouquetDetailModalBtn({ handleBtn, bouquetSeq }: btnProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button
        variant="contained"
        size="small"
        sx={{
          alignItems: "center",
          mb: "10px",
        }}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#EFDFBF",
          color: "#000",
          fontFamily: "OneMobileLight",
          borderRadius: "5",
          width: 260,
          height: 43,
          maxHeight: "50%",
        }}
        onClick={() => handleBtn(0)}
      >
        <Typography
          component="div"
          sx={{
            width: "25%",
            ...btnStyle1,
          }}
        >
          📜
        </Typography>
        <Typography
          component="div"
          sx={{
            width: "70%",
            ...btnStyle1,
          }}
        >
          메세지와 함께 공유하기
        </Typography>
      </Button>
      <Link href="/ordermap" sx={{ textDecoration: "none" }}>
        <CommonButton
          icon={"📱"}
          text={"꽃다발 주문하기"}
          backgroundColor={"#FFE0E0"}
        ></CommonButton>
      </Link>
    </Box>
  );
}

export const btnStyle = {
  backgroundColor: "#FFE0E0",
  color: "#000000",
  fontFamily: "OneMobileLight",
  margin: "10px",
  "&:hover": { backgroundColor: "#BAD7DF" },
};
export const btnStyle1 = {
  fontWeight: "600",
  fontSize: "14px",
  fontFamily: "OneMobileLight",
  color: "#000",
};

export default BouquetDetailModalBtn;
