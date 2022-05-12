import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Header from "../components/common/Header";
import MakeButton from "../components/main/MakeButton";
import FlowerImgListTitle from "../components/main/FlowerImgListTitle";
import FlowerImgList from "../components/main/FlowerImgList";
import { getRecentBouquetList } from "../components/apis/bouquetApi";
import { getOrderList } from "../components/apis/orderApi";
function Main() {
  //test용
  // const bouquetList = [
  //   { bouquetSeq: 1, bouquetImage: "/img/bouquet1.png" },
  //   { bouquetSeq: 2, bouquetImage: "/img/bouquet2.png" },
  //   { bouquetSeq: 3, bouquetImage: "/img/bouquet3.png" },
  // ];
  const [madeBouquetList, setMadeBouquetList] =
    useState<[{ bouquetSeq: number; bouquetImage: string }]>();
  const [orderBouquetList, setOrderBouquetList] =
    useState<[{ bouquetSeq: number; bouquetImage: string }]>();
  const [windowHeight, setWindowHeight] = useState<number>();
  const handleRecentList = async () => {
    const response = await getRecentBouquetList();
    console.log(response.data.data.makeBouquet);
    setMadeBouquetList(response.data.data.makeBouquet);
    setOrderBouquetList(response.data.data.orderBouquet);
  };
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    handleRecentList();
  }, []);
  return (
    <>
      <Box
        sx={{
          mx: "auto",
          width: windowHeight > 480 ? 420 : "100%",
          position: "relative",
          backgroundColor: "#FFE0E0",
          height: "100vh",
          minHeight: "100vh",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Box sx={{ position: "absolute", top: "2%" }}>
          <Header page="main"></Header>
        </Box>
        <Box sx={{ position: "absolute", top: "15%" }}>
          <MakeButton />
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            position: "absolute",
            width: "95%",
            height: "70%",
            top: "26%",
            borderRadius: "40px",
            overflow: "hidden",
          }}
        >
          <FlowerImgListTitle
            title="최근 제작한 꽃다발"
            link="/madelist"
            top="5%"
          ></FlowerImgListTitle>
          {madeBouquetList !== undefined ? (
            <FlowerImgList
              bouquetList={madeBouquetList}
              top="12%"
              infoText="제작한 꽃다발이 없습니다"
            ></FlowerImgList>
          ) : null}
          <FlowerImgListTitle
            title="최근 주문한 꽃다발"
            link="/orderlist"
            top="50%"
          ></FlowerImgListTitle>
          {orderBouquetList !== undefined ? (
            <FlowerImgList
              bouquetList={madeBouquetList}
              top="37%"
              infoText="주문한 꽃다발이 없습니다"
            ></FlowerImgList>
          ) : null}
        </Box>
      </Box>
    </>
  );
}

export const infoText = {
  fontSize: "20px",
  fontFamily: "ONEMobileLight",
};
export default Main;
