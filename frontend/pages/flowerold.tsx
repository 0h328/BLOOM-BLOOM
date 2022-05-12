import React from "react";
import Header from "../components/common/Header";
import FlowerChooseText from "../components/Choose/FlowerChooseText";
import RoseContainer from "../containers/RoseContainer";
import TulipContainer from "../containers/TulipContainer";
import CarnationContainer from "../containers/CarnationContainer";
import FreesiaContainer from "../containers/FreesiaContainer";
import GerbaraContainer from "../containers/GerberaContainer";
import HyacinthContainer from "../containers/HyacinthContainer";
import LilyContainer from "../containers/LilyContainer";
import LisianthusContainer from "../containers/LisianthusContainer";
import PeonyContainer from "../containers/PeonyContainer";
import RanunculusContainer from "../containers/RanunculusContainer";
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
        <Header page="flower"></Header>
      </Box>
      {/* <FlowerChooseText></FlowerChooseText> */}
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "#FFE0E0",
          width: "410px",
          height: "730px",
          top: "150px",
          left: "5px",
          borderRadius: "10px",
          overflowX: "hidden",
          overflowY: "scroll",
        }}
      >
        <RoseContainer></RoseContainer>
        <TulipContainer></TulipContainer>
        <CarnationContainer></CarnationContainer>
        <FreesiaContainer></FreesiaContainer>
        <GerbaraContainer></GerbaraContainer>
        <HyacinthContainer></HyacinthContainer>
        <LilyContainer></LilyContainer>
        <LisianthusContainer></LisianthusContainer>
        <PeonyContainer></PeonyContainer>
        <RanunculusContainer></RanunculusContainer>
      </Box>
    </Box>
  );
}
