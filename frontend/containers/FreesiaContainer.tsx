import React from "react";
import FreesiaYellow from "../components/Bouquet/Flower/Freesia/FreesiaYellow";
import FreesiaPurple from "../components/Bouquet/Flower/Freesia/FreesiaPurple";
import FreesiaPink from "../components/Bouquet/Flower/Freesia/FreesiaPink";
import { 
  Box, 
  Typography 
} from '@mui/material';

const FreesiaContainer = () => {

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
        프리지어
      </Typography>
      <Box sx={{ ...style }}>
        <FreesiaYellow></FreesiaYellow>
        <FreesiaPurple></FreesiaPurple>
        <FreesiaPink></FreesiaPink>
      </Box>
    </Box>
  
  )
}

export default FreesiaContainer;