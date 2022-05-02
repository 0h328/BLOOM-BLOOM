import React from "react";
import Layout from "./styles";
import TulipPink from "../components/Bouquet/Flower/Tulip/TulipPink";
import TulipYellow from "../components/Bouquet/Flower/Tulip/TulipYellow";
import TulipPurple from "../components/Bouquet/Flower/Tulip/TulipPurple";
import TulipRed from "../components/Bouquet/Flower/Tulip/TulipRed";
import { Typography } from '@mui/material';

const TulipContainer = () => {

  return (
    <Layout>
      <Typography variant="subtitle1" display="block" gutterBottom>
        튤립
      </Typography>
      <div className="select_items">
        <TulipPink></TulipPink>
        <TulipYellow></TulipYellow>
        <TulipPurple></TulipPurple>
        <TulipRed></TulipRed>
      </div>
    </Layout>
  
  )
}

export default TulipContainer;