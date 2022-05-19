import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import FlowerInfoList from "../modal/FlowerInfoList";
import { getBouquetDetail } from "../apis/bouquetApi";

interface orderFlowerProps {
  bouquetSeq?: number;
}

function OrderFlower({ bouquetSeq }: orderFlowerProps) {
  const [flowerInfo, setFlowerInfo] = useState<
    Array<{ flowerName: string; flowerImage: string; flowerCount: number }>
  >([]);
  const [bouquetImage, setBouquetImage] = useState("");
  var bouquetInfo = null;
  const getBouquetInfo = async () => {
    const res = await getBouquetDetail(bouquetSeq);
    bouquetInfo = res.data.data;
    setFlowerInfo(bouquetInfo.flowerInfo);
    setBouquetImage(bouquetInfo.bouquetImage);
    console.log(bouquetInfo);
  };

  useEffect(() => {
    getBouquetInfo();
  }, []);

  // const flowerinfoList = [
  //   {
  //     flowerName: "수국",
  //     flowerImage: "/img/hydrangeaPink.png",
  //     flowerCount: 1,
  //   },
  //   {
  //     flowerName: "장미",
  //     flowerImage: "/img/hydrangeaPink.png",
  //     flowerCount: 1,
  //   },
  //   {
  //     flowerName: "장미",
  //     flowerImage: "/img/hydrangeaPink.png",
  //     flowerCount: 1,
  //   },
  //   {
  //     flowerName: "장미",
  //     flowerImage: "/img/hydrangeaPink.png",
  //     flowerCount: 1,
  //   },
  //   {
  //     flowerName: "장미",
  //     flowerImage: "/img/hydrangeaPink.png",
  //     flowerCount: 1,
  //   },
  //   {
  //     flowerName: "장미",
  //     flowerImage: "/img/hydrangeaPink.png",
  //     flowerCount: 1,
  //   },
  //   {
  //     flowerName: "장미",
  //     flowerImage: "/img/hydrangeaPink.png",
  //     flowerCount: 1,
  //   },
  //   {
  //     flowerName: "장미",
  //     flowerImage: "/img/hydrangeaPink.png",
  //     flowerCount: 1,
  //   },
  // ];

  return (
    <Box sx={{ width: 400, height: 234, mt: 2, mx: "auto" }}>
      <Box sx={{ pt: 1, pb: 1, pl: 3 }}>
        <Typography
          sx={{
            fontFamily: "OneMobileLight",
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          의뢰내역
        </Typography>
      </Box>
      <Box sx={{ height: 193.5, display: "flex" }}>
        <Box sx={{ width: 150, ml: 1 }}>
          <img src={bouquetImage} alt="insta" width={150} height={193.5}></img>
        </Box>
        <Box
          sx={{
            ml: 1,
            width: 230,
            height: 193.5,
            backgroundColor: "#ffff",
            borderRadius: "10px",
            border: "1px solid rgba(82, 82, 82, 0.29)",
            overflow: "scroll",
          }}
        >
          <FlowerInfoList flowerInfoList={flowerInfo} />
        </Box>
      </Box>
    </Box>
  );
}

export default OrderFlower;
