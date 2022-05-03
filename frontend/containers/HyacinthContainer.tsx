import React from "react";
import HyacinthPurple from "../components/Bouquet/Flower/Hyacinth/HyacinthPurple";
import HyacinthPink from "../components/Bouquet/Flower/Hyacinth/HyacinthPink";
import HyacinthYellow from "../components/Bouquet/Flower/Hyacinth/HyacinthYellow";
import { 
  Box, 
  Typography 
} from '@mui/material';

const HyacinthContainer = () => {

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
        히아신스
      </Typography>
      <Box sx={{ ...style }}>
        <HyacinthPurple></HyacinthPurple>
        <HyacinthPink></HyacinthPink>
        <HyacinthYellow></HyacinthYellow>
      </Box>
    </Box>
  
  )
}

export default HyacinthContainer;