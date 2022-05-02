import React from "react";
import Layout from "./styles";
import FreesiaYellow from "../components/Bouquet/Flower/Freesia/FreesiaYellow";
import FreesiaPurple from "../components/Bouquet/Flower/Freesia/FreesiaPurple";
import FreesiaPink from "../components/Bouquet/Flower/Freesia/FreesiaPink";
import { Typography } from '@mui/material';

const FreesiaContainer = () => {

  return (
    <Layout>
      <Typography variant="subtitle1" display="block" gutterBottom>
        프리지어
      </Typography>
      <div className="select_items">
        <FreesiaYellow></FreesiaYellow>
        <FreesiaPurple></FreesiaPurple>
        <FreesiaPink></FreesiaPink>
      </div>
    </Layout>
  
  )
}

export default FreesiaContainer;