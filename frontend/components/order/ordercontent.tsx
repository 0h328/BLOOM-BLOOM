import {Box, Button, Typography, TextField, InputBase} from '@mui/material';
import Image from "next/image";
import React from "react";

function OrderContent() {
  return(
    <Box sx={{width:398,height:200,mt:2,mx:'auto' }}>
      <Box sx={{pt:1,pb:1,pl:3}}>
        <Typography sx={{fontFamily: "Julius Sans One", fontSize:'17px', fontWeight:'bold'}}>요청 사항</Typography>
      </Box>
      <Box>
        <Box sx={{width:398, ml:1,height:200, border:1, borderColor: 'grey.400', mt:1}}>
          <Box/>
          </Box>
      </Box>
    </Box>
  );
};


export default OrderContent;
