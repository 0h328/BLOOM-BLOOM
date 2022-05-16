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
          width={"100%"}
          height={"100%"}
        ></img>
      ) : (
        <img
          id="img"
          src={bouquetImage}
          alt="꽃다발"
          width={"100%"}
          height={"100%"}
        ></img>
      )}
    </>
  );
}

export default BouquetImg;
