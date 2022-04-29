import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

interface Img {
  src: string;
}

interface ImgDataProps {
  imgList: Img[];
  top: string;
}

function FlowerImgList({ imgList, top }: ImgDataProps) {
  return (
    <Box
      sx={{ position: "absolute", display: "flex", top: { top }, left: "15px" }}
    >
      {imgList.map((img, index) => {
        return (
          <Box key={index} sx={{ margin: "5px" }}>
            <Image src={img.src} alt="꽃다발" width={115} height={190}></Image>
          </Box>
        );
      })}
    </Box>
  );
}
export default FlowerImgList;
