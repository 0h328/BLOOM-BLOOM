import React from "react";
import RanunculusPink from "../components/Bouquet/Flower/Ranunculus/RanunculusPink";
import RanunculusYellow from "../components/Bouquet/Flower/Ranunculus/RanunculusYellow";
import RanunculusPurple from "../components/Bouquet/Flower/Ranunculus/RanunculusPurple";
import { 
  Box, 
  Typography 
} from '@mui/material';

const RanunculusContainer = () => {

  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: "20px"
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
        라넌큘러스
      </Typography>
      <Box sx={{ ...style }}>
        <RanunculusPink></RanunculusPink>
        <RanunculusYellow></RanunculusYellow>
        <RanunculusPurple></RanunculusPurple>
      </Box>
    </Box>
  
  )
}

export default RanunculusContainer;