import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
function FlowerImg() {
  return (
    <Box sx={{ position: "absolute" }}>
      <Box
        sx={{
          ...imgboxStyle,
          top: "250px",
          left: "135px",
        }}
      >
        <Image
          layout="fill"
          src="/img/loginFlower2.jpg"
          alt="flower"
          style={{
            borderRadius: "200px",
            overflow: "hidden",
          }}
        ></Image>
      </Box>
      <Box
        sx={{
          ...imgboxStyle,
          top: "330px",
          left: "-135px",
        }}
      >
        <Image
          layout="fill"
          objectFit="cover"
          src="/img/loginFlower1.jpg"
          alt="flower"
          style={{
            borderRadius: "200px",
            overflow: "hidden",
          }}
        ></Image>
      </Box>
    </Box>
  );
}

export const imgboxStyle = {
  width: "420px",
  height: "288px",
  position: "absolute",
};
export default FlowerImg;
