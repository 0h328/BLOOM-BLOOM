import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import Header from "../components/common/Header";
import Move from "../components/move/Move";
import FlowerArrangeText from "../components/Choose/FlowerArrangeText";
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
            // backgroundColor: "black",
            margin: "10px",
          }}
        >
          <img
            src="/img/wrapPink.png"
            style={{
              borderRadius: "200px",
              height: "100%",
              width: "100%",
            }}
          ></img>
        </Box>
        <Box
          sx={{
            width: "90%",
            height: "18%",
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
