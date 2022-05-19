import React, { Component } from "react";
import { Box, Grid, Paper, Button, Card } from "@mui/material";
import { useRecoilState } from "recoil";
import { wrapState } from "../../states/states";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface wrap {
  wrapSeq: number;
  wrapImage: string;
  wrapBackImage: string;
  wrapFrontImage: string;
}

interface wrapProps {
  wrapList: wrap[];
}

function Wrapper({ wrapList }: wrapProps) {
  const [wrapInfo, setWrapInfo] = useRecoilState(wrapState);
  const handleWrapInfo = (wrap: {
    wrapSeq: number;
    wrapImage: string;
    wrapBackImage: string;
    wrapFrontImage: string;
  }) => {
    setWrapInfo({
      ...wrap,
    });
  };

  const clickHandler = (
    wrap: {
      wrapSeq: number;
      wrapImage: string;
      wrapBackImage: string;
      wrapFrontImage: string;
    },
    event
  ) => {
    handleWrapInfo(wrap);
  };

  return (
    <Box sx={{ ...style }}>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyItems="center"
        sx={{ width: "90%" }}
      >
        {wrapList.map((wrap, index) => {
          return (
            <Grid
              item
              xs={4}
              key={index}
              sx={{
                "&:hover": { cursor: "pointer" },
                width: "10vh",
                alignItems: "center",
              }}
            >
              <img
                src={wrap.wrapImage}
                alt="포장지"
                width={"100%"}
                height={"auto"}
                onClick={(event) => {
                  clickHandler(wrap, event);
                }}
              ></img>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "1vh auto",
  width: "100%",
};

export default Wrapper;
