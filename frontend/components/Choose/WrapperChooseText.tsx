import React from 'react';
import Layout from './styles';
import { Typography } from '@mui/material';

function WrapperChooseText() {

  return (
    <Layout>
      <Typography 
        variant="h6" 
        gutterBottom 
        component="div"
        className="choose_wrapper"
      >
        포장지를 선택해주세요
      </Typography>
    </Layout>
  )
}

export default WrapperChooseText;