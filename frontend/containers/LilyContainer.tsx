import React from "react";
import Layout from "./styles";
import LilyPink from "../components/Bouquet/Flower/Lily/LilyPink";
import LilyWhite from "../components/Bouquet/Flower/Lily/LilyWhite";
import LilyYellow from "../components/Bouquet/Flower/Lily/LilyYellow";
import { Typography } from '@mui/material';

const LilyContainer = () => {

  return (
    <Layout>
      <Typography variant="subtitle1" display="block" gutterBottom>
        백합
      </Typography>
      <div className="select_items">
        <LilyPink></LilyPink>
        <LilyWhite></LilyWhite>
        <LilyYellow></LilyYellow>
      </div>
    </Layout>
  
  )
}

export default LilyContainer;