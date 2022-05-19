import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import FlowerInfoList from "../modal/FlowerInfoList";
import { getBouquetDetail } from "../apis/bouquetApi";

interface orderFlowerProps {
  bouquetSeq?: number;
  orderFlowerInfo?: any;
}

function OrderFlower({ bouquetSeq, orderFlowerInfo }: orderFlowerProps) {
  // const [flowerInfo, setFlowerInfo] = useState<
  //   Array<{ flowerName: string; flowerImage: string; flowerCount: number }>
  // >([]);
  const [flowerInfo, setFlowerInfo] = useState<any>(undefined);
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
    if (bouquetSeq !== undefined) getBouquetInfo();
    if (orderFlowerInfo !== undefined) {
      setFlowerInfo(orderFlowerInfo.flowerInfo);
      setBouquetImage(orderFlowerInfo.bouquetImage);
    }
  }, []);
  useEffect(() => {
    console.log(flowerInfo);
  }, [flowerInfo]);
  return (
    <>
      {flowerInfo !== undefined ? (
        <Box sx={{ width: "100%", height: "100%", mx: "auto" }}>
          <Box sx={{ pl: 3, pt: 2 }}>
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
          <Box sx={{ height: "85%", display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "40%" }}>
              <img
                src={bouquetImage}
                alt="꽃다발이미지"
                width={"100%"}
                height={"auto"}
              ></img>
            </Box>
            <Box
              sx={{
                mr: 1,
                width: "60%",
                height: "100%",
                // backgroundColor: "#ffff",
                borderRadius: "10px",
                border: "1px solid rgba(82, 82, 82, 0.29)",
              }}
            >
              <FlowerInfoList flowerInfoList={flowerInfo} />
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export default OrderFlower;
