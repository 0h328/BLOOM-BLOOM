import React from 'react';
import { 
  Box, 
  ImageList,
  ImageListItem 
} from '@mui/material';

function Stalk() {

  const StalkImageData = [
    {
      img: "/images/stalk1.png"
    },
    {
      img: "/images/stalk2.png"
    },
    {
      img: "/images/stalk3.png"
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
      <ImageList sx={{ width: 330, height: 330 }} cols={2} rowHeight={100}>
        {StalkImageData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`}/>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default Stalk;