import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "../components/common/Header";
import Move from "../components/move/Move";
import FlowerArrangeText from "../components/Choose/FlowerArrangeText";
import Test from "../components/move/Test";
import BouquetCheckModal from "../components/modal/BouquetCheckModal";
import html2canvas from "html2canvas";
import {
  wrapState,
  decoState,
  flowerState,
  mainFlowerState,
} from "../states/states";
import Toast from "../components/common/Toast";
import { toast } from "material-react-toastify";
import { useRecoilState } from "recoil";
import { saveBouquet } from "../components/apis/bouquetApi";
function Arrange() {
  const [finish, setFinish] = useState<boolean>(false);
  const [bouquetImage, setBouquetImage] = useState<string>();
  const [checkModal, setCheckModal] = useState<boolean>();
  const [wrapInfo, setWrapInfo] = useRecoilState(wrapState);
  const [decoInfo, setDecoInfo] = useRecoilState(decoState);
  const [flowerInfo, setFlowerInfo] = useRecoilState(flowerState);
  const [mainFlower, setMainFlower] = useRecoilState(mainFlowerState);
  const [windowHeight, setWindowHeight] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [bouquetImageData, setBouquetImageData] = useState<FormData>();

  const handleSaveImg = () => {
    if (finish) {
      html2canvas(document.querySelector("#img"), {
        backgroundColor: "#FFFAFA",
        foreignObjectRendering: false,
        useCORS: true,
        height: windowHeight,
      }).then((canvas) => {
        setBouquetImage(canvas.toDataURL("image/png"));

        const imgBase64 = canvas.toDataURL("image/png");
        const decodImg = atob(imgBase64.split(",")[1]);

        let array = [];
        for (let i = 0; i < decodImg.length; i++) {
          array.push(decodImg.charCodeAt(i));
        }

        const file = new Blob([new Uint8Array(array)], { type: "image/png" });
        const fileName = "canvas_img_" + new Date().getMilliseconds() + ".png";
        const formData = new FormData();
        formData.append("file", file,fileName);

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
    const response = await saveBouquet(bouquetImageData);
    console.log(response);
  };
  const handleArrange = (state: boolean) => {
    setFinish(state);
    setWindowHeight(window.innerHeight * 0.35);
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
        position: "relative",
        backgroundColor: "#FFFAFA",
        height: height,
        minHeight: "100vh",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box sx={{ position: "absolute", top: "2%" }}>
        <Header page="main"></Header>
      </Box>
      <BouquetCheckModal
        bouquetImage={bouquetImage}
        handleCheckModal={handleCheckModal}
        checkModal={checkModal}
        handleComplete={handleComplete}
      ></BouquetCheckModal>
      <Box>
        <FlowerArrangeText handleSaveImg={handleSaveImg}></FlowerArrangeText>
      </Box>
      <Box
        id="img"
        sx={{
          position: "absolute",
          width: "100%",
          height: "80%",
          top: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          // id="img"
          sx={{
            position: "absolute",
            width: "100%",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "85%",
              height: "90%",
            }}
          >
            <img
              src={wrapInfo.wrapBackImage}
              style={{
                borderRadius: "200px",
                height: "100%",
                width: "100%",
              }}
            ></img>
          </Box>
          <Box
            sx={{
              position: "absolute",
              width: "80%",
              height: "80%",
            }}
          >
            <img
              src={flowerInfo.flowerImage}
              style={{
                borderRadius: "200px",
                height: "100%",
                width: "100%",
              }}
            ></img>
          </Box>
          <Box
            sx={{
              position: "absolute",
              width: "85%",
              height: "90%",
            }}
          >
            <img
              src={wrapInfo.wrapFrontImage}
              style={{
                borderRadius: "200px",
                height: "100%",
                width: "100%",
              }}
            ></img>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "53%",
              width: "30%",
              height: "30%",
            }}
          >
            <img
              src={decoInfo.decoImage}
              style={{
                borderRadius: "200px",
                height: "100%",
                width: "100%",
              }}
            ></img>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#EFDFBF",
            position: "absolute",
            top: "48%",
            width: "90%",
            height: "18%",
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
            justifyContent: "center",
          }}
        >
          <Move finish={finish}></Move>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            top: "70%",
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            variant="contained"
            size="small"
            style={{
              ...btnStyle,
            }}
            onClick={(e) => {
              handleArrange(true);
            }}
          >
            <Typography> 배치 완료</Typography>
          </Button>
        </Box>
      </Box>
      <Toast />
    </Box>
  );
}

export const btnStyle = {
  backgroundColor: "#FFE0E0",
  color: "#3A1D1D",
  fontFamily: "JuliusSansOne",
  borderRadius: "5",
  width: "40%",
  height: "auto",
};

export default Arrange;
