import React from "react";
import Link from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Typography, IconButton } from "@mui/material";
interface textProps {
  handleSaveImg: () => void;
}
function FlowerArrangeText({ handleSaveImg }: textProps) {
  return (
    <Typography variant="h6" gutterBottom component="div" textAlign="center">
      <IconButton style={{ color: "black", marginBottom: "5px" }}>
        <Link href="/flower" passHref>
          <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        </Link>
      </IconButton>
      꽃을 배치해주세요
      <IconButton
        style={{ color: "black", marginBottom: "5px" }}
        onClick={handleSaveImg}
      >
        <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
      </IconButton>
      <Typography
        variant="subtitle2"
        gutterBottom
        component="div"
        style={{ textAlign: "center" }}
      >
        꽃 배치 완료 후 다음으로 넘어가주세요
      </Typography>
    </Typography>
  );
}

export default FlowerArrangeText;
