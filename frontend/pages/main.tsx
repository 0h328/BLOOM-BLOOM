import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Header from "../components/common/Header";
import MakeButton from "../components/main/MakeButton";
import FlowerImgListTitle from "../components/main/FlowerImgListTitle";
import FlowerImgList from "../components/main/FlowerImgList";
import { getRecentBouquetList } from "../components/apis/bouquetApi";
import { getOrderList } from "../components/apis/orderApi";
import ExplainModal from "../components/modal/ExplainModal";
import Inform from "../components/common/Inform";
import { detectMobileDevice } from "../components/common/DetectMobileDevice";

function Main() {
  const [madeBouquetList, setMadeBouquetList] =
    useState<[{ bouquetSeq: number; bouquetImage: string }]>();
  const [orderBouquetList, setOrderBouquetList] = useState<
    Array<{ bouquetSeq: number; bouquetImage: string }>
  >([]);
  const [windowHeight, setWindowHeight] = useState<number>();
  const [windowWidth, setWindowWidth] = useState<number>();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [explainModal, setExplainModal] = useState<boolean>(false);
  const handleExplainModal = (state: boolean) => {
    setExplainModal(state);
  };
  const handleRecentList = async () => {
    const response = await getRecentBouquetList();
    console.log(response.data.data.orderBouquet.length);
    setMadeBouquetList(response.data.data.makeBouquet);
    setOrderBouquetList(response.data.data.orderBouquet);
  };
  const handleMake = () => {
    handleExplainModal(true);
  };
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowHeight(window.innerWidth);
    handleRecentList();
  }, []);
  useEffect(() => {
    console.log(orderBouquetList.length);
  }, [orderBouquetList]);
  useEffect(() => {
    setIsMobile(detectMobileDevice(window.navigator.userAgent));
    console.log(detectMobileDevice(window.navigator.userAgent));
  }, []);
  return (
    <>
      {isMobile ? (
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
          <ExplainModal
            explainModal={explainModal}
            handleExplainModal={handleExplainModal}
          ></ExplainModal>
          <Box sx={{ height: "10vh", display: "flex", alignItems: "center" }}>
            <Header page="main"></Header>
          </Box>
          <Box
            sx={{ height: "10vh", display: "flex", justifyContent: "center" }}
          >
            <MakeButton handleMake={handleMake} />
          </Box>
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              width: "95%",
              height: "70vh",
              borderRadius: "40px",
              justifyContent: "center",
              mx: "auto",
              boxShadow: "2px -2px 5px 1px #dadce0",
            }}
          >
            <Box sx={{ height: "10vh" }}>
              <FlowerImgListTitle
                title="최근 제작한 꽃다발"
                link="/madelist"
              ></FlowerImgListTitle>
            </Box>
            <Box sx={{ height: "25vh", overflow: "hidden" }}>
              {madeBouquetList !== undefined ? (
                <FlowerImgList
                  bouquetList={madeBouquetList}
                  infoText="제작한 꽃다발이 없습니다"
                ></FlowerImgList>
              ) : null}
            </Box>
            <Box sx={{ height: "10vh" }}>
              <FlowerImgListTitle
                title="최근 주문한 꽃다발"
                link="/orderlist"
              ></FlowerImgListTitle>
            </Box>
            <Box sx={{ height: "25vh" }}>
              {orderBouquetList !== undefined ? (
                <FlowerImgList
                  bouquetList={orderBouquetList}
                  infoText="주문한 꽃다발이 없습니다"
                ></FlowerImgList>
              ) : null}
            </Box>
          </Box>
          <Box
            sx={{ height: "5vh", display: "flex", justifyContent: "center" }}
          ></Box>
        </Box>
      ) : (
        <Inform></Inform>
      )}
    </>
  );
}

export const infoText = {
  fontSize: "20px",
  fontFamily: "ONEMobileLight",
};
export default Main;
