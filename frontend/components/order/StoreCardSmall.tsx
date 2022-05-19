import { Box, Button, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";

function StoreCardSmall({ storeInfo }) {
  console.log("small", storeInfo.storeImageLink);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#FFE0E0",
        mx: "auto",
      }}
    >
      <Box
        sx={{ width: "100%", height: "100%", mt: 1, mb: 1, display: "flex" }}
      >
        <Box sx={{ width: "35%", height: 120, m: 2, overflow: "hidden" }}>
          <img
            src={storeInfo.storeImageLink}
            alt="대표이미지"
            width={"100%"}
            height={"auto"}
          ></img>
        </Box>
        <Box sx={{ width: "65%", height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              height: 35,
              alignItems: "baseline",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "OneMobileLight",
                fontSize: "22px",
                fontWeight: "bold",
                minWidth: "fit-content",
              }}
            >
              {storeInfo.storeName}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "OneMobileLight",
              fontSize: "13px",
              mt: 1,
              display: "flex",
              alignItems: "center",
              fontWeight: 600,
            }}
          >
            <CallIcon sx={{ fontSize: "11px", mr: 2 }}></CallIcon>
            {storeInfo.storeContact}
          </Typography>
          <Typography
            sx={{
              fontFamily: "OneMobileLight",
              fontSize: "13px",
              mt: 0.5,
              display: "flex",
              alignItems: "center",
              minWidth: "fit-content",
              fontWeight: 600,
            }}
          >
            <LocationOnIcon sx={{ fontSize: "13px", mr: 2 }}></LocationOnIcon>
            {storeInfo.storeAddress}
          </Typography>
          <Typography
            sx={{
              fontFamily: "OneMobileLight",
              fontSize: "13px",
              mt: 0.5,
              fontWeight: 600,
            }}
          >
            <MapIcon sx={{ fontSize: "11px", mr: 2 }}></MapIcon>
            <Link
              href={`https://naver.me/${storeInfo.storeMapId}`}
              // target="_blank"
            >
              naver.me
            </Link>
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "60%",
              height: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "25%", mx: 3 }}>
              <Link href={storeInfo.storeInstagramId}>
                <img
                  src="/img/insta.png"
                  alt="insta"
                  width={"100%"}
                  height={"auto"}
                ></img>
              </Link>
            </Box>
            <Box sx={{ width: "25%", mx: 3 }}>
              <Link href={storeInfo.storeBlogId}>
                <img
                  src="/img/blog.png"
                  alt="naver"
                  width={"100%"}
                  height={"auto"}
                ></img>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default StoreCardSmall;
