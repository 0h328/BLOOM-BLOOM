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
    <StyledSlider {...settings}>
      {decoList.map((deco, index) => {
        return (
          <Box key={index} sx={{ "&:hover": { cursor: "pointer" } }}>
            <img
              src={deco.decoImage}
              alt="리본"
              style={{ width: "100px", height: "100px" }}
              onClick={(event) => {
                clickHandler(deco, event);
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
  // margin: "20px auto"
};

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 4,
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

export default Ribbon;
