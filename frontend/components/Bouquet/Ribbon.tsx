import React from 'react';
import { 
  Box, 
  ImageList, 
  ImageListItem 
} from '@mui/material';

function Ribbon() {

  const RibbonImageData = [
    {
      img: "/images/ribbonDeepPink.png"
    },
    {
      img: "/images/ribbonDeepBrown.png"
    },
    {
      img: "/images/ribbonPurple.png"
    },
    {
      img: "/images/ribbonNavy.png"
    },
    {
      img: "/images/ribbonMixBrown.png"
    },
    {
      img: "/images/ribbonMixPink.png"
    },
    {
      img: "/images/ribbonMixRed.png"
    },
    {
      img: "/images/ribbonMixYellow.png"
    },
  ];

  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "20px auto"
  }
    
  return (
    <Box sx={{ ...style }}>
      <ImageList sx={{ width: 330, height: 330 }} cols={3} rowHeight={100}>
        {RibbonImageData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`}/>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default Ribbon;