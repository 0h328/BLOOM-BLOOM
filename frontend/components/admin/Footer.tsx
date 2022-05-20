import React from 'react';
import {
  Box, 
  Typography,
} from '@mui/material';

export default function Footer() {
  return (
    <Box 
      style={{
        position: "fixed",
        top: "90%",
        left: "40%"
      }}
    >
      <Typography
        variant="caption"
        style={{
          fontSize: "1rem",
          color: "#808080",
          fontWeight: "600",
          fontFamily: "ONEMobileLight"
        }}
      >
        Copyright ⓒ 2022, BloomBloom. All rights Reserved.
      </Typography>
    </Box>
  )
}