import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import Header from "../components/common/Header";
import Move from "../components/move/Move";

function Arrange() {
  return (
    <Box
      sx={{
        mx: "auto",
        width: 420,
        position: "relative",
        backgroundColor: "#FFE0E0",
        height: "100vh",
        minHeight: "100vh",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box sx={{ position: "absolute", top: "2%" }}>
        <Header page="main"></Header>
      </Box>
      <Box></Box>
      <Box>
        <Move></Move>
      </Box>
    </Box>
  );
}

export default Arrange;
