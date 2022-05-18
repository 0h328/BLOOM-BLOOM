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
    <StyledSlider {...settings}>
      {wrapList.map((wrap, index) => {
        return (
          <Box key={index} sx={{ width: "140px" }}>
            <img
              src={wrap.wrapImage}
              alt="포장지"
              style={{ width: "120px", height: "120px" }}
              onClick={(event) => {
                clickHandler(wrap, event);
              }}
            ></img>
          </Box>
        );
      })}
    </StyledSlider>
  );
}

export const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "20px auto",
};

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "0px",
  centerMode: true,
  adaptiveHeight: true,
  touchMove: true,
  focusOnSelect: true,
  useCSS: true,
};

export const StyledSlider = styled(Slider)`
  .slick-slider {
    padding: 3px;
  }
  .slick-list {
    width: 100%;
    height: 100%;
    margin: 1% 0% 1% 0%;
  }

  .slick-slide div {
    width: 120px;
    height: 130px;
    cursor: pointer;
    margin: 10px 10px 10px 10px;
  }

  .slick-dots {
    bottom: -10px;
  }

  .slick-track {
    width: 100%;
    overflowe-x: hidden;
  }

  .slick-next {
    color: #ffe0e0;
    backgroundcolor: #ffe0e0;
    rigth: 0px !important;
  }

  .slick-arrow {
    color: #ffe0e0;
    rigth: 0px !important;
  }

  .slick-prev {
    color: #ffe0e0;
    backgroundcolor: #ffe0e0;
    left: 0px;
  }
  .slick-next {
    left: 0px;
    backgroundcolor: #ffe0e0;
  }
`;

export default Wrapper;
