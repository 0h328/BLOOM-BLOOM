import React, { ChangeEvent, useState, useEffect, useRef } from "react";
import { Box, TextareaAutosize, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BouquetImg from "../present/BouquetImg";
import KakaoBtn from "../button/KakaoBtn";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { presentBouquetState } from "../../states/states";
import { savePresent } from "../apis/bouquetApi";
import KakaoMessage from "../kakaoApi/KakaoMessage";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "material-react-toastify";
import Toast from "../../components/common/Toast";
import { useBeforeunload } from "react-beforeunload";
import {
  Button,
  Snackbar,
  IconButton,
  Alert,
  Slide,
  SlideProps,
} from "@mui/material";
import { BASE_URL } from "../apis/config";
type TransitionProps = Omit<SlideProps, "direction">;

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}
interface meesageModalProps {
  openMessageModal?: () => void;
  closeMessageModal?: () => void;
  handleMessageModal?: (state: boolean) => void;
  messageModal?: boolean;
  isStored?: boolean;
  handleIsStored?: (state: boolean) => void;
}
function MessageInputModal({
  openMessageModal,
  closeMessageModal,
  handleMessageModal,
  messageModal,
  isStored,
  handleIsStored,
}: meesageModalProps) {
  const router = useRouter();
  const imageRef = useRef(null);
  const [content, setContent] = useState<string>("");
  const [textLength, setTextLength] = useState<number>();
  const [presentBouquet, setPresentBouquet] =
    useRecoilState(presentBouquetState);
  const [uuid, setUuid] = useState<string>("");
  // const [isStored, setIsStored] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [bouquetImage, setBouquetImage] = useState<string>("");
  const [offsetHeight, setOffsetHeight] = useState<number>();
  const handleStoreButtonClick = async () => {
    // 1. requeset를 만든다.
    const body = {
      bouquetSeq: presentBouquet.presentBouquetSeq,
      presentDesc: content,
    };
    // 2. 서버로 요청을 보낸다.
    const response = await savePresent(body);
    // 3. 반환된 값을 받아서 uuid에 저장한다.
    setUuid(response.data.data.uuid);
    // 4. 저장이 되었다면 isStored도 true로 상태 변경을 진행한다.
    // setIsStored(true);
    handleIsStored(true);
  };

  const handleCopyButton = () => {
    setOpen(true);
  };

  const handleCloseButton = () => {
    // setIsStored(false);
    handleIsStored(false);
    setOpen(false);
  };
  useBeforeunload((e: any) => {
    e.preventDefault;
    console.log("새로고침?");
    router.push("/madelist");
  });

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseButton}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setTextLength(text.length);
    if (textLength > 150) {
      toast.error("⚠150자까지 입력가능합니다");
    } else {
      setContent(`${text}`);
    }
    console.log(textLength);
  };
  const handleShare = async () => {
    const body = {
      bouquetSeq: presentBouquet.presentBouquetSeq,
      presentDesc: content,
    };

    const response = await savePresent(body);
    console.log(response.data.data.uuid);

    const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
    if (window.Kakao)
      try {
        window.Kakao.init(KAKAO_KEY);
      } catch (e) {}

    const linkcallback = () => {
      //공유하기를 성공하면 router.back
      router.back();
    };

    //메시지 내용 보이게 해도 되고 안해도 되고
    window.Kakao.Link.sendScrap({
      requestUrl: "https://bloombloom.kro.kr", // 페이지 url (선물 결과 페이지가 보여야한다.) path는 따로 설정해주면됨
      templateId: 76396, // 메시지템플릿 번호
      templateArgs: {
        THUMB:
          "https://cdn.discordapp.com/attachments/968011285998469190/970608815470936084/unknown.png",
        RANDOM: response.data.data.uuid, // 썸네일 주소
      },
      callback: linkcallback,
    });
  };
  const handleRoute = () => {
    router.back();
  };
  useEffect(() => {
    if (imageRef !== null && imageRef !== undefined) {
      if (imageRef.current !== null) {
        console.log(imageRef.current.offsetHeight);
        setOffsetHeight(imageRef.current.offsetHeight);
      }
    }
  });
  useEffect(() => {
    console.log(offsetHeight);
  }, [offsetHeight]);
  useEffect(() => {
    if (messageModal) setContent("");
  }, [messageModal]);
  return (
    <>
      {messageModal ? (
        <Box
          sx={{
            position: "absolute",
            width: "420px",
            height: "100%",
            backgroundColor: "rgb(31 31 31 / 33%)",
            zIndex: 900,
          }}
        >
          <Toast />
          <Box
            sx={{
              mt: "15%",
              width: "90%",
              height: "80%",
              backgroundColor: "#FFFAFA",
              zIndex: 1300,
              borderRadius: "10px",
              // border: "1px solid rgba(0, 0, 0, 0.25)",
              boxShadow: "6px 6px 4px rgba(0, 0, 0, 0.25)",
              mx: "auto",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <CloseIcon
                sx={{
                  margin: "1rem 1rem 0rem 1rem",
                  color: "",
                  "&:hover": { cursor: "pointer" },
                }}
                onClick={() => handleMessageModal(false)}
              />
            </Box>
            {isStored ? (
              <Typography
                sx={{
                  height: "5%",
                  fontSize: "15px",
                  fontFamily: "OneMobileLight",
                  fontWeight: "bold",
                  mx: "auto",
                  textAlign: "center",
                }}
              >
                꽃다발을 공유해보세요
              </Typography>
            ) : (
              <Typography
                sx={{
                  height: "5%",
                  fontSize: "15px",
                  fontFamily: "OneMobileLight",
                  fontWeight: "bold",
                  mx: "auto",
                  textAlign: "center",
                }}
              >
                꽃다발과 함께 <br />
                전달하고 싶은 이야기를 적어주세요
              </Typography>
            )}
            <Box
              sx={{
                mt: offsetHeight > 250 ? null : "5%",
                width: "80%",
                mx: "auto",
              }}
            >
              <Box sx={{}}>
                <img
                  ref={imageRef}
                  id="img"
                  src={presentBouquet.presentBouquetImage}
                  alt="꽃다발"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </Box>
            </Box>
            <Box
              sx={{
                height: "34%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {isStored ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      fontFamily: "OneMobileLight",
                      textAlign: "center",
                    }}
                  >
                    꽃다발과 이야기를 성공적으로 담았습니다
                    <br />
                    링크공유 또는 카카오톡 공유로 마음을 전달해주세요
                  </Typography>
                  <CopyToClipboard
                    text={BASE_URL + "present/" + uuid}
                    onCopy={handleCopyButton}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        alignItems: "center",
                        mt: "5%",
                        mb: "5%",
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
                    >
                      <Typography
                        component="div"
                        sx={{
                          width: "25%",
                          fontWeight: "600",
                          fontSize: "15px",
                          fontFamily: "OneMobileLight",
                          color: "#000",
                        }}
                      >
                        🔗
                      </Typography>
                      <Typography
                        component="div"
                        sx={{
                          width: "50%",
                          fontWeight: "600",
                          fontSize: "15px",
                          fontFamily: "OneMobileLight",
                          color: "#000",
                        }}
                      >
                        링크복사
                      </Typography>
                    </Button>
                  </CopyToClipboard>
                  <KakaoBtn
                    handleBtn={handleShare}
                    title="카카오톡으로 공유하기"
                  ></KakaoBtn>
                </Box>
              ) : (
                <>
                  <textarea
                    aria-label="minimum height"
                    id="content"
                    // disabled={textLength > 150}
                    value={content}
                    // minRows={}
                    // maxRows={10}
                    placeholder="이야기를 전달하세요"
                    style={{
                      width: "90%",
                      height: offsetHeight > 250 ? "460%" : "90%",
                      fontSize: "0.85rem",
                      fontFamily: "OneMobileLight",
                      border: "1px solid rgba(109, 107, 107, 0.4)",
                      resize: "none",
                      padding: "1rem",
                      backgroundColor: "#EFDFBF",
                      position: offsetHeight > 250 ? "relative" : null,
                      top:
                        offsetHeight > 250 ? `${260 - offsetHeight}px` : null,
                    }}
                    onChange={(event) => handleInput(event)}
                  />
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      backgroundColor: "#FFE0E0",
                      color: "#000",
                      fontFamily: "OneMobileLight",
                      borderRadius: "5",
                      width: 260,
                      height: 43,
                      alignItems: "center",
                      position: offsetHeight > 250 ? "relative" : null,
                      bottom:
                        offsetHeight > 250 ? `${offsetHeight - 270}px` : null,
                      marginTop: offsetHeight > 250 ? null : "10px",
                    }}
                    onClick={handleStoreButtonClick}
                  >
                    <Typography
                      component="div"
                      sx={{
                        width: "25%",
                        fontWeight: "600",
                        fontSize: "15px",
                        fontFamily: "OneMobileLight",
                        color: "#000",
                      }}
                    >
                      📫
                    </Typography>
                    <Typography
                      component="div"
                      sx={{
                        width: "65%",
                        fontWeight: "600",
                        fontSize: "15px",
                        fontFamily: "OneMobileLight",
                        color: "#000",
                      }}
                    >
                      이야기 담아 보내기
                    </Typography>
                  </Button>
                </>
              )}
            </Box>
          </Box>
          <Snackbar
            open={open}
            autoHideDuration={1200}
            onClose={handleCloseButton}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            TransitionComponent={TransitionDown}
          >
            <Alert
              onClose={handleCloseButton}
              severity="success"
              sx={{ width: "100%" }}
            >
              링크가 복사되었습니다. 🎉
            </Alert>
          </Snackbar>
        </Box>
      ) : null}
    </>
  );
}
export default MessageInputModal;
