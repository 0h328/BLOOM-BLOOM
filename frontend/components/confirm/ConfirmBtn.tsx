import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface btnProps {
  click: (e: any) => void;
  title: string;
  text: string;
}

function ConfirmBtn({ click, title, text }: btnProps) {
  return (
    <>
      <Button
        variant="contained"
        size="small"
        style={{
          position: "absolute",
          backgroundColor: "#FFE0E0",
          color: "#000",
          fontFamily: "JuliusSansOne",
          borderRadius: "20",
          width: 340,
          height: 45,
        }}
        onClick={(e) => click(e)}
      >
        {title}
      </Button>
      <Typography
        sx={{
          position: "absolute",
          width: "340px",
          top: "50px",
          left: "10px",
          fontFamily: "JuliusSansOne",
          fontSize: "13px",
        }}
      >
        {text}
      </Typography>
    </>
  );
}

export default ConfirmBtn;
