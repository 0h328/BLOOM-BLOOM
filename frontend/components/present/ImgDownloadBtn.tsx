import React from "react";
import { Box, Button } from "@mui/material";
interface imgSaveProps {
  onCapture: () => void;
}
function ImgDownloadBtn({ onCapture = () => {} }: imgSaveProps) {
  return (
    <Button
      variant="contained"
      size="small"
      style={{
        backgroundColor: "#FFE0E0",
        color: "#000",
        fontFamily: "JuliusSansOne",
        fontSize: "15px",
        borderRadius: "5",
        width: "50%",
      }}
      onClick={onCapture}
    >
      이미지 저장
    </Button>
  );
}
export default ImgDownloadBtn;
