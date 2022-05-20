import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
interface btnProps {
  handleBtn: () => void;
  title: string;
}
function KakaoBtn({ handleBtn, title }: btnProps) {
  return (
    <Button
      variant="contained"
      size="small"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: "#FEE500",
        color: "#3A1D1D",
        fontFamily: "OneMobileLight",
        borderRadius: "5",
        width: 260,
        height: 45,
      }}
      onClick={handleBtn}
    >
      <Typography
        component="div"
        sx={{
          width: "20%",
          fontWeight: "600",
          fontSize: "15px",
          fontFamily: "OneMobileLight",
        }}
      >
        🎁
      </Typography>
      <Typography
        component="div"
        sx={{
          width: "85%",
          fontWeight: "600",
          fontSize: "15px",
          fontFamily: "OneMobileLight",
          color: "#3A1D1D",
        }}
      >
        {title}
      </Typography>
    </Button>
  );
}

export default KakaoBtn;
