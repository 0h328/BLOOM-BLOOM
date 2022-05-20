import React, { useState } from "react";
import { Box, Button, Typography, TextField, InputBase } from "@mui/material";
import Image from "next/image";

function OrderContent({ orderDetail }) {
  const [content, setContent] = useState<string>("");
  return (
    <Box sx={{ width: "100%", height: "100%", mx: "auto", mt: 2 }}>
      <Box sx={{ pl: 3, mb: 2 }}>
        <Typography
          sx={{
            fontFamily: "OneMobileLight",
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          요청 사항
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          sx={{ width: "90%", fontFamily: "OneMobileLight" }}
          // placeholder="내용 입력"
          multiline
          rows={4}
          value={orderDetail.orderDesc}
          disabled={true}
        />
        <Box />
      </Box>
    </Box>
  );
}

export default OrderContent;
