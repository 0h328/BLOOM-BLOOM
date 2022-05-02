import React from "react";
import Layout from "./styles";
import GerberaOrange from "../components/Bouquet/Flower/Gerbera/GerberaOrange";
import GerberaPink from "../components/Bouquet/Flower/Gerbera/GerberaPink";
import GerberaYellow from "../components/Bouquet/Flower/Gerbera/GerberaYellow";
import { Typography } from '@mui/material';

const GerbaraContainer = () => {

  return (
    <Layout>
      <Typography variant="subtitle1" display="block" gutterBottom>
        거베라
      </Typography>
      <div className="select_items">
        <GerberaOrange></GerberaOrange>
        <GerberaPink></GerberaPink>
        <GerberaYellow></GerberaYellow>
      </div>
    </Layout>
  
  )
}

export default GerbaraContainer;