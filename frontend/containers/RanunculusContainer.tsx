import React from "react";
import Layout from "./styles";
import RanunculusPink from "../components/Bouquet/Flower/Ranunculus/RanunculusPink";
import RanunculusWhite from "../components/Bouquet/Flower/Ranunculus/RanunculusWhite";
import RanunculusPurple from "../components/Bouquet/Flower/Ranunculus/RanunculusPurple";
import { Typography } from '@mui/material';

const RanunculusContainer = () => {

  return (
    <Layout>
      <Typography variant="subtitle1" display="block" gutterBottom>
        라넌큘러스
      </Typography>
      <div className="select_items">
        <RanunculusPink></RanunculusPink>
        <RanunculusWhite></RanunculusWhite>
        <RanunculusPurple></RanunculusPurple>
      </div>
    </Layout>
  
  )
}

export default RanunculusContainer;