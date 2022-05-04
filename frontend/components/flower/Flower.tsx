import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import CountBtn from "./countBtn";
interface flowerProps {
  flowerSeq: number;
  flowerName: string;
  flowerColor: string;
  flowerImage: string;
  flowerDesc: string;
}
function Flower({
  flowerSeq,
  flowerName,
  flowerColor,
  flowerImage,
  flowerDesc,
}: flowerProps) {
  const [count, setCount] = useState<number>();
  const onIncrease = () => {
    if (count < 8) {
      setCount(count + 1);
    }
  };
  const onDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <Box>
      <Image
        src={flowerImage}
        alt="flower"
        style={{
          borderRadius: "200px",
          overflow: "hidden",
        }}
      ></Image>
      <CountBtn></CountBtn>
    </Box>
  );
}
export default Flower;
