import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
function Title() {
  return (
    <Box
      sx={{
        height: "50vh",
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          ...titleStyle,
          fontSize: "15px",
          width: "100%",
          mb: "5px",
          color: "#444444",
        }}
      >
        당신만을 위한 꽃다발
      </Typography>
      <Typography sx={{ ...titleStyle, width: "100%" }}>BLOOM BLOOM</Typography>
    </Box>
  );
}

export const titleStyle = {
  textAlign: "center",
  fontFamily: "OneMobileLight",
  fontWeight: "800",
  fontSize: "42px",
  color: "black",
  zIndex: "10000",
};

export default Title;
