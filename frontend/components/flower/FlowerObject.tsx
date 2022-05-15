import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CountBtn from "./CountBtn";
import { FlowerType } from "../flower/Flower";
import Toast from "../common/Toast";
import { mainFlowerState } from "../../states/states";
import { useRecoilState } from "recoil";

interface flowerProps {
  flower: FlowerType;
  validCount: boolean;
  totalCount: number;
  handleTotal: (dif: number) => void;
  handleError: (code: number) => void;
}
function FlowerObject({
  flower,
  validCount,
  totalCount,
  handleTotal,
  handleError,
}: flowerProps) {
  const [mainFlower, setMainFlower] = useRecoilState(mainFlowerState);
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => {
    if (totalCount < 12) {
      setCount(count + 1);
      handleTotal(+1);
    } else if (totalCount == 12) {
      handleError(1);
    }
  };
  const onDecrease = () => {
    if (totalCount > 0 && count > 0) {
      setCount(count - 1);
      handleTotal(-1);
    } else if (count == 0) {
      console.log("0 error");
      handleError(0);
    }
  };
  useEffect(() => {
    // const values = Object.values(mainFlower);
    // console.log(values);
    if (count > 0) {
      let temp = [];
      for (let index in mainFlower) {
        const value = mainFlower[index];
        temp = mainFlower.filter(
          (value) => value.flowerSeq !== flower.flowerSeq
        );
      }
      const flowerInfo = {
        flowerSeq: flower.flowerSeq,
        flowerCount: count,
        // flowerImage: flower.flowerImage,
      };
      setMainFlower([...temp, flowerInfo]);
    }
  }, [count]);
  return (
    <Box>
      <Box
        style={{
          border: "1px solid #EFDFBF",
          borderRadius: "16px",
          backgroundColor: "#EFDFBF",
          marginBottom: "0.2rem",
          fontSize: "12px",
          textAlign: "center",
        }}
      >
        {flower.flowerDesc}
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img
          src={flower.flowerImage}
          alt="flower"
          width="80px"
          height="80px"
        ></img>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CountBtn
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          count={count}
        ></CountBtn>
      </Box>
    </Box>
  );
}
export default FlowerObject;
