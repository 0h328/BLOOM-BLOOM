import React from 'react';
import { 
  Box, 
  ImageList, 
  ImageListItem 
} from '@mui/material';

function FlowerArrange() {
  
  const FlowerImageData = [
    {
      img: "/images/rosePink.png"
    },
    {
      img: "/images/rosePink.png"
    },
    {
      img: "/images/roseRed.png"
    },
    {
      img: "/images/carnationOrange.png"
    },
    {
      img: "/images/carnationOrange.png"
    },
    {
      img: "/images/freesiaPurple.png"
    },
    {
      img: "/images/carnationPink.png"
    },
    {
      img: "/images/roseRed.png"
    },
  ];

  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0 auto",
    width: "360px",
  }

  return (
    <Box sx={{ ...style }}>
      <ImageList sx={{ width: 320, height: 180 }} cols={4} rowHeight={70}>
        {FlowerImageData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`}/>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default FlowerArrange;