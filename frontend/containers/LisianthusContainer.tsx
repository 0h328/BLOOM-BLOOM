import React from "react";
import Layout from "./styles";
import LisianthusPink from "../components/Bouquet/Flower/Lisianthus/LisianthusPink";
import LisianthusWhite from "../components/Bouquet/Flower/Lisianthus/LisianthusWhite";
import LisianthusPurple from "../components/Bouquet/Flower/Lisianthus/LisianthusPurple";
import { Typography } from '@mui/material';

const LisianthusContainer = () => {

  return (
    <Layout>
      <Typography variant="subtitle1" display="block" gutterBottom>
        리시안셔스
      </Typography>
      <div className="select_items">
        <LisianthusPink></LisianthusPink>
        <LisianthusWhite></LisianthusWhite>
        <LisianthusPurple></LisianthusPurple>
      </div>
    </Layout>
  
  )
}

export default LisianthusContainer;