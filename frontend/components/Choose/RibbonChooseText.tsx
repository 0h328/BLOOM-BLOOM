import React from 'react';
import { Typography } from '@mui/material';

function RibbonChooseText() {

  return (
    <Typography 
      variant="subtitle1" 
      gutterBottom 
      component="div"
      textAlign="center"
      position="relative"
      bottom="20px"
    >
      리본을 선택해주세요
    </Typography>
  )
}

export default RibbonChooseText;