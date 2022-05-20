import React from "react";
import RoseWhite from "../components/Bouquet/Flower/Rose/RoseWhite";
import RoseRed from "../components/Bouquet/Flower/Rose/RoseRed";
import RosePink from "../components/Bouquet/Flower/Rose/RosePink";
import RoseOrange from "../components/Bouquet/Flower/Rose/RoseOrange";
import { 
  Box, 
  Typography 
} from '@mui/material';

const RoseContainer = () => {

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
        장미
      </Typography>
      <Box sx={{ ...style }}>
        <RoseWhite></RoseWhite>
        <RosePink></RosePink>
        <RoseRed></RoseRed>
        <RoseOrange></RoseOrange>
      </Box>
    </Box>
  
  )
}

export default RoseContainer;