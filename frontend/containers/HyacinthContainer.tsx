import React from "react";
import Layout from "./styles";
import HyacinthPurple from "../components/Bouquet/Flower/Hyacinth/HyacinthPurple";
import HyacinthRed from "../components/Bouquet/Flower/Hyacinth/HyacinthRed";
import HyacinthYellow from "../components/Bouquet/Flower/Hyacinth/HyacinthYellow";
import { Typography } from '@mui/material';

const HyacinthContainer = () => {

  return (
    <Layout>
      <Typography variant="subtitle1" display="block" gutterBottom>
        히아신스
      </Typography>
      <div className="select_items">
        <HyacinthPurple></HyacinthPurple>
        <HyacinthRed></HyacinthRed>
        <HyacinthYellow></HyacinthYellow>
      </div>
    </Layout>
  
  )
}

export default HyacinthContainer;