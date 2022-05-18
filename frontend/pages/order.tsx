import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import StoreCardSmall from "../components/order/StoreCardSmall";
import OrderFlower from "../components/order/OrderFlower";
import Request from "../components/order/Request";
import Header from "../components/common/Header";
import MakeButton from "../components/main/MakeButton";
import { useRouter } from "next/router";
import { OrderRequest } from "../components/apis/order"

export default function Order() {
  const [store, setStore] = useState<any>();
  const [bouquetSeq, setBouquetSeq] = useState<number>();
  const [content, setContent] = useState<string>("");
  const router = useRouter();

  const handleContent = (data:string) => {
    setContent(data);
  }

  useEffect(() => {
    if (router.query.storeInfo) {
      setStore(JSON.parse(String(router.query.storeInfo)));
      setBouquetSeq(Number(router.query.bouquetSeq));
      console.log(store);
    }
  }, []);

  const sendOrderRequest = async () => {
    console.log("들어오나요");
    if (store) {
      const body = {
        bouquetSeq: bouquetSeq,
        storeSeq: store.storeSeq,
        orderDesc: content
      };
      var response = await OrderRequest(body);
      console.log(response.data.data)
    }
  }
  return (
    <Box
      style={{
        width: "420px",
        height: "926px",
        margin: "auto",
      }}
    >
      {store !== undefined ? (
        <>
          <Box sx={{ height: 30 }}></Box>
          <Header page="order"></Header>
          <StoreCardSmall storeInfo={store}></StoreCardSmall>
          <OrderFlower bouquetSeq={Number(bouquetSeq)}></OrderFlower>
          <Request handleContent={ handleContent}></Request>
          <Box sx={{ width: 156, mx: "auto" }}>
            <Button
              sx={{
                width: 156,
                height: 36,
                backgroundColor: "#FFE0E0",
                color: "#000000",
                fontFamily: "OneMobileLight",
                fontWeight: "bold",
              }}
              onClick={sendOrderRequest}
            >
              {" "}
              주문의뢰하기{" "}
            </Button>
          </Box>
        </>
      ) : null}
    </Box>
  );
}
