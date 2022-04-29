import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from "react";

function storecard_samll() {
  return(
    <Box sx={{width:400,height:163,mt:3}}>
      <Box sx={{width:400,height:120,mt:1,mb:1,display: 'flex'}}>
      <Box sx={{width:171.86,height:120}}>
        <img src="/test.png" ></img>
      </Box>
      <Box sx={{width:228.14,height:120}}>
        <Typography variant="h5">꽃집</Typography>
        <Typography>010-0000-0000</Typography>
        <Typography>서울특별시 어쩌구 저쩌구</Typography>
        <Typography>네이버 주소</Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default storecard_samll;
