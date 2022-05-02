import React from "react";
import { Box } from "@mui/material";
import MessageInputModal from "../components/modal/MessageInputModal";
import Header from "../components/common/Header";
function Share() {
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
        <Header></Header>
      </Box>
      <MessageInputModal messageModal={true} share={true}></MessageInputModal>
    </Box>
  );
}
export default Share;
