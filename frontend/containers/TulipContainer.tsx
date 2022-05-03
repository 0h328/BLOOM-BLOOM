import React from "react";
import TulipPink from "../components/Bouquet/Flower/Tulip/TulipPink";
import TulipYellow from "../components/Bouquet/Flower/Tulip/TulipYellow";
import TulipPurple from "../components/Bouquet/Flower/Tulip/TulipPurple";
import TulipRed from "../components/Bouquet/Flower/Tulip/TulipRed";
import { 
  Box, 
  Typography 
} from '@mui/material';

const TulipContainer = () => {

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
        튤립
      </Typography>
      <Box sx={{ ...style }}>
        <TulipPink></TulipPink>
        <TulipYellow></TulipYellow>
        <TulipPurple></TulipPurple>
        <TulipRed></TulipRed>
      </Box>
    </Box>
  
  )
}

export default TulipContainer;