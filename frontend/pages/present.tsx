import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import MessageCard from "../components/present/MessageCard";
import Header from "../components/Header";
import ImgDownloadBtn from "../components/present/ImgDownloadBtn";
import html2canvas from "html2canvas";
import BouquetImg from "../components/present/BouquetImg";

function Present() {
  const presentData = {
    bouquetImage: "/img/bouquet1.png",
    presentSender: "김정혁",
    presentDesc: `좋은 옷 있으면 생각날 때 입고
  좋은 음식 있으면 먹고 싶을 때 먹고
  좋은 음악 있으면 듣고 싶을 때 들으세요
  더구나 좋은 사람 있으면
  마음 속에 숨겨두지 말고
  마음껏 좋아하고 마음껏 그리워하세요`,
  };

  const [image, setImage] = useState<string>("");

  const onCapture = () => {
    console.log("ca[pture");
    html2canvas(document.getElementById("img"), {
      backgroundColor: "#FFC0D0",
    }).then((canvas) => {
      onSave(canvas.toDataURL("image/jpeg"), "present.jpeg");
    });
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
    <>
      <Box
        sx={{
          mx: "auto",
          width: 420,
          position: "relative",
          backgroundColor: "#FFFAFA",
          height: "840px",
          minHeight: "100vh",
        }}
      >
        <Box
          id="img"
          sx={{ width: 420, backgroundColor: "#FFFAFA", height: "840px" }}
        >
          <Typography
            // id="img"
            sx={{
              position: "absolute",
              top: "115px",
              left: "35px",
              fontFamily: "JuliusSansOne",
              fontSize: "18px",
            }}
          >
            from . {presentData.presentSender}
          </Typography>
          <Header></Header>
          <Box sx={{ position: "absolute", top: "150px", left: "30px" }}>
            <BouquetImg bouquetImage={presentData.bouquetImage}></BouquetImg>
            <MessageCard message={presentData.presentDesc}></MessageCard>
          </Box>
        </Box>
        <ImgDownloadBtn onCapture={onCapture}></ImgDownloadBtn>
      </Box>
    </>
  );
}

export default Present;
