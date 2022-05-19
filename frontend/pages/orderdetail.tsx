import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import StoreCardSmall from "../components/order/StoreCardSmall";
import OrderFlower from "../components/order/OrderFlower";
import OrderContent from "../components/order/OrderContent";
import Header from "../components/common/Header";
import { useRouter } from "next/router";
import { getOrderDetail } from "../components/apis/orderApi";
import { stringify } from "querystring";

export default function OrderDetail() {
  const router = useRouter();
  const [orderInfo, setOrderInfo] = useState<{
    orderSeq: number;
    storeName: string;
    storeContact: string;
    storeAddress: string;
    createdDate: Date;
    bouquetImage: string;
  }>();
  const [orderDetail, setOrderDetail] = useState();
  const [storeDetail, setStoreDetail] = useState<{
    storeAdress: string;
    storeBlogId: string;
    storeContact: string;
    storeImageLink: string;
    storeInstagramId: string;
    storeMapId: string;
    storeName: string;
  }>();
  const [flowerInfo, setFlowerInfo] = useState<{
    bouquetImage: string;
    flowerInfo: Array<{
      flowerCount: number;
      flowerImage: string;
      flowerName: number;
    }>;
  }>();
  const getDetail = async () => {
    const response = await getOrderDetail(orderInfo.orderSeq);
    setOrderDetail(response.data.data);
    console.log(response.data.data);
  };
  useEffect(() => {
    if (orderInfo !== undefined) getDetail();
  }, [orderInfo]);
  useEffect(() => {
    if (!router.isReady) return;
    setOrderInfo(JSON.parse(String(router.query.orderInfo)));
  }, []);
  return (
    <>
      {orderInfo !== undefined && orderDetail !== undefined ? (
        <Box
          style={{
            width: "420px",
            height: "100vh",
            margin: "auto",
            minHeight: "100vh",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFAFA",
          }}
        >
          <Box sx={{ height: "10vh", display: "flex", alignItems: "center" }}>
            <Header></Header>
          </Box>
          <Box sx={{ height: "25vh", display: "flex", alignItems: "center" }}>
            <StoreCardSmall storeInfo={orderDetail}></StoreCardSmall>
          </Box>
          <Box sx={{ height: "30vh", display: "flex", alignItems: "center" }}>
            <OrderFlower orderFlowerInfo={orderDetail}></OrderFlower>
          </Box>
          <Box sx={{ height: "25vh", display: "flex", alignItems: "center" }}>
            <OrderContent orderDetail={orderDetail}></OrderContent>
          </Box>
          <Box
            sx={{ height: "10vh", display: "flex", alignItems: "center" }}
          ></Box>
        </Box>
      ) : null}
    </>
  );
}
