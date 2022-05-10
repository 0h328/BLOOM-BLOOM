import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CountBtn from "./CountBtn";
import { Flower } from "../flower/Flower";
import Toast from "../common/Toast";

interface flowerProps {
  flower: Flower;
  validCount: boolean;
  handleTotal: (dif: number) => void;
  handleError: (code: number) => void;
}
function FlowerObject({
  flower,
  handleTotal,
  validCount,
  handleError,
}: flowerProps) {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => {
    if (validCount) {
      setCount(count + 1);
      handleTotal(+1);
    } else {
      handleError(1);
    }
  };
  const onDecrease = () => {
    if (count != 0 && validCount) {
      setCount(count - 1);
      handleTotal(-1);
    } else {
      handleError(0);
    }
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
      <Toast></Toast>
    </Box>
  );
}
export default FlowerObject;
