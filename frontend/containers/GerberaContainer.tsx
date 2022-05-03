import React from "react";
import GerberaOrange from "../components/Bouquet/Flower/Gerbera/GerberaOrange";
import GerberaPink from "../components/Bouquet/Flower/Gerbera/GerberaPink";
import GerberaYellow from "../components/Bouquet/Flower/Gerbera/GerberaYellow";
import { 
  Box, 
  Typography 
} from '@mui/material';

const GerbaraContainer = () => {

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
        거베라
      </Typography>
      <Box sx={{ ...style }}>
        <GerberaOrange></GerberaOrange>
        <GerberaPink></GerberaPink>
        <GerberaYellow></GerberaYellow>
      </Box>
    </Box>
  
  )
}

export default GerbaraContainer;