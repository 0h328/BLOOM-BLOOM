import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Header from "../components/common/Header";
import MakeButton from "../components/main/MakeButton";
import FlowerImgListTitle from "../components/main/FlowerImgListTitle";
import FlowerImgList from "../components/main/FlowerImgList";
import { getRecentBouquetList } from "../components/apis/bouquetApi";
import { getOrderList } from "../components/apis/orderApi";
function Main() {
  //test용
  const bouquetList = [];
  const [madeBouquetList, setMadeBouquetList] =
    useState<[{ bouquetSeq: number; bouquetImage: string }]>();
  const [orderBouquetList, setOrderBouquetList] = useState<
    Array<{ bouquetSeq: number; bouquetImage: string }>
  >([]);
  const [windowHeight, setWindowHeight] = useState<number>();
  const [windowWidth, setWindowWidth] = useState<number>();
  const handleRecentList = async () => {
    const response = await getRecentBouquetList();
    console.log(response.data.data.orderBouquet.length);
    setMadeBouquetList(response.data.data.makeBouquet);
    setOrderBouquetList(response.data.data.orderBouquet);
  };
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowHeight(window.innerWidth);
    handleRecentList();
  }, []);
  useEffect(() => {
    console.log(orderBouquetList.length);
  }, [orderBouquetList]);
  return (
    <>
      <Box
        sx={{
          mx: "auto",
          width: 430,
          position: "relative",
          backgroundColor: "#FFE0E0",
          height: "100vh",
          minHeight: "100vh",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ height: "10%" }}>
          <Header page="main"></Header>
        </Box>
        <Box sx={{ height: "10%", display: "flex", justifyContent: "center" }}>
          <MakeButton />
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            width: "95%",
            height: "70%",
            borderRadius: "40px",
            justifyContent: "center",
            mx: "auto",
          }}
        >
          <Box sx={{ height: "15%" }}>
            <FlowerImgListTitle
              title="최근 제작한 꽃다발"
              link="/madelist"
            ></FlowerImgListTitle>
          </Box>
          <Box sx={{ height: "35%" }}>
            {madeBouquetList !== undefined ? (
              <FlowerImgList
                bouquetList={madeBouquetList}
                infoText="제작한 꽃다발이 없습니다"
              ></FlowerImgList>
            ) : null}
          </Box>
          <Box sx={{ height: "15%" }}>
            <FlowerImgListTitle
              title="최근 주문한 꽃다발"
              link="/orderlist"
            ></FlowerImgListTitle>
          </Box>
          <Box sx={{ height: "35%" }}>
            {orderBouquetList !== undefined ? (
              <FlowerImgList
                bouquetList={orderBouquetList}
                infoText="주문한 꽃다발이 없습니다"
              ></FlowerImgList>
            ) : null}
          </Box>
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
