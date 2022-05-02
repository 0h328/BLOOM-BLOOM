import React from 'react';
import Layout from './styles';
import { Typography } from '@mui/material';

function RibbonChooseText() {

  return (
    <Layout>
      <Typography 
        variant="h6" 
        gutterBottom 
        component="div"
        className="choose_wrapper"
      >
        리본을 선택해주세요
      </Typography>
    </Layout>
  )
}

export default RibbonChooseText;