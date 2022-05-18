import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function MakeButton() {
  return (
    <Link href="/bouquet" passHref>
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
            sx={{ position: "absolute", left: "220px", color: "#FFC0D0" }}
          />
        </Button>
      </Box>
    </Link>
  );
}
export default MakeButton;
