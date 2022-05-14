import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import FlowerInfoList from "../components/modal/FlowerInfoList";
import Image from "next/image";
import Header from "../components/common/Header";

function Inquire() {
  //test용 dummy data
  const bouquetImage = "/img/bouquet1.png";
  const flowerinfoList = [
    {
      flowerName: "수국",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
  ];
  const customerdata = { name: "김정혁", phonenumber: "010-5232-6532" };
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
      <Box sx={{ position: "absolute", top: "30px" }}>
        <Header></Header>
      </Box>
      <Box sx={{ position: "absolute", top: "10%", left: "10%" }}>
        <Image src={bouquetImage} alt="꽃다발" width={335} height={390}></Image>
      </Box>
    </Box>
  );
}

export const textStyle = {
  fontSize: "15px",
  fontWeight: "bold",
  fontFamily: "JuliusSansOne",
};
export default Inquire;
