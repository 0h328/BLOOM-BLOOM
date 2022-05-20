import React from "react";
import { Box, Button, Typography, Link } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import { useRouter } from "next/router";

function OrderList({ OrderInfo }) {
  const router = useRouter();
  const handleRoute = () => {
    console.log("hey", OrderInfo);
    router.push({
      pathname: "/orderdetail",
      query: { orderInfo: JSON.stringify(OrderInfo) },
    });
  };
  return (
    <Box
      sx={{
        width: 372,
        height: 146,
        mt: 3,
        mx: "auto",
        border: 1,
        borderColor: "#54535380",
      }}
    >
      <Box
        sx={{
          width: 372,
          height: 146,
          mb: 1,
          display: "flex",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Box sx={{ width: 350, height: 146, mt: 1, ml: 1.5 }}>
          <Box
            sx={{
              display: "flex",
              height: 35,
              mt: 1,
              alignItems: "baseline",
            }}
          >
            <Typography
              sx={{
                fontFamily: "OneMobileLight",
                fontSize: "23px",
                fontWeight: "bold",
              }}
            >
              {OrderInfo.storeName}
            </Typography>
            <Typography
              sx={{ fontFamily: "OneMobileLight", fontSize: "12px", ml: 1 }}
            >
              {OrderInfo.orderDay}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "OneMobileLight",
              fontSize: "11px",
              mt: 2.5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <CallIcon sx={{ fontSize: "11px", mr: 2 }}></CallIcon>
            {OrderInfo.storeContact}
          </Typography>
          <Typography
            sx={{
              fontFamily: "OneMobileLight",
              fontSize: "11px",
              mt: 0.5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocationOnIcon sx={{ fontSize: "11px", mr: 2 }}></LocationOnIcon>
            {OrderInfo.storeAddress}
          </Typography>
        </Box>
        <Box
          sx={{ width: 143.86, height: 144, justifyContent: "flex-end" }}
          onClick={handleRoute}
        >
          <Typography
            sx={{
              fontFamily: "OneMobileLight",
              fontSize: "10px",
              mt: 1,
              mb: 1,
              ml: 5,
            }}
          >
            상세보기
          </Typography>
          <Box sx={{ width: "100%" }}>
            <img
              src={OrderInfo.bouquetImage}
              alt="test"
              width={"100%"}
              height={"auto"}
            ></img>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderList;
