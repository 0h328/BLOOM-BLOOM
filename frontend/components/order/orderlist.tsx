import {Box, Button, Typography} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from "next/image";
import React from "react";

function OrderList() {
  return(
    <Box sx={{width:372,height:146,mt:3,mx:'auto', border:1, borderColor: 'grey.300'}}>
      <Box sx={{width:372,height:120,mb:1,display: 'flex'}}>
      <Box sx={{width:215,height:120, mt:1, ml:1.5}}>
        <Box sx={{display:'flex',height:35, mt:1, alignItems:'baseline'}}>
          <Typography sx={{fontFamily: "Julius Sans One", fontSize:'25px',fontWeight: "bold"}}>꽃집</Typography>
          <Typography sx={{fontFamily: "Julius Sans One", fontSize:'12px',fontWeight: "bold", ml:1}}>주문 일자</Typography>
          <Typography sx={{fontFamily: "Julius Sans One", fontSize:'12px', ml:1}}>2022-02-02</Typography>
        </Box>
        <Typography sx={{fontFamily: "Julius Sans One", fontSize:'11px', mt:2.5, display:'flex', alignItems:'center'}}>
          <CallIcon sx={{ fontSize: '11px', mr:2 }}></CallIcon>010-0000-0000
        </Typography>
        <Typography sx={{fontFamily: "Julius Sans One", fontSize:'11px', mt:0.5, display:'flex', alignItems:'center'}}>
          <LocationOnIcon sx={{ fontSize: '11px', mr:2 }}></LocationOnIcon>서울특별시 어쩌구 저쩌구
        </Typography>
      </Box>
      <Box sx={{width:143.86,height:120,m:1}}>
        <Typography sx={{fontFamily: "Julius Sans One", fontSize:'10px', mt:1,mb:1,ml:3}}>상세보기</Typography>
        <Image src="/test.png" alt="test" width={81} height={106}></Image>
      </Box>
      </Box>
    </Box>
  );
};


export default OrderList;
