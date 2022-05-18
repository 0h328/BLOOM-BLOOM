import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, ToggleButton, ToggleButtonGroup, Box } from "@mui/material";
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
  }, []);

  return (
    <Box sx={{ ...BouquetPage }}>
      {alignment === "1" && <WrapperChooseText></WrapperChooseText>}
      {alignment === "2" && <RibbonChooseText></RibbonChooseText>}
      {alignment === "3" && <StalkChooseText></StalkChooseText>}

      <Button>꽃고르러 가기</Button>
      {/* 선택한 포장지를 확인할 수 있는 곳 */}
      <Box sx={{ ...BouquetLayout }}>
        <Box
          sx={{
            position: "absolute",
            top: "5%",
            // zIndex: "mobile stepper",
          }}
        >
          <img
            src={wrapInfo.wrapBackImage}
            alt="포장지 뒷 부분"
            style={{ width: "300px", height: "300px" }}
            onError={handleError}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "8%",
            // zIndex: "drawer",
          }}
        >
          <img
            src={flowerInfo.flowerImage}
            alt="부속꽃"
            style={{ width: "300px", height: "300px" }}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "8%",
            // zIndex: "snackbar",
          }}
        >
          <img
            src={wrapInfo.wrapFrontImage}
            alt="포장지 앞 부분"
            style={{ width: "300px", height: "300px" }}
            onError={handleError}
          ></img>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "160px",
            // zIndex: "tooltip",
          }}
        >
          <img
            src={decoInfo.decoImage}
            alt="리본"
            style={{ width: "140px", height: "140px" }}
          ></img>
        </Box>
      </Box>
      {/* 선택한 포장지를 확인할 수 있는 곳 */}

      {/* 포장지, 리본, 꽃줄기 버튼 */}
      <Box sx={{ mt: "19rem" }}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <ToggleButton
            value="1"
            style={{
              ...btnStyle,
              backgroundColor: alignment === "1" ? "#FFFAFA" : "##EFDFBF",
            }}
          >
            포장지
          </ToggleButton>
          <ToggleButton
            value="2"
            style={{
              ...btnStyle,
              backgroundColor: alignment === "2" ? "#FFFAFA" : "##FFE0E0",
            }}
          >
            리본
          </ToggleButton>
          <ToggleButton
            value="3"
            style={{
              ...btnStyle,
              backgroundColor: alignment === "3" ? "#FFFAFA" : "##FFE0E0",
            }}
          >
            부속꽃
          </ToggleButton>
        </ToggleButtonGroup>
        {/* 포장지, 리본, 꽃줄기 버튼 */}

        <Box>
          {/* 버튼 클릭 시, 포장지/리본/꽃줄기를 종류별로 확인 가능*/}
          {alignment === "1" && <Wrapper wrapList={wrapList}></Wrapper>}
          {alignment === "2" && <Ribbon decoList={decoList}></Ribbon>}
          {alignment === "3" && <Stalk flowerList={flowerList}></Stalk>}
          {/* 버튼 클릭 시, 포장지/리본/꽃줄기를 종류별로 확인 가능*/}
        </Box>

        {/* 꽃을 선택하러갈 수 있는 버튼 */}
        {/* <Box
          sx={{
            textAlign: "center",
            mx: "auto",
            mt: "5%",
            width: "fit-Content",
          }}
        >
          <CommonButton
            icon={"🌺"}
            text={"꽃 고르러가기"}
            backgroundColor={"#FFC0D0"}
            handleBtn={handleRoute}
          ></CommonButton>
        </Box> */}
        {/* 꽃을 선택하러갈 수 있는 버튼 */}
      </Box>
    </Box>
  );
}

export const BouquetPage = {
  position: "relative",
  pt: "7rem",
};

export const BouquetLayout = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
};

export const btnStyle = {
  color: "black",
  width: "30%",
  height: "40px",
  border: "1px solid #FFE0E0",
  fontSize: "0.8rem",
};

export default BouquetContainer;
