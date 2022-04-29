import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import MakeButton from "../components/main/MakeButton";
import FlowerImgListTitle from "../components/main/FloweImgListTitle";
import FlowerImgList from "../components/main/FlowerImgList";
function Main() {
  const bouquetList = [
    { bouquetSeq: 1, bouquetImage: "/img/bouquet1.png" },
    { bouquetSeq: 2, bouquetImage: "/img/bouquet2.png" },
    { bouquetSeq: 3, bouquetImage: "/img/bouquet3.png" },
  ];
  return (
    <>
      <Box
        sx={{
          mx: "auto",
          width: 420,
          position: "relative",
          backgroundColor: "#FFE0E0",
          height: "840px",
          minHeight: "100vh",
        }}
      >
        <Header page="main"></Header>
        <MakeButton />
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            position: "absolute",
            width: 410,
            height: "70%",
            top: "270px",
            left: "5px",
            borderRadius: "40px",
            overflow: "hidden",
          }}
        >
          <FlowerImgListTitle
            title="최근 제작한 꽃다발"
            link="/madelist"
            top="25px"
          ></FlowerImgListTitle>

          <FlowerImgList bouquetList={bouquetList} top="65px"></FlowerImgList>
          <FlowerImgListTitle
            title="최근 주문한 꽃다발"
            link="/orderlist"
            top="280px"
          ></FlowerImgListTitle>
          <FlowerImgList bouquetList={bouquetList} top="315px"></FlowerImgList>
        </Box>
      </Box>
    </>
  );
}

export default Main;
