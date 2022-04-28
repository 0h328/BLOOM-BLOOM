import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
function MakeButton() {
  return (
    <Link href="/make" passHref>
      <Box sx={{ position: "absolute" }}>
        <Button
          variant="contained"
          size="small"
          style={{
            position: "absolute",
            backgroundColor: "#FFFFFF",
            color: "#000000",
            fontFamily: "JuliusSansOne",
            fontWeight: "500",
            fontSize: "20px",
            borderRadius: "16px",
            width: 266,
            height: 52,
            top: "139px",
            left: "77px",
          }}
        >
          <Typography>꽃다발 만들기</Typography>
        </Button>
      </Box>
    </Link>
  );
}
export default MakeButton;
