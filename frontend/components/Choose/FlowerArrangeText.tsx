import React from "react";
import Link from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Typography, IconButton } from "@mui/material";
interface textProps {
  handleSaveImg: () => void;
  handleArrange: (state: boolean) => void;
  finish: boolean;
}
function FlowerArrangeText({
  handleSaveImg,
  finish,
  handleArrange,
}: textProps) {
  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          textAlign="center"
          display="flex"
          width="100%"
          justifyContent="space-around"
          sx={{ fontFamily: "OneMobileLight", fontWeight: 600 }}
        >
          <IconButton
            component="div"
            style={{ color: "black", marginBottom: "5px" }}
          >
            <Link href="/flower" passHref>
              <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
            </Link>
          </IconButton>
          꽃을 배치해주세요
          <IconButton
            component="div"
            style={{
              color: "black",
              display: "flex",
              flexDirection: "column",
              marginBottom: "5px",
            }}
            onClick={() => handleArrange(true)}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Typography>
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "OneMobileLight",
          fontWeight: "600",
          fontSize: "12px",
          color: "#6c6c6c",
        }}
      >
        꽃을 꽃다발 안에 배치해주세요
      </Typography>
    </>
  );
}

export default FlowerArrangeText;
