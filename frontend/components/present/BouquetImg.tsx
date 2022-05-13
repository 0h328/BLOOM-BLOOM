import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

interface bouquetImgProps {
  bouquetImage: string;
  modal?: boolean;
}
function BouquetImg({ bouquetImage, modal }: bouquetImgProps) {
  return (
    <>
      {modal ? (
        <img
          id="img"
          src={bouquetImage}
          alt="꽃다발"
          width={"200px"}
          height={"200px"}
        ></img>
      ) : (
        <img
          id="img"
          src={bouquetImage}
          alt="꽃다발"
          width={"300px"}
          height={"300px"}
        ></img>
      )}
    </>
  );
}

export default BouquetImg;
