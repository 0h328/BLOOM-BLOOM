import React from "react";
import { Box, Typography } from "@mui/material";

interface messageProps {
  message: string;
}
function MessageCard({ message }: messageProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#EFDFBF",
        width: "100%",
        minHeight: "180px",
        overflow: "scroll",
        height: "100%",
        border: "1px solid #e8e8e8",
      }}
    >
      <Typography
        sx={{
          height: "100%",
          overflow: "scroll",
          marginTop: "15px",
          fontFamily: "OneMobileLight",
          fontSize: "14px",
          textAlign: "center",
          whiteSpace: "pre-line",
          lineHeight: "25px",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
}

export default MessageCard;
