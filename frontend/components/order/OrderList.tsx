import { Box, Button, Typography, Link } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import React from "react";

function OrderList({ OrderInfo }) {
  return (
    <Box
      sx={{
        width: 372,
        height: 146,
        mt: 3,
        mx: "auto",
        border: 1,
        borderColor: "grey.300",
      }}
    >
      <Box sx={{ width: 372, height: 146, mb: 1, display: "flex" }}>
        <Box sx={{ width: 350, height: 146, mt: 1, ml: 1.5 }}>
          <Box
            sx={{ display: "flex", height: 35, mt: 1, alignItems: "baseline" }}
          >
            <Typography
              sx={{
                fontFamily: "OneMobileLight",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              {OrderInfo.storeName}
            </Typography>
            <Typography
              sx={{
                fontFamily: "OneMobileLight",
                fontSize: "12px",
                fontWeight: "bold",
                ml: 1,
              }}
            >
              주문일자
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
            {OrderInfo.storeCall}
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
        <Box sx={{ width: 143.86, height: 144, justifyContent: "flex-end" }}>
          <Link href="/orderdetail" sx={{ textDecoration: "none" }}>
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
          </Link>
          <img
            src={OrderInfo.bouquetImage}
            alt="test"
            width={"100%"}
            height={"80%"}
          ></img>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderList;
