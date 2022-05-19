import { Box, Button, Typography, TextField, InputBase } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Request({ handleContent }) {
  const [content, setContent] = useState<string>("");
  const handleInput = (event: any) => {
    const text = event.target.value;
    setContent(`${text}`);
  };
  useEffect(() => {
    handleContent(content);
  }, [content]);
  return (
    <Box sx={{ width: "100%", height: "100%", mt: 2, mx: "auto" }}>
      <Box sx={{ pl: 3, pt: 2 }}>
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
          sx={{ mt: 1, width: "90%", fontFamily: "OneMobileLight" }}
          placeholder="내용 입력"
          multiline
          rows={4}
          value={content}
          onChange={(event) => handleInput(event)}
        />
      </Box>
    </Box>
  );
}

export default Request;
