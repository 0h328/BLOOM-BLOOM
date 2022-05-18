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
        // spacing={3}
        direction="row"
        alignItems="center"
        justifyItems="center"
        sx={{ width: 320 }}
      >
        {decoList.map((deco, index) => {
          return (
            <Grid
              key={index}
              item
              xs={4}
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <img
                src={deco.decoImage}
                alt="리본"
                style={{ width: "95px", height: "95px" }}
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
  margin: "10px auto",
};

export default Ribbon;
