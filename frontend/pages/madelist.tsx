import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import FlowerImgList from "../components/main/FlowerImgList";

function MadeList() {
  const imgList = [
    { src: "/img/bouquet1.png" },
    { src: "/img/bouquet2.png" },
    { src: "/img/bouquet3.png" },
    { src: "/img/bouquet1.png" },
    { src: "/img/bouquet2.png" },
    { src: "/img/bouquet3.png" },
    { src: "/img/bouquet1.png" },
    { src: "/img/bouquet2.png" },
    { src: "/img/bouquet3.png" },
  ];

  // const [imgList, setImgList] = useState<Array<{}>>([]);
  return (
    <Box
      sx={{
        mx: "auto",
        width: 420,
        position: "relative",
        backgroundColor: "#FFFAFA",
        height: "840px",
        minHeight: "100vh",
      }}
    >
      <Header page="madelist"></Header>
      <Typography
        sx={{
          ...textStyle,
        }}
      >
        최근 제작한 꽃다발
      </Typography>

      <FlowerImgList
        imgList={imgList}
        top="145px"
        page="madelist"
      ></FlowerImgList>
    </Box>
  );
}

export const textStyle = {
  position: "absolute",
  fontFamily: "Julius Sans One",
  fontStyle: "normal",
  fontWeight: "100",
  fontSize: "17px",
  lineHeight: "17px",
  top: "100px",
  left: "18px",
  color: "rgba(0, 0, 0, 0.8)",
};
export default MadeList;
