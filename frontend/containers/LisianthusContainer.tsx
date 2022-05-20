import React from "react";
import LisianthusPink from "../components/Bouquet/Flower/Lisianthus/LisianthusPink";
import LisianthusWhite from "../components/Bouquet/Flower/Lisianthus/LisianthusWhite";
import LisianthusPurple from "../components/Bouquet/Flower/Lisianthus/LisianthusPurple";
import { 
  Box, 
  Typography 
} from '@mui/material';

const LisianthusContainer = () => {

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
        리시안셔스
      </Typography>
      <Box sx={{ ...style }}>
        <LisianthusPink></LisianthusPink>
        <LisianthusWhite></LisianthusWhite>
        <LisianthusPurple></LisianthusPurple>
      </Box>
    </Box>
  
  )
}

export default LisianthusContainer;