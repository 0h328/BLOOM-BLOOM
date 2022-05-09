import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import Header from "../components/common/Header";
import Move from "../components/move/Move";
import FlowerArrangeText from "../components/Choose/FlowerArrangeText";
import Image from "next/image";
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
      <FlowerArrangeText></FlowerArrangeText>
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          top: "15%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "50%",
            backgroundColor: "black",
            margin: "10px",
          }}
        >
          {/* <Image src="/img/wrapPink.jpg" alt="꽃다발" layout="fill"></Image> */}
          <img src="/img/wrapPink.jpg"></img>
        </Box>
        <Box
          sx={{
            width: "90%",
            height: "20%",
            mt: "5%",
            backgroundColor: "#EFDFBF",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Move></Move>
        </Box>
      </Box>
    </Box>
  );
}

export default Arrange;
