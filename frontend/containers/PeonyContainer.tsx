import React from "react";
import Layout from "./styles";
import PeonyPink from "../components/Bouquet/Flower/Peony/PeonyPink";
import PeonyPurple from "../components/Bouquet/Flower/Peony/PeonyPurple";
import PeonyWhite from "../components/Bouquet/Flower/Peony/PeonyWhite";
import { Typography } from '@mui/material';

const PeonyContainer = () => {

  return (
    <Layout>
      <Typography variant="subtitle1" display="block" gutterBottom>
        작약
      </Typography>
      <div className="select_items">
        <PeonyPink></PeonyPink>
        <PeonyPurple></PeonyPurple>
        <PeonyWhite></PeonyWhite>
      </div>
    </Layout>
  
  )
}

export default PeonyContainer;