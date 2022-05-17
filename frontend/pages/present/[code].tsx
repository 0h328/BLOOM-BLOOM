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

 
  const gotoOtherBrowser = () => { 
    Swal.fire({
      title:"<style>.swal2-popup{font-family: OneMobileLight}  .cursor_{cursor: pointer} </style>카카오에서 바로 들어오셨나요?",
      html: '<b>다른 브라우저</b>를 이용하시면 저희 <strong style="color:#f1bfbf;">bloombloom</strong>을 보다 편하게 이용하실 수 있습니다.' 
        + '<p><b><div id="clipboard"><div class="cursor_">'
        +'📬링크 복사'
        +'</div></div></b></p> ',
      icon: 'question',
      showConfirmButton:false,
      confirmButtonText: '📬링크 복사',
    }).then(() =>{
      Swal.close()
    })
    document.getElementById('clipboard').onclick = function () {
      navigator.clipboard.writeText("https://bloombloom.kro.kr/");
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: '링크가 복사되었습니다. 🎉'
      })
    };
  }
  const doCopy = () => {
    console.log("안녕")
    navigator.clipboard.writeText(BASE_URL)
  }
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
    console.log(response.data);
    setPresentData({ ...response.data.data });
  };
  useEffect(() => {
    const isKakao = navigator.userAgent.match("KAKAOTALK")
    console.log(navigator.userAgent)
    setKakaoBrowser(Boolean(isKakao))
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
            width: windowHeight > 480 ? 420 : "100vw",
            position: "relative",
            height: windowHeight > 480 ? 840 : "100vh",
            minHeight: "100vh",
            overflow: "hidden",
            backgroundColor: "#FFFAFA",
          }}
        >
          <Box id="img">
            <Box sx={{ pt: "2rem" }}>
              <Header></Header>
            </Box>
            <Box
              sx={{
                pt: "1rem",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "ONEMobileLight",
                  fontSize: "18px",
                  margin: "0rem 0rem 1rem 0rem",
                }}
              >
                from . {presentData.presentSender}
              </Typography>
              <Box sx={{ width: "80%" }}>
                <BouquetImg
                  bouquetImage={presentData.bouquetImage}
                ></BouquetImg>
              </Box>
              <Box sx={{ width: "80%", height: "30%", mb: "1rem" }}>
                <MessageCard message={presentData.presentDesc}></MessageCard>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
              </Button>{" "}{
                !isKakaoBrowser?
                <Link href="/" passHref>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      alignItems: "center",
                      mt: "5%",
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
                  </Link> :
                  
                   <Button
                     variant="contained"
                    size="small"
                    onClick={gotoOtherBrowser}
                     sx={{
                       alignItems: "center",
                       mt: "5%",
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
              }
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export default Present;
