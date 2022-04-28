import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Header from "../components/Header";
import MakeButton from "../components/main/MakeButton";

function Main() {
  return (
    <>
      <Box
        sx={{
          mx: "auto",
          width: 420,
          position: "relative",
          backgroundColor: "#FFE0E0",
          height: "840px",
          minHeight: "100vh",
        }}
      >
        <Header page="main"></Header>
        <MakeButton />
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            position: "absolute",
            width: 410,
            height: "70%",
            top: "270px",
            left: "5px",
            borderRadius: "40px",
            overflow: "hidden",
          }}
        ></Box>
      </Box>
    </>
  );
}

export default Main;
