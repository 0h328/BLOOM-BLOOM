import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "../components/common/Header";
import Move from "../components/move/Move";
import FlowerArrangeText from "../components/Choose/FlowerArrangeText";
import Test from "../components/move/Test";
import BouquetCheckModal from "../components/modal/BouquetCheckModal";
import html2canvas from "html2canvas";
import Moveable from "react-moveable";
import Selecto from "react-selecto";
import { presentBouquetState } from "../states/states";
import { useRouter } from "next/router";
import {
  wrapState,
  decoState,
  flowerState,
  mainFlowerState,
  totalCountState,
  confirmBouquetState,
} from "../states/states";
import Toast from "../components/common/Toast";
import { toast } from "material-react-toastify";
import { useRecoilState } from "recoil";
import { saveBouquet } from "../components/apis/bouquetApi";
function Arrange() {
  const router = useRouter();
  const [finish, setFinish] = useState<boolean>(false);
  const [bouquetImage, setBouquetImage] = useState<string>();
  const [checkModal, setCheckModal] = useState<boolean>();
  const [wrapInfo, setWrapInfo] = useRecoilState(wrapState);
  const [decoInfo, setDecoInfo] = useRecoilState(decoState);
  const [flowerInfo, setFlowerInfo] = useRecoilState(flowerState);
  const [mainFlower, setMainFlower] = useRecoilState(mainFlowerState);
  const [totalCount, setTotalCount] = useRecoilState(totalCountState);
  const [confirmBouquet, setConfirmBouquet] =
    useRecoilState(confirmBouquetState);
  const [presentBouquet, setPresentBouquet] =
    useRecoilState(presentBouquetState);
  const [windowHeight, setWindowHeight] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [bouquetImageData, setBouquetImageData] = useState<FormData>();
  const [release, setRelease] = useState<boolean>(false);
  const moveableRef = useRef(null);
  const selectoRef = useRef(null);
  const handleSaveImg = () => {
    if (finish) {
      html2canvas(document.querySelector("#img"), {
        backgroundColor: "transparent",
        foreignObjectRendering: false,
        useCORS: true,
        height: windowHeight,
      }).then((canvas) => {
        setBouquetImage(canvas.toDataURL("image/png"));
        setConfirmBouquet(canvas.toDataURL("image/png"));
        // setPresentBouquet({
        //   presentBouquetImage: canvas.toDataURL("image/png"),
        //   presentBouquetSeq : ""
        // });

        const imgBase64 = canvas.toDataURL("image/png");
        const decodImg = atob(imgBase64.split(",")[1]);

        let array = [];
        for (let i = 0; i < decodImg.length; i++) {
          array.push(decodImg.charCodeAt(i));
        }

        const file = new Blob([new Uint8Array(array)], { type: "image/png" });
        const fileName = "canvas_img_" + new Date().getMilliseconds() + ".png";
        const formData = new FormData();
        formData.append("file", file, fileName);

        const data = {
          wrapSeq: wrapInfo.wrapSeq,
          decoSeq: decoInfo.decoSeq,
          subFlowerSeq: flowerInfo.flowerSeq,
          mainFlower: mainFlower,
        };
        console.log(data);
        formData.append(
          "request",
          new Blob([JSON.stringify(data)], { type: "application/json" })
        );
        setBouquetImageData(formData);
        handleCheckModal(true);
      });
    } else {
      toast.error("📣배치완료 버튼을 눌러 배치를 완료해주세요");
    }
  };
  const handleComplete = async () => {
    console.log("여기");
    router.push("/confirm");
    const response = await saveBouquet(bouquetImageData);
    setPresentBouquet({
      presentBouquetImage: response.data.data.bouquetImage,
      presentBouquetSeq: response.data.data.bouquetSeq,
    });
  };
  const handleArrange = (state: boolean) => {
    setFinish(state);
    setWindowHeight(window.innerHeight * 0.45);
  };
  const handleCheckModal = (state: boolean) => {
    setCheckModal(state);
    setFinish(state);
  };
  useEffect(() => {
    setHeight(window.innerHeight);
  });
  return (
    <Box
      sx={{
        mx: "auto",
        width: 420,
        backgroundColor: "#FFFAFA",
        height: "100vh",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ height: "10vh", display: "flex", alignItems: "center" }}>
        <Header page="main"></Header>
      </Box>
      <BouquetCheckModal
        bouquetImage={bouquetImage}
        handleCheckModal={handleCheckModal}
        checkModal={checkModal}
        handleComplete={handleComplete}
      ></BouquetCheckModal>
      <Box sx={{ position: "relative", width: "100%", height: "10vh" }}>
        <FlowerArrangeText
          handleSaveImg={handleSaveImg}
          finish={finish}
          handleArrange={handleArrange}
        ></FlowerArrangeText>
      </Box>
      <Selecto
        ref={selectoRef}
        dragContainer={".elements"}
        selectableTargets={[".selecto-area .cube"]}
        hitRate={0}
        selectByClick={true}
        selectFromInside={false}
        toggleContinueSelect={["shift"]}
        ratio={0}
        onSelect={(e) => {
          console.log(e.selected);
        }}
      ></Selecto>
      <Box
        className="elements selecto-area"
        id="img"
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          // id="img"
          sx={{
            height: "45vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              ...imgBox,
            }}
          >
            <img
              src={wrapInfo.wrapBackImage}
              width={"100%"}
              height={"auto"}
            ></img>
          </Box>
          <Box sx={{ ...imgBox }}>
            <img
              src={flowerInfo.flowerImage}
              width={"100%"}
              height={"auto"}
            ></img>
          </Box>
          <Box sx={{ ...imgBox }}>
            <img
              src={wrapInfo.wrapFrontImage}
              width={"100%"}
              height={"auto"}
            ></img>
          </Box>
          <Box sx={{ ...imgBox }}>
            <img
              src={decoInfo.decoImage}
              style={{
                position: "absolute",
                top: "186px",
                height: "130px",
                width: "130px",
              }}
            ></img>
          </Box>
        </Box>
        <Box
          sx={{
            height: "30vh",
            width: "85%",
            backgroundColor: "#EFDFBF",
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
            justifyContent: "center",
            WebkitAlignItems: "flex-start",
          }}
        >
          <Move finish={finish} handleSaveImg={handleSaveImg}></Move>
        </Box>
      </Box>
      <Toast />
    </Box>
  );
}

export const btnStyle = {
  backgroundColor: "#FFE0E0",
  color: "#3A1D1D",
  fontFamily: "ONEMobileLight",
  borderRadius: "5",
  width: "40%",
  height: "auto",
};

export const imgBox = {
  position: "absolute",
  width: "40vh",
  display: "flex",
  justifyContent: "center",
  height: "50%",
  minHeight: "330px",
};

export default Arrange;
