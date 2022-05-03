import React from 'react';
import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Typography,
  IconButton
}
from '@mui/material';

function FlowerChooseText() {

  return (
    <>
      <Typography 
        variant="h6" 
        gutterBottom 
        component="div"
        textAlign="center"
        position="relative"
        top="80px"
      >
        <IconButton style={{ color: 'black', right: '60px', marginBottom: '5px' }}>
          <Link href="/bouquet" passHref>
            <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
          </Link>
        </IconButton>
          꽃을 선택해주세요
        <IconButton style={{ color: 'black', left: '60px', marginBottom: '5px' }}>
          <Link href="/arrange" passHref>
            <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
          </Link>
        </IconButton>
      </Typography>
      <Typography 
        variant="subtitle2" 
        gutterBottom 
        component="div"
        position="relative"
        top="60px"
        style={{ textAlign: "center"}}
      >
        꽃은 최대 8개까지 선택 가능합니다.
      </Typography>
    </>
  )
}

export default FlowerChooseText;