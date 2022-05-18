import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

interface btnProps {
  handleMake: () => void;
}
function MakeButton({ handleMake }: btnProps) {
  return (
    <Box sx={{}}>
      <Button
        variant="contained"
        size="small"
        style={{
          backgroundColor: "#FFFFFF",
          color: "#000000",
          borderRadius: "16px",
          width: 266,
          height: 52,
        }}
        onClick={handleMake}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            fontFamily: "ONEMobileLight",
          }}
        >
          꽃다발 만들기
        </Typography>
        <ArrowRightAltIcon
          sx={{ position: "absolute", right: "10%", color: "#FFC0D0" }}
        />
      </Button>
    </Box>
  );
}
export default MakeButton;
