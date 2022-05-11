import React, { useState, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "../components/common/Header";
import Move from "../components/move/Move";
import FlowerArrangeText from "../components/Choose/FlowerArrangeText";
import Test from "../components/move/Test";
import BouquetCheckModal from "../components/modal/BouquetCheckModal";
import html2canvas from "html2canvas";
import { wrapState, decoState, flowerState } from "../states/states";
import { useRecoilState } from "recoil";
function Arrange() {
  const [finish, setFinish] = useState<boolean>(false);
  const [bouquetImage, setBouquetImage] = useState<string>();
  const [checkModal, setCheckModal] = useState<boolean>();
  const [wrapInfo, setWrapInfo] = useRecoilState(wrapState);
  const [decoInfo, setDecoInfo] = useRecoilState(decoState);
  const [flowerInfo, setFlowerInfo] = useRecoilState(flowerState);
  const handleCheckModal = (state: boolean) => {
    setFinish(state);
    // ongotpointercapture = () => {
    //   html2canvas(document.querySelector("#img"), {
    //     backgroundColor: "#FFFAFA",
    //   }).then((canvas) => {
    //     const imgDataUrl = canvas.toDataURL("image/jpeg");
    //     const blobBin = atob(imgDataUrl.split(",")[1]);
    //     const array = [];
    //     for (var i = 0; i < blobBin.length; i++) {
    //       array.push(blobBin.charCodeAt(i));
    //     }
    //     const file = new Blob([new Uint8Array(array)], { type: "image/png" });
    //     var formdata = new FormData(); // formData 생성
    //     formdata.append("file", file); // file data 추가
    //     onSave(canvas.toDataURL("image/jpeg"), "present.jpeg");
    //     console.log(file);
    //     setBouquetImage(canvas.toDataURL("image/jpeg"));
    //   });
    // };
    setCheckModal(state);
  };
  const onSave = (uri: string, filename: string) => {
    let link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box
      sx={{
        mx: "auto",
        width: 420,
        position: "relative",
        backgroundColor: "#FFFAFA",
        height: "100vh",
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
      <Box
        id="img"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "13%",
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
              width: "75%",
              height: "100%",
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
              width: "75%",
              height: "90%",
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
              width: "75%",
              height: "100%",
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
              top: "60%",
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
          // data-html2canvas-ignore="true"
          sx={{
            position: "absolute",
            top: "52%",
            width: "90%",
            height: "18%",
            backgroundColor: "#EFDFBF",
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <Move finish={finish}></Move>
        </Box>
      </Box>
      <Button
        variant="contained"
        size="small"
        style={{
          position: "absolute",
          backgroundColor: "#FFE0E0",
          color: "#3A1D1D",
          fontFamily: "JuliusSansOne",
          borderRadius: "5",
          width: 280,
          height: 45,
          top: "85%",
        }}
        onClick={(e) => {
          handleCheckModal(true);
        }}
      >
        <Typography>완료</Typography>
      </Button>
    </Box>
  );
}

export default Arrange;
