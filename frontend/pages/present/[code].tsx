import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, IconButton, Button } from "@mui/material";
import MessageCard from "../../components/present/MessageCard";
import Header from "../../components/common/Header";
import ImgDownloadBtn from "../../components/present/ImgDownloadBtn";
import html2canvas from "html2canvas";
import BouquetImg from "../../components/present/BouquetImg";
import { useRouter } from "next/router";
import { getPresent } from "../../components/apis/bouquetApi";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Link from "next/link";
import Swal from "sweetalert2";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BASE_URL } from "../../components/apis/config";

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
  const [windowHeight, setWindowHeight] = useState<number>();
  const [image, setImage] = useState<string>("");
  const [code, setCode] = useState<any>([]);
  const [isKakaoBrowser, setKakaoBrowser] = useState(false);
  const [presentData, setPresentData] = useState<{
    bouquetImage: string;
    presentSender: string;
    presentDesc: string;
  }>({
    bouquetImage: "",
    presentSender: "",
    presentDesc: "",
  });

  const copylink = async () => {
    var tmpTextarea = document.createElement("textarea");
    tmpTextarea.value = "https://bloombloom.kro.kr";

    document.body.appendChild(tmpTextarea);
    tmpTextarea.select();
    tmpTextarea.setSelectionRange(0, 9999); // 셀렉트 범위 설정

    document.execCommand("copy");
    document.body.removeChild(tmpTextarea);
  };

  const gotoOtherBrowser = () => {
    Swal.fire({
      title:
        '<style>.swal2-popup{font-family: OneMobileLight}  .cursor_{cursor: pointer} </style><span style="color: #FEE500;" >카카오</span>에서 <br/>바로 들어오셨나요?',
      html:
        '<b>다른 브라우저</b>를 이용하시면 저희 <strong style="color:#f1bfbf;">bloombloom</strong>을 보다 편하게 이용하실 수 있습니다.' +
        '<p><b><div id="clipboard" class="cursor_">' +
        "📬링크 복사" +
        "</div></b></p> ",
      icon: "question",
      showConfirmButton: false,
      confirmButtonText: "📬링크 복사",
    }).then(() => {
      Swal.close();
    });
    document.getElementById("clipboard").onclick = function () {
      copylink();
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "링크가 복사되었습니다. 🎉",
      }).then(() => {
        var _ua = window.navigator.userAgent;
        //alert(_ua.toLocaleLowerCase().indexOf("kakaotalk"))
        if (_ua.toLocaleLowerCase().indexOf("kakaotalk") > -1) {
          //alert("!")
          window.location.href = /iPad|iPhone|iPod/.test(_ua)
            ? "kakaoweb://closeBrowser"
            : "kakaotalk://inappbrowser/close";
        }
      });
    };
  };

  const onCapture = () => {
    console.log("capture");
    html2canvas(document.getElementById("img"), {
      backgroundColor: "#FFFAFA",
      proxy: "https://bloombloom.kro.kr/api/v1/proxy",
      allowTaint: false,
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
    const isKakao = navigator.userAgent.match("KAKAOTALK");
    console.log(navigator.userAgent);
    setKakaoBrowser(Boolean(isKakao));
    if (!router.isReady) return;
    setCode(router.query.code);
  }, [router.isReady]);

  useEffect(() => {
    if (code !== "" && code !== undefined && code.length) {
      handlePresent(code);
    }
  }, [code]);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);
  return (
    <>
      {code ? (
        <Box
          sx={{
            mx: "auto",
            width: 420,
            position: "relative",
            height: "100vh",
            overflow: "hidden",
            backgroundColor: "#FFFAFA",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            id="img"
            sx={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: "ONEMobileLight",
                  fontSize: 25,
                }}
              >
                BLOOM BLOOM
              </Typography>
            </Box>
            <Box
              sx={{
                height: "65vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box sx={{ height: "5vh" }}>
                <Typography
                  sx={{
                    fontFamily: "ONEMobileLight",
                    fontSize: "18px",
                    margin: "0rem 0rem 1rem 0rem",
                  }}
                >
                  from . {presentData.presentSender}
                </Typography>
              </Box>
              {presentData.bouquetImage === "" ? (
                <Box sx={{ height: "40vh" }}>
                  <Box>이미지 열심히 받아오는중</Box>
                </Box>
              ) : (
                <Box sx={{ height: "40vh" }}>
                  <BouquetImg
                    bouquetImage={presentData.bouquetImage}
                  ></BouquetImg>
                </Box>
              )}
              <Box sx={{ height: "25vh", width: "80%" }}>
                <MessageCard message={presentData.presentDesc}></MessageCard>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "20vh",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                alignItems: "center",
                mt: "1%",
              }}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                backgroundColor: "#BAD7DF",
                color: "#000",
                fontFamily: "OneMobileLight",
                borderRadius: "5",
                width: 260,
                height: 43,
              }}
              onClick={onCapture}
            >
              <Typography
                component="div"
                sx={{
                  width: "20%",
                  fontWeight: "600",
                  fontSize: "15px",
                  fontFamily: "OneMobileLight",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                📷
              </Typography>
              <Typography
                component="div"
                sx={{
                  width: "50%",
                  fontWeight: "600",
                  fontSize: "15px",
                  fontFamily: "OneMobileLight",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                이미지 저장하기
              </Typography>
            </Button>{" "}
            {!isKakaoBrowser ? (
              <Link href="/" passHref>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    alignItems: "center",
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    backgroundColor: "#FFE0E0",
                    color: "#000",
                    fontFamily: "OneMobileLight",
                    borderRadius: "5",
                    width: 260,
                    height: 43,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    component="div"
                    sx={{
                      width: "20%",
                      fontWeight: "600",
                      fontSize: "15px",
                      fontFamily: "OneMobileLight",
                      color: "#000",
                      textAlign: "center",
                    }}
                  >
                    🌸
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      width: "80%",
                      fontWeight: "600",
                      fontSize: "15px",
                      fontFamily: "OneMobileLight",
                      color: "#000",
                    }}
                  >
                    BloomBloom 이용하기
                  </Typography>
                </Button>
              </Link>
            ) : (
              <Button
                variant="contained"
                size="small"
                onClick={gotoOtherBrowser}
                sx={{
                  alignItems: "center",
                }}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  backgroundColor: "#FFE0E0",
                  color: "#000",
                  fontFamily: "OneMobileLight",
                  borderRadius: "5",
                  width: 260,
                  height: 43,
                  textAlign: "center",
                }}
              >
                <Typography
                  component="div"
                  sx={{
                    width: "20%",
                    fontWeight: "600",
                    fontSize: "15px",
                    fontFamily: "OneMobileLight",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  🌸
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    width: "80%",
                    fontWeight: "600",
                    fontSize: "15px",
                    fontFamily: "OneMobileLight",
                    color: "#000",
                  }}
                >
                  BloomBloom 이용하기
                </Typography>
              </Button>
            )}
          </Box>
        </Box>
      ) : (
        <Box>받아오는중</Box>
      )}
    </>
  );
}

export default Present;
