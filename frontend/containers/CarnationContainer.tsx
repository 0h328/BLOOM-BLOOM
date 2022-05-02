import React from "react";
import Layout from "./styles";
import CarnationYellow from "../components/Bouquet/Flower/Carnation/CarnationYellow";
import CarnationRed from "../components/Bouquet/Flower/Carnation/CarnationRed";
import CarnationPink from "../components/Bouquet/Flower/Carnation/CarnationPink";
import CarnationOrange from "../components/Bouquet/Flower/Carnation/CarnationOrange";
import { Typography } from '@mui/material';

const CarnationContainer = () => {

  return (
    <Layout>
      <Typography variant="subtitle1" display="block" gutterBottom>
        카네이션
      </Typography>
      <div className="select_items">
        <CarnationYellow></CarnationYellow>
        <CarnationRed></CarnationRed>
        <CarnationPink></CarnationPink>
        <CarnationOrange></CarnationOrange>
      </div>
    </Layout>
  
  )
}

export default CarnationContainer;