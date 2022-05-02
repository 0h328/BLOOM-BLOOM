import {Box, Button, Typography} from '@mui/material';
import Image from "next/image";
import React from "react";

function OrderFlower() {
  return(
    <Box sx={{width:400,height:234,mt:2,mx:'auto' }}>
      <Box sx={{pt:1,pb:1,pl:3}}>
        <Typography sx={{fontFamily: "Julius Sans One", fontSize:'17px', fontWeight:'bold'}}>의뢰내역</Typography>
      </Box>
      <Box sx={{height:193.5, display:'flex'}}>
        <Box sx={{width:150, ml:1}}>
          <Image src="/bouquet1.png" alt="insta" width={150} height={193.5}></Image>
        </Box>
      </Box>
    </Box>
  );
};


export default OrderFlower;
