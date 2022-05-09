import React from "react";
import { Box } from "@mui/material";
function FlowerImg() {
  return (
    // <Box sx={{ position: "" }}>
    <Box sx={{}}>
      <Box
        sx={{
          ...imgboxStyle,
          top: "25%",
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
          top: "35%",
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
