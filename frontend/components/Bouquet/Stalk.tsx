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
      {flowerList.map((flower, index) => {
        return (
          <Grid
            item
            key={index}
            sx={{
              "&:hover": { cursor: "pointer" },
              width: "130px",
              heigth: "130px",
            }}
          >
            <img
              src={flower.flowerImage}
              alt="부속꽃"
              style={{ width: "130px", height: "130px" }}
              onClick={(event) => {
                clickHandler(flower, event);
              }}
            ></img>
          </Grid>
        );
      })}
    </Box>
  );
}

export const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  height: "100%",
  margin: "10px auto",
};

export default Stalk;
