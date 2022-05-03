import React from 'react';
import { 
  Box, 
  ImageList, 
  ImageListItem 
} from '@mui/material';

function Wrapper() {

  const WrapperImageData = [
    {
      img: "/images/Wrapper1.png"
    },
    {
      img: "/images/Wrapper2.png"
    },
    {
      img: "/images/Wrapper3.png"
    },
    {
      img: "/images/Wrapper4.png"
    },
    {
      img: "/images/Wrapper5.png"
    },
    {
      img: "/images/Wrapper6.png"
    },
    {
      img: "/images/Wrapper7.png"
    },
    {
      img: "/images/Wrapper8.png"
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
        {WrapperImageData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`}/>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}


export default Wrapper;