import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

interface bouquetImgProps {
  bouquetImage: string;
}
function BouquetImg({ bouquetImage }: bouquetImgProps) {
  return (
    <Image
      id="img"
      src={bouquetImage}
      alt="꽃다발"
      width={360}
      height={450}
    ></Image>
  );
}

export default BouquetImg;
