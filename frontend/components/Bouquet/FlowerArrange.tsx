import React, { useState, useRef } from 'react';
import { 
  Box, 
  ImageList, 
  ImageListItem 
} from '@mui/material';
import Draggable from "react-draggable"; 

function FlowerArrange() {

  const FlowerImageData = [
    {
      id: 1,
      img: "/img/rosePink.png"
    },
    {
      id: 2,
      img: "/img/rosePink.png"
    },
    {
      id: 3,
      img: "/img/roseRed.png"
    },
    {
      id: 4,
      img: "/img/carnationOrange.png"
    },
    {
      id: 5,
      img: "/img/carnationOrange.png"
    },
    {
      id: 6,
      img: "/img/freesiaPurple.png"
    },
    {
      id: 7,
      img: "/img/carnationPink.png"
    },
    {
      id: 8,
      img: "/img/roseRed.png"
    },
  ];
  const nodeRef = useRef(null);
  const [Opacity, setOpacity] = useState(false);
  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };
  const [position, setPosition] = useState({ x: 0, y: 0})
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y })
  }



  return (

    <Box sx={{ ...style }}>
      <ImageList sx={{ width: 320, height: 180 }} cols={4} rowHeight={70}>
        {FlowerImageData.map((item) => (
          <ImageListItem key={item.img} >
            <Draggable
              nodeRef={nodeRef}
              onDrag={(e, data) => trackPos(data)}
              onStart={handleStart}
              onStop={handleEnd}
            >
              <img ref={nodeRef} style={{ ...imagestyle }} src={`${item.img}`}/>
            </Draggable>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "0 auto",
  width: "360px",
}

export const imagestyle = {
  width: '100px',
  height: '100px',
}

export default FlowerArrange;