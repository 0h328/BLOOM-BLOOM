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
    <StyledSlider {...settings}>
      {flowerList.map((flower, index) => {
        return (
          <Box
            key={index}
            sx={{
              "&:hover": { cursor: "pointer" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={flower.flowerImage}
              alt="부속꽃"
              style={{ width: "150px", height: "150px" }}
              onClick={(event) => {
                clickHandler(flower, event);
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
  // margin: "20px auto",
};

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 2,
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

export default Stalk;
