import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function MakeButton() {
  return (
    <Link href="/bouquet" passHref>
      <Box sx={{ position: "absolute" }}>
        <Button
          variant="contained"
          size="small"
          style={{
            position: "absolute",
            backgroundColor: "#FFFFFF",
            color: "#000000",
            fontFamily: "JuliusSansOne",
            borderRadius: "16px",
            width: 266,
            height: 52,
            top: "139px",
            left: "77px",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "Regular" }}>
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
