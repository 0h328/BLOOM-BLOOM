import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import MessageCard from "../../components/present/MessageCard";
import Header from "../../components/common/Header";
import ImgDownloadBtn from "../../components/present/ImgDownloadBtn";
import html2canvas from "html2canvas";
import BouquetImg from "../../components/present/BouquetImg";
import { useRouter } from "next/router";
import { getPresent } from "../../components/apis/bouquetApi";

function Present() {
  //   const presentData = {
  //     bouquetImage: "/img/bouquet1.png",
  //     presentSender: "김정혁",
  //     presentDesc: `좋은 옷 있으면 생각날 때 입고
  //   좋은 음식 있으면 먹고 싶을 때 먹고
  //   좋은 음악 있으면 듣고 싶을 때 들으세요
  //   더구나 좋은 사람 있으면
  //   마음 속에 숨겨두지 말고
  //   마음껏 좋아하고 마음껏 그리워하세요`,
  //   };
  const router = useRouter();
  const [image, setImage] = useState<string>("");
  const [code, setCode] = useState<any>([]);
  const [presentData, setPresentData] = useState<{
    bouquetImage: string;
    presentSender: string;
    presentDesc: string;
  }>({
    bouquetImage: "",
    presentSender: "",
    presentDesc: "",
  });
  const onCapture = () => {
    console.log("capture");
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
  const handlePresent = async (code: string) => {
    const response = await getPresent(code);
    setPresentData({ ...response.data.data });
  };

  useEffect(() => {
    if (!router.isReady) return;
    setCode(router.query.code);
  }, [router.isReady]);

  useEffect(() => {
    if (code !== "" && code !== undefined && code.length) {
      handlePresent(code);
    }
  }, [code]);

  return (
    <>
      {code ? (
        <Box
          id="img"
          sx={{
            mx: "auto",
            width: 420,
            position: "relative",
            backgroundColor: "#FFFAFA",
            height: "840px",
            minHeight: "100vh",
          }}
        >
          <Box sx={{ width: 420, backgroundColor: "#FFFAFA" }}>
            <Box sx={{ pt: "2rem" }}>
              <Header></Header>
            </Box>
            <Box
              sx={{
                pt: "3rem",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "JuliusSansOne",
                  fontSize: "18px",
                  margin: "1rem 0rem 1rem 0rem",
                }}
              >
                from . {presentData.presentSender}
              </Typography>
              <Box>
                <BouquetImg
                  bouquetImage={presentData.bouquetImage}
                ></BouquetImg>
              </Box>
              <Box sx={{ mb: "1rem" }}>
                <MessageCard message={presentData.presentDesc}></MessageCard>
              </Box>
              <ImgDownloadBtn
                data-html2canvas-ignore="true"
                onCapture={onCapture}
              ></ImgDownloadBtn>
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export default Present;
