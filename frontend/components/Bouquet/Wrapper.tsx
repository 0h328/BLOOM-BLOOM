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
        spacing={3}
        direction="row"
        alignItems="center"
        justifyItems="center"
        sx={{ width: 320 }}
      >
        {wrapList.map((wrap, index) => {
          return (
            <Grid
              item
              spacing={1}
              xs={4}
              key={index}
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <img
                src={wrap.wrapImage}
                alt="포장지"
                style={{ width: "90px", height: "90px" }}
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
  margin: "10px auto",
  // overflow: "scroll",
};

export default Wrapper;
