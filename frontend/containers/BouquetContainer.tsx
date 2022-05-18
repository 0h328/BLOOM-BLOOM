import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Typography,
} from "@mui/material";
import WrapperChooseText from "../components/Choose/WrapperChooseText";
import RibbonChooseText from "../components/Choose/RibbonChooseText";
import StalkChooseText from "../components/Choose/StalkChooseText";
import Wrapper from "../components/Bouquet/Wrapper";
import Ribbon from "../components/Bouquet/Ribbon";
import Stalk from "../components/Bouquet/Stalk";
import { useRecoilState } from "recoil";
import { wrapState, decoState, flowerState } from "../states/states";
import CommonButton from "../components/common/CommonButton";
import { Router } from "react-router-dom";
import { useRouter } from "next/router";

interface containerProps {
  src?: any;
}
function BouquetContainer({ src }: containerProps) {
  // const { src } = props;
  const [imgSrc, setImgSrc] = useState(src);
  const router = useRouter();
  const [wrapInfo, setWrapInfo] = useRecoilState(wrapState);
  const [decoInfo, setDecoInfo] = useRecoilState(decoState);
  const [flowerInfo, setFlowerInfo] = useRecoilState(flowerState);
  const [alignment, setAlignment] = useState("1");
  const [windowHeight, setWindowHeight] = useState<boolean>();
  const handleAlignment = (
    event: any,
    newAlignment: React.SetStateAction<string>
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  const handleError = () => {
    setImgSrc("/img/bouquet0.png");
  };
  const handleRoute = () => {
    router.push("/flower");
  };

  const wrapList = [
    {
      wrapSeq: 2,
      wrapImage: "/img/wrapIvory.png",
      wrapBackImage: "/img/wrapBackIvory.png",
      wrapFrontImage: "/img/wrapFrontIvory.png",
    },
    {
      wrapSeq: 3,
      wrapImage: "/img/wrapNavy.png",
      wrapBackImage: "/img/wrapBackNavy.png",
      wrapFrontImage: "/img/wrapFrontNavy.png",
    },
    {
      wrapSeq: 4,
      wrapImage: "/img/wrapLightgreen.png",
      wrapBackImage: "/img/wrapBackLightgreen.png",
      wrapFrontImage: "/img/wrapFrontLightgreen.png",
    },
    {
      wrapSeq: 5,
      wrapImage: "/img/wrapPink.png",
      wrapBackImage: "/img/wrapBackPink.png",
      wrapFrontImage: "/img/wrapFrontPink.png",
    },
    {
      wrapSeq: 6,
      wrapImage: "/img/wrapPurple.png",
      wrapBackImage: "/img/wrapBackPurple.png",
      wrapFrontImage: "/img/wrapFrontPurple.png",
    },
    {
      wrapSeq: 7,
      wrapImage: "/img/wrapSkyblue.png",
      wrapBackImage: "/img/wrapBackSkyblue.png",
      wrapFrontImage: "/img/wrapFrontSkyblue.png",
    },
    {
      wrapSeq: 8,
      wrapImage: "/img/wrapYellow.png",
      wrapBackImage: "/img/wrapBackYellow.png",
      wrapFrontImage: "/img/wrapFrontYellow.png",
    },
    {
      wrapSeq: 9,
      wrapImage: "/img/wrapOrange.png",
      wrapBackImage: "/img/wrapBackOrange.png",
      wrapFrontImage: "/img/wrapFrontOrange.png",
    },
  ];

  const flowerList = [
    { flowerSeq: 2, flowerImage: "/img/flower2.png" },
    { flowerSeq: 3, flowerImage: "/img/flower3.png" },
    { flowerSeq: 4, flowerImage: "/img/flower1.png" },
  ];

  const decoList = [
    { decoSeq: 2, decoImage: "/img/ribbonMixYellow.png" },
    { decoSeq: 3, decoImage: "/img/ribbonPurple.png" },
    { decoSeq: 4, decoImage: "/img/ribbonNavy.png" },
    { decoSeq: 5, decoImage: "/img/ribbonMixBrown.png" },
    { decoSeq: 6, decoImage: "/img/ribbonMixPink.png" },
    { decoSeq: 7, decoImage: "/img/ribbonMixRed.png" },
    { decoSeq: 8, decoImage: "/img/ribbonDeepBrown.png" },
    { decoSeq: 9, decoImage: "/img/ribbonDeepPink.png" },
  ];

  useEffect(() => {
    console.log(alignment);
  }, [alignment]);

  useEffect(() => {
    setWrapInfo({
      wrapSeq: 2,
      wrapImage: "/img/wrapIvory.png",
      wrapBackImage: "/img/wrapBackIvory.png",
      wrapFrontImage: "/img/wrapFrontIvory.png",
    });
    setDecoInfo({ decoSeq: 2, decoImage: "/img/ribbonMixYellow.png" });
    setFlowerInfo({ flowerSeq: 2, flowerImage: "/img/flower2.png" });
    setWindowHeight(window.innerHeight > 810);
  }, []);
  console.log(alignment);
  return (
    <Box sx={{ ...BouquetPage }}>
      <Box sx={{ height: "5%", display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ width: "100%" }}>
          {alignment === "1" && <WrapperChooseText></WrapperChooseText>}
          {alignment === "2" && <RibbonChooseText></RibbonChooseText>}
          {alignment === "3" && <StalkChooseText></StalkChooseText>}
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "OneMobileLight",
              fontWeight: "600",
              fontSize: "12px",
              color: "#6c6c6c",
            }}
          >
            다 골랐니? 다 골랐으면 꽃 구경하러 갈래?
          </Typography>
        </Box>
        {/* 선택한 포장지를 확인할 수 있는 곳 */}
      </Box>
      <Box sx={{ ...BouquetLayout }}>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            // zIndex: "mobile stepper",
          }}
        >
          <img
            src={wrapInfo.wrapBackImage}
            alt="포장지 뒷 부분"
            // style={{ width: "290px", height: "290px" }}
            style={{
              width: windowHeight ? "330px" : "290px",
              height: windowHeight ? "330px" : "290px",
            }}
            onError={handleError}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            // zIndex: "drawer",
          }}
        >
          <img
            src={flowerInfo.flowerImage}
            alt="부속꽃"
            // style={{ width: "290px", height: "290px" }}
            style={{
              width: windowHeight ? "330px" : "290px",
              height: windowHeight ? "330px" : "290px",
            }}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            // zIndex: "snackbar",
          }}
        >
          <img
            src={wrapInfo.wrapFrontImage}
            alt="포장지 앞 부분"
            // style={{ width: "290px", height: "290px" }}
            style={{
              width: windowHeight ? "330px" : "290px",
              height: windowHeight ? "330px" : "290px",
            }}
            onError={handleError}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: windowHeight ? "170px" : "140px",
            display: "flex",
            justifyContent: "center",
            // zIndex: "tooltip",
          }}
        >
          <img
            src={decoInfo.decoImage}
            alt="리본"
            style={{
              width: windowHeight ? "120px" : "120px",
              height: windowHeight ? "160px" : "160px",
            }}
          ></img>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            width: "100%",
            height: "100%",
            mr: "4%",
            mb: "2%",
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={
              {
                // alignItems: "center",
              }
            }
            style={{
              // display: "flex",
              backgroundColor: "#FFE0E0",
              color: "#000",
              fontFamily: "OneMobileLight",
              borderRadius: "100px",
              width: 130,
              height: 40,
              // maxHeight: "50%",
            }}
            onClick={handleRoute}
          >
            <Typography
              component="div"
              sx={{
                width: "100%",
                ...btnStyle1,
              }}
            >
              🌺 꽃 보러 가기
            </Typography>
          </Button>
        </Box>
      </Box>
      {/* 선택한 포장지를 확인할 수 있는 곳 */}

      {/* 포장지, 리본, 꽃줄기 버튼 */}
      <Box
        sx={{
          mt: "5%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            backgroundColor: "#EFDFBF",
          }}
        >
          <ToggleButton
            value="1"
            style={{
              ...btnStyle,
              backgroundColor: alignment === "1" ? "#FFFAFA" : "transparent",
            }}
          >
            포장지
          </ToggleButton>
          <ToggleButton
            value="2"
            style={{
              ...btnStyle,
              backgroundColor: alignment === "2" ? "#FFFAFA" : "transparent",
            }}
          >
            리본
          </ToggleButton>
          <ToggleButton
            value="3"
            style={{
              ...btnStyle,
              backgroundColor: alignment === "3" ? "#FFFAFA" : "transparent",
            }}
          >
            부속꽃
          </ToggleButton>
        </ToggleButtonGroup>
        {/* 포장지, 리본, 꽃줄기 버튼 */}
      </Box>
      <Box
        sx={{
          height: windowHeight ? "60%" : "45%",
          overflow: "scroll",
          // mt: "5%",
        }}
      >
        {/* 버튼 클릭 시, 포장지/리본/꽃줄기를 종류별로 확인 가능*/}
        {alignment === "1" && <Wrapper wrapList={wrapList}></Wrapper>}
        {alignment === "2" && <Ribbon decoList={decoList}></Ribbon>}
        {alignment === "3" && <Stalk flowerList={flowerList}></Stalk>}

        {/* 버튼 클릭 시, 포장지/리본/꽃줄기를 종류별로 확인 가능*/}
      </Box>
    </Box>
  );
}

export const BouquetPage = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

export const BouquetLayout = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  height: "55%",
  mt: "5%",
};

export const btnStyle = {
  width: "20%",
  height: "20px",
  border: "none",
  fontSize: "0.8rem",
  fontFamily: "ONEMobileLight",
  color: "#000",
  fontWeight: "600",
};

export const btnStyle1 = {
  fontWeight: "600",
  fontSize: "13px",
  fontFamily: "OneMobileLight",
  color: "#000",
};

export default BouquetContainer;
