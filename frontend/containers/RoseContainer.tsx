import React from "react";
import Layout from "./styles";
import RoseWhite from "../components/Bouquet/Flower/Rose/RoseWhite";
import RoseRed from "../components/Bouquet/Flower/Rose/RoseRed";
import RosePink from "../components/Bouquet/Flower/Rose/RosePink";
import RoseOrange from "../components/Bouquet/Flower/Rose/RoseOrange";
import { Typography } from '@mui/material';

const RoseContainer = () => {

  return (
    <Layout>
      <Typography variant="subtitle1" display="block" gutterBottom>
        장미
      </Typography>
      <div className="select_items">
        <RoseWhite></RoseWhite>
        <RosePink></RosePink>
        <RoseRed></RoseRed>
        <RoseOrange></RoseOrange>
      </div>
    </Layout>
  
  )
}

export default RoseContainer;