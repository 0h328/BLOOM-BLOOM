import {Box, Button, Typography} from '@mui/material';
import Image from "next/image";
import React from "react";
import FlowerInfoList from '../modal/FlowerInfoList';

function OrderFlower() {
  const flowerinfoList = [
    {
      flowerName: "수국",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
  ];
  return(
    <Box sx={{width:400,height:234,mt:2,mx:'auto' }}>
      <Box sx={{pt:1,pb:1,pl:3}}>
        <Typography sx={{fontFamily: "OneMobileLight", fontSize:'17px', fontWeight:'bold'}}>의뢰내역</Typography>
      </Box>
      <Box sx={{height:193.5, display:'flex'}}>
        <Box sx={{width:150, ml:1}}>
          <Image src="/bouquet1.png" alt="insta" width={150} height={193.5}></Image>
        </Box>
        <Box
              sx={{
                ml:1,
                width: 230,
                height: 193.5,
                backgroundColor: "#ffff",
                borderRadius: "10px",
                border: "1px solid rgba(82, 82, 82, 0.29)",
                overflow: "scroll",
              }}
            >
              <FlowerInfoList flowerInfoList={flowerinfoList} />
            </Box>
      </Box>
    </Box>
  );
};


export default OrderFlower;
