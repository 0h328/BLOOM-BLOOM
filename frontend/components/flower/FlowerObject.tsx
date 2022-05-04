import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CountBtn from "./CountBtn";
import { Flower } from "../flower/Flower";
interface flowerProps {
  flower: Flower;
  handleTotal: (count: number) => void;
}
function FlowerObject({ flower, handleTotal }: flowerProps) {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => {
    setCount(count + 1);
    handleTotal(+1);
  };
  const onDecrease = () => {
    setCount(count - 1);
    handleTotal(-1);
  };
  useEffect(() => {}, [count]);
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
      <Image
        src={flower.flowerImage}
        alt="flower"
        width="80px"
        height="80px"
      ></Image>
      <CountBtn
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        count={count}
      ></CountBtn>
    </Box>
  );
}
export default FlowerObject;
