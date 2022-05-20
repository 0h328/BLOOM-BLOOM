import React from "react";
import LilyPink from "../components/Bouquet/Flower/Lily/LilyPink";
import LilyWhite from "../components/Bouquet/Flower/Lily/LilyWhite";
import LilyYellow from "../components/Bouquet/Flower/Lily/LilyYellow";
import { 
  Box, 
  Typography 
} from '@mui/material';

const LilyContainer = () => {

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
        백합
      </Typography>
      <Box sx={{ ...style }}>
        <LilyPink></LilyPink>
        <LilyWhite></LilyWhite>
        <LilyYellow></LilyYellow>
      </Box>
    </Box>
  
  )
}

export default LilyContainer;