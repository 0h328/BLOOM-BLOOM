import React from 'react';
import Layout from './styles';
import { Typography } from '@mui/material';

function StalkChooseText() {

  return (
    <Layout>
      <Typography 
        variant="h6" 
        gutterBottom 
        component="div"
        className="choose_wrapper"
      >
        부속꽃을 선택해주세요
      </Typography>
    </Layout>
  )
}

export default StalkChooseText;