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
    <Box>
      <Button
        variant="contained"
        size="small"
        style={{
          backgroundColor: "#FFE0E0",
          color: "#000",
          fontFamily: "OneMobileLight",
          fontWeight: "bold",
          fontSize: "1rem",
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
          width: "100%",
          top: "10%",
          fontFamily: "OneMobileLight",
          fontSize: "0.8rem",
          mt: "3%",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default ConfirmBtn;
