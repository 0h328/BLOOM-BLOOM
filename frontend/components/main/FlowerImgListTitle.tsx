import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

type listProps = {
  title: string;
  link: string;
};

function FlowerImgListTitle({ title, link }: listProps) {
  return (
    <Box sx={{}}>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyItems="center"
        sx={{ width: 420, padding: "1.5rem" }}
      >
        <Grid item xs={9}>
          <Typography sx={{ ...textStyle, fontWeight: "bold", left: "10px" }}>
            {title}
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Link href={`${link}`} passHref>
            <Typography
              sx={{
                ...textStyle,
                fontSize: "12px",
                fontWeight: "bold",
                "&:hover": { cursor: "pointer" },
              }}
            >
              더보기
              <ArrowForwardIosIcon
                sx={{ fontSize: "10px", color: "#FFC0D0" }}
              />
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export const textStyle = {
  fontFamily: "ONEMobileLight",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "17px",
  color: "rgba(0, 0, 0, 0.5)",
};

export default FlowerImgListTitle;
