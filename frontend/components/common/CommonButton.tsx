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
      }}
      style={{
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: backgroundColor,
        color: "#000",
        fontFamily: "OneMobileLight",
        borderRadius: "5",
        width: "100%",
        height: "auto",
        maxHeight: "50%",
      }}
      onClick={handleBtn}
    >
      <Typography
        component="div"
        sx={{
          ...btnStyleIcon,
        }}
      >
        {icon}
      </Typography>
      <Typography
        component="div"
        sx={{
          ...btnStyleText,
        }}
      >
        {text}
      </Typography>
    </Button>
  );
}

export const btnStyleIcon = {
  height: "auto",
  width: "20%",
  fontWeight: "600",
  fontSize: "14px",
  fontFamily: "OneMobileLight",
  color: "#000",
  padding: "2%",
};
export const btnStyleText = {
  height: "auto",
  // width: "fit-content",
  fontWeight: "600",
  fontSize: "14px",
  fontFamily: "OneMobileLight",
  color: "#000",
  padding: "2%",
};
export default CommonButton;
