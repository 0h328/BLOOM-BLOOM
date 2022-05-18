import React from "react";
import { Box, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { flowerState } from "../../states/states";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface flower {
  flowerSeq: number;
  flowerImage: string;
}

interface flowerProps {
  flowerList: flower[];
}

function Stalk({ flowerList }: flowerProps) {
  const [flowerInfo, setFlowerInfo] = useRecoilState(flowerState);
  const handleFlowerInfo = (flower: {
    flowerSeq: number;
    flowerImage: string;
  }) => {
    setFlowerInfo({
      ...flower,
    });
  };

  const clickHandler = (
    flower: {
      flowerSeq: number;
      flowerImage: string;
    },
    event
  ) => {
    handleFlowerInfo(flower);
  };

  return (
    <Box sx={{ ...style }}>
      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justifyItems="center"
        sx={{ width: "90%" }}
      >
        {flowerList.map((flower, index) => {
          return (
            <Grid
              item
              key={index}
              xs={6}
              sx={{
                "&:hover": { cursor: "pointer" },
                width: "33%",
                alignItems: "center",
              }}
            >
              <img
                src={flower.flowerImage}
                alt="부속꽃"
                width={"100%"}
                height={"auto"}
                onClick={(event) => {
                  clickHandler(flower, event);
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

export default Stalk;
