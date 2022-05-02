import React from "react";
import { Box, Button } from "@mui/material";
interface imgSaveProps {
  onCapture: () => void;
}
function ImgDownloadBtn({ onCapture = () => {} }: imgSaveProps) {
  return (
    <Box>
      <Button
        variant="contained"
        size="small"
        style={{
          position: "absolute",
          backgroundColor: "#FFE0E0",
          color: "#000",
          fontFamily: "JuliusSansOne",
          fontSize: "15px",
          borderRadius: "5",
          width: 280,
          height: 45,
          bottom: "50px",
          left: "65px",
        }}
        onClick={onCapture}
      >
        이미지 저장
      </Button>
    </Box>
  );
}
export default ImgDownloadBtn;
