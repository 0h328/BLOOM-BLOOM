import React from 'react';
import { Typography } from '@mui/material';

function WrapperChooseText() {

  return (
    <Typography 
      variant="subtitle1" 
      gutterBottom 
      component="div"
      textAlign="center"
      position="relative"
      bottom="20px"
    >
      포장지를 선택해주세요
    </Typography>
  )
}

export default WrapperChooseText;