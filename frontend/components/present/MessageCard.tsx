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
        height: "100%",
        borderRadius: "10px",
        overflow: "scroll",
        minHeight: "180px",
      }}
    >
      <Typography
        sx={{
          marginTop: "15px",
          fontFamily: "JuliusSansOne",
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
