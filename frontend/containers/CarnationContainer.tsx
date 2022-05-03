import React from "react";
import CarnationYellow from "../components/Bouquet/Flower/Carnation/CarnationYellow";
import CarnationRed from "../components/Bouquet/Flower/Carnation/CarnationRed";
import CarnationPink from "../components/Bouquet/Flower/Carnation/CarnationPink";
import CarnationOrange from "../components/Bouquet/Flower/Carnation/CarnationOrange";
import { 
  Box, 
  Typography 
} from '@mui/material';

const CarnationContainer = () => {

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
        카네이션
      </Typography>
      <Box sx={{...style}}>
        <CarnationYellow></CarnationYellow>
        <CarnationRed></CarnationRed>
        <CarnationPink></CarnationPink>
        <CarnationOrange></CarnationOrange>
      </Box>
    </Box>
  
  )
}

export default CarnationContainer;