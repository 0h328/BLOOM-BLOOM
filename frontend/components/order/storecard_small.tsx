import {Box, Button, Typography} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import Image from "next/image";
import React from "react";

function Storecard() {
  return(
    <Box sx={{width:400,height:163,mt:3,backgroundColor: "#FFE0E0",mx:'auto'}}>
      <Box sx={{width:400,height:120,mt:1,mb:1,display: 'flex'}}>
      <Box sx={{width:171.86,height:120,m:2}}>
      <Image src="/test.png" alt="test" width={171.86} height={120}></Image>
      </Box>
      <Box sx={{width:215,height:120, mt:1, ml:1.5}}>
        <Box sx={{display:'flex',height:35, mt:1, alignItems:'baseline'}}>
          <Typography sx={{fontFamily: "Julius Sans One", fontSize:'25px',fontWeight: "bold"}}>꽃집 이름</Typography>
          <Box sx={{display:'flex', width:35, justifyContent:'space-between', ml:0.5}}>
            <Image src="/insta.png" alt="insta" width={15} height={15}></Image>
            <Image src="/naver.png" alt="naver" width={15} height={15}></Image>
          </Box>
        </Box>
        <Typography sx={{fontFamily: "Julius Sans One", fontSize:'11px', mt:2.5, display:'flex', alignItems:'center'}}>
          <CallIcon sx={{ fontSize: '11px', mr:2 }}></CallIcon>010-0000-0000
        </Typography>
        <Typography sx={{fontFamily: "Julius Sans One", fontSize:'11px', mt:0.5, display:'flex', alignItems:'center'}}>
          <LocationOnIcon sx={{ fontSize: '11px', mr:2 }}></LocationOnIcon>서울특별시 어쩌구 저쩌구
        </Typography>
        <Typography sx={{fontFamily: "Julius Sans One", fontSize:'11px', mt:0.5}}>
          <MapIcon sx={{ fontSize: '11px', mr:2 }}></MapIcon>네이버 주소
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};


export default Storecard;
