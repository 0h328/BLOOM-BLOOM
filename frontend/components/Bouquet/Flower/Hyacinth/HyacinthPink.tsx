import React, { useState } from 'react';
import {
  Box,
  ButtonGroup,
  Card,
  CardMedia,
  IconButton
}
from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function HyacinthRed() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => {
    if ( count < 8 ) {
      setCount(count + 1);
    }
  }
  const onDecrease = () => {
    if ( count > 0 ) {
      setCount(count - 1);
    }
  }

  return (
    <Box>
      <Box style={{ 
        border: '1px solid #EFDFBF',
        borderRadius: '16px',
        backgroundColor: "#EFDFBF",
        marginBottom: "0.2rem",
        fontSize: "12px",
        textAlign: "center"
      }}>
        당신의 사랑
      </Box>
      <Card className="image_card" sx={{ maxWidth: 80 }}>
        <CardMedia 
          component="img"
          height="80"
          image="/images/hyacinthPink.png"
        />
      </Card>
      <ButtonGroup 
        variant="text"
        aria-label="text button group"
        style={{ 
          backgroundColor: "white", 
          maxWidth: '80px', 
          minWidth: '80px', 
          maxHeight: '20px',
          minHeight: '20px',
          marginTop: '5px'
        }}
      >
        <IconButton 
          onClick={onDecrease} 
          style={{
            maxWidth: '20px', 
            maxHeight: '20px', 
            minWidth: '20px', 
            minHeight: '20px',
          }}
        >
          <RemoveIcon />
        </IconButton>            
          <Box style={{ 
            textAlign: 'center',
            maxWidth: '40px', 
            minWidth: '40px'
          }}
          >
            {count}
          </Box>
        <IconButton 
          onClick={onIncrease} 
          style={{
            maxWidth: '20px', 
            maxHeight: '20px', 
            minWidth: '20px', 
            minHeight: '20px'
          }}
        >
          <AddIcon />
        </IconButton>
      </ButtonGroup>
    </Box>

  )
};

export default HyacinthRed;