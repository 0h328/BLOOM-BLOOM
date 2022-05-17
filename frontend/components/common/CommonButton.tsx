import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface btnProps {
  icon: string;
  text: string;
  handleBtn?: () => void;
  handleShare?: (code: number) => void;
  backgroundColor: string;
}
function CommonButton({
  icon,
  text,
  handleBtn,
  backgroundColor,
  handleShare,
}: btnProps) {
  return (
    <Button
      variant="contained"
      size="small"
      sx={{
        alignItems: "center",
        mt: "5px",
      }}
      style={{
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: backgroundColor,
        color: "#000",
        fontFamily: "OneMobileLight",
        borderRadius: "5",
        width: 260,
        height: 43,
        maxHeight: "50%",
      }}
      onClick={handleBtn}
    >
      <Typography
        component="div"
        sx={{
          width: "25%",
          ...btnStyle1,
        }}
      >
        {icon}
      </Typography>
      <Typography
        component="div"
        sx={{
          width: "70%",
          ...btnStyle1,
        }}
      >
        {text}
      </Typography>
    </Button>
  );
}

export const btnStyle1 = {
  fontWeight: "600",
  fontSize: "14px",
  fontFamily: "OneMobileLight",
  color: "#000",
};
export default CommonButton;
