import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
function Title() {
  return (
    <Box sx={{ height: "30%", width: "100%" }}>
      <Typography sx={{ ...titleStyle }} style={{ top: "8%", left: "18%" }}>
        BLOOM
      </Typography>
      <Typography sx={{ ...titleStyle }} style={{ top: "14%", left: "40%" }}>
        BLOOM
      </Typography>
    </Box>
  );
}

export const titleStyle = {
  position: "absolute",
  fontSize: "3rem",
  fontFamily: "JuliusSansOne",
};

export default Title;
