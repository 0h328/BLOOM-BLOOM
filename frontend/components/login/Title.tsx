import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
function Title() {
  return (
    <Box>
      <Typography sx={{ ...titleStyle }} style={{ top: "60px", left: "74px" }}>
        BLOOM
      </Typography>
      <Typography
        sx={{ ...titleStyle }}
        style={{ top: "120px", left: "159px" }}
      >
        BLOOM
      </Typography>
    </Box>
  );
}

export const titleStyle = {
  position: "absolute",
  fontSize: 50,
  fontFamily: "JuliusSansOne",
};

export default Title;
