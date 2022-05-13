import React from "react";
import { Box } from "@mui/material";
import { BASE_URL } from "../apis/config";
import Image from "next/image";
function FlowerImg() {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          ...imgboxStyle,
          top: "30%",
          left: "40%",
        }}
      >
        <img
          src="/img/loginFlower2.jpg"
          style={{
            borderRadius: "200px",
            height: "100%",
            width: "100%",
          }}
        ></img>
      </Box>
      <Box
        sx={{
          ...imgboxStyle,
          top: "40%",
          left: "-25%",
        }}
      >
        <img
          src="/img/loginFlower1.jpg"
          style={{
            borderRadius: "200px",
            height: "100%",
            width: "100%",
          }}
        ></img>
      </Box>
    </Box>
  );
}

export const imgboxStyle = {
  width: "90%",
  height: "30%",
  position: "absolute",
};
export default FlowerImg;
