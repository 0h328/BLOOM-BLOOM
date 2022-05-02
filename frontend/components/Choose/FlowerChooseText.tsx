import React from 'react';
import Layout from './styles';
import Link from 'next/link';
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
          <Link href="/bouquet" passHref>
            <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
          </Link>
        </IconButton>

          꽃을 선택해주세요
        <IconButton style={{ color: 'black', marginLeft: '20px', marginBottom: '5px' }}>
          <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Typography>
      <Typography 
        variant="subtitle1" 
        gutterBottom 
        component="div"
        style={{ textAlign: "center"}}
      >
        꽃은 최대 8개까지 선택 가능합니다.
      </Typography>
    </Layout>
  )
}

export default FlowerChoose;