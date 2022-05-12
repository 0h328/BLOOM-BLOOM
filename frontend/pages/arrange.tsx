import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "../components/common/Header";
import Move from "../components/move/Move";
import FlowerArrangeText from "../components/Choose/FlowerArrangeText";
import Test from "../components/move/Test";
import BouquetCheckModal from "../components/modal/BouquetCheckModal";
import html2canvas from "html2canvas";
import { wrapState, decoState, flowerState } from "../states/states";
import Toast from "../components/common/Toast";
import { toast } from "material-react-toastify";
import { useRecoilState } from "recoil";
function Arrange() {
  const [finish, setFinish] = useState<boolean>(false);
  const [bouquetImage, setBouquetImage] = useState<string>();
  const [checkModal, setCheckModal] = useState<boolean>();
  const [wrapInfo, setWrapInfo] = useRecoilState(wrapState);
  const [decoInfo, setDecoInfo] = useRecoilState(decoState);
  const [flowerInfo, setFlowerInfo] = useRecoilState(flowerState);
  const [windowHeight, setWindowHeight] = useState<number>();
  const [height, setHeight] = useState<number>();
  const handleSaveImg = () => {
    if (finish) {
      html2canvas(document.querySelector("#img"), {
        backgroundColor: "#FFFAFA",
        foreignObjectRendering: false,
        useCORS: true,
        height: windowHeight,
      }).then((canvas) => {
        setBouquetImage(canvas.toDataURL("image/jpeg"));
        // onSave(canvas.toDataURL("image/jpeg"), "present.jpeg");
        // console.log(bouquetImage);
        handleCheckModal(true);
      });
    } else {
      toast.error("📣배치완료 버튼을 눌러 배치를 완료해주세요");
    }
  };
  const onSave = (uri: string, filename: string) => {
    let link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };
  const handleArrange = (state: boolean) => {
    setFinish(state);
    setWindowHeight(window.innerHeight * 0.35);
  };
  const handleCheckModal = (state: boolean) => {
    setCheckModal(state);
    setFinish(state);
  };
  // const handleResize = () => {
  //   setWindowHeight(window.innerHeight * 0.45);
  //   // console.log(
  //   //   `화면 사이즈 x : ${window.innerWidth}, y : ${window.innerHeight}`
  //   // );
  // };
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
