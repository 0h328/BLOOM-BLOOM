import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

function BackBtn() {
  const router = useRouter();
  return (
    <Button
      sx={{
        fontFamily: "OneMobileLight",
        fontSize: 16,
        mx: "auto",
        ml: 2,
        color: "black",
        "&:hover": { cursor: "pointer" },
      }}
      onClick={() => {
        router.back();
      }}
    >
      BACK
    </Button>
  );
}
export default BackBtn;
