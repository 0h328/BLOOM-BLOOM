import React from "react";
import { Box, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { decoState } from "../../states/states";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface deco {
  decoSeq: number;
  decoImage: string;
}

interface decoProps {
  decoList: deco[];
}

function Ribbon({ decoList }: decoProps) {
  const [decoInfo, setDecoInfo] = useRecoilState(decoState);
  const handleDecoInfo = (deco: { decoSeq: number; decoImage: string }) => {
    setDecoInfo({
      ...deco,
    });
  };

  const clickHandler = (
    deco: {
      decoSeq: number;
      decoImage: string;
    },
    event
  ) => {
    handleDecoInfo(deco);
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
        {decoList.map((deco, index) => {
          return (
            <Grid
              key={index}
              item
              xs={4}
              sx={{
                "&:hover": { cursor: "pointer" },
                width: "33%",
                alignItems: "center",
              }}
            >
              <img
                src={deco.decoImage}
                alt="리본"
                width={"100%"}
                height={"auto"}
                onClick={(event) => {
                  clickHandler(deco, event);
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

export default Ribbon;
