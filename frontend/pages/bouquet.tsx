import React from "react";
import BouquetContainer from "../containers/BouquetContainer";
import Header from "../components/common/Header";
import { Box } from "@mui/material";

export default function flowerPage() {
  return (
    <Box
      sx={{
        mx: "auto",
        width: 420,
        position: "relative",
        backgroundColor: "#FFFAFA",
        height: "840px",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ position: "absolute", top: "30px" }}>
        <Header page="bouquet"></Header>
      </Box>
      <BouquetContainer></BouquetContainer>
    </Box>
  );
}
