import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Link from "next/link";

type ListProps = {
  title: string;
  link: string;
};

function FlowerImgListTitle({ title, link }: ListProps) {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyItems="center"
        sx={{ width: 420 }}
      >
        <Grid item xs={9}>
          <Typography sx={{ ...textStyle }}>{title}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Link href={`/${link}`}></Link>
          <Typography sx={{ ...textStyle }}>더보기</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export const textStyle = {
  position: "absolute",
  fontFamily: "Julius Sans One",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "15px",
  lineHeight: "17px",
  color: "rgba(0, 0, 0, 0.5)",
};

export default FlowerImgListTitle;
