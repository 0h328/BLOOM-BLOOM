import React from "react";
import PeonyPink from "../components/Bouquet/Flower/Peony/PeonyPink";
import PeonyPurple from "../components/Bouquet/Flower/Peony/PeonyPurple";
import PeonyWhite from "../components/Bouquet/Flower/Peony/PeonyWhite";
import { 
  Box, 
  Typography 
} from '@mui/material';

const PeonyContainer = () => {

  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  }

  const textStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "10px"
  }

  return (
    <Box>
      <Typography sx={{ ...textStyle }} variant="subtitle1" display="block" gutterBottom>
        작약
      </Typography>
      <Box sx={{ ...style }}>
        <PeonyPink></PeonyPink>
        <PeonyPurple></PeonyPurple>
        <PeonyWhite></PeonyWhite>
      </Box>
    </Box>
  
  )
}

export default PeonyContainer;