import React from 'react';
import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  Typography,
  IconButton
}
from '@mui/material';

function FlowerArrangeText() {

  return (
    <Typography 
      variant="h6" 
      gutterBottom 
      component="div"
      textAlign="center"
      position="relative"
      top="80px"
      right="18px"
    >
      <IconButton style={{ color: 'black', right: '60px', marginBottom: '5px' }}>
        <Link href="/flower" passHref>
          <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        </Link>
      </IconButton>
        꽃을 배치해주세요
    </Typography>
  )
}

export default FlowerArrangeText;