import React from 'react';
import Layout from '../Bouquet/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Typography,
  IconButton
}
from '@mui/material';

function FlowerChoose() {

  return (
    <Layout>
      <Typography 
        variant="h6" 
        gutterBottom 
        component="div"
        className="choose_wrapper"
      >
        <IconButton style={{ color: 'black', marginRight: '20px', marginBottom: '5px' }}>
          <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        </IconButton>
          꽃을 배치해주세요
      </Typography>
    </Layout>
  )
}

export default FlowerChoose;