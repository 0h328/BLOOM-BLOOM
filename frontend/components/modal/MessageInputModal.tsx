import React, { ChangeEvent, useState } from "react";
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
  messageModal?: boolean;
  share?: boolean;
}
function MessageInputModal({
  openMessageModal,
  closeMessageModal,
  messageModal,
  share,
}: meesageModalProps) {
  const router = useRouter();
  const [content, setContent] = useState<string>("");
  const [presentBouquet, setPresentBouquet] =
    useRecoilState(presentBouquetState);
  const [uuid, setUuid] = useState<string>("");
  const [isStored, setIsStored] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleStoreButtonClick = async () => {
    // 1. requeset를 만든다.
    const body = {
      bouquetSeq: 7,
      presentDesc: content,
    };
    // 2. 서버로 요청을 보낸다.
    const response = await savePresent(body);
    // 3. 반환된 값을 받아서 uuid에 저장한다.
    setUuid(response.data.data.uuid);
    // 4. 저장이 되었다면 isStored도 true로 상태 변경을 진행한다.
    setIsStored(true);
  };

  const handleCopyButton = () => {
    setOpen(true);
  };

  const handleCloseButton = () => {
    setOpen(false);
  };

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
    setContent(`${text}`);
  };
  const handleShare = async () => {
    const body = {
      bouquetSeq: 7,
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
  return (
    <>
      {messageModal ? (
        <Box
          sx={{
            position: "absolute",
            width: "420px",
            height: "100%",
            backgroundColor: "rgba(255, 250, 250, 75%)",
            zIndex: 900,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "45%",
              backgroundColor: "#FFFAFA",
              zIndex: 1300,
              borderRadius: "10px",
              top: "20%",
              display: "flex",
              justifyContent: "center",
              border: "1rem #ffff",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                fontSize: "15px",
                fontFamily: "JuliusSansOne",
                fontWeight: "bold",
                top: "3%",
              }}
            >
              메세지 내용을 입력해주세요
            </Typography>
            <CloseIcon
              sx={{
                position: "absolute",
                top: "20px",
                left: "90%",
                color: "",
                "&:hover": { cursor: "pointer" },
              }}
              onClick={share ? handleRoute : closeMessageModal}
            />
            <Box
              sx={{
                width: "100%",
                height: "200px",
                top: "15%",
                position: "relative",
                display: "flex",
                margin: "0rem 0.5rem 0rem 0.5rem",
              }}
            >
              <TextareaAutosize
                aria-label="minimum height"
                id="content"
                value={content}
                minRows={3}
                maxRows={10}
                placeholder="메세지 내용을 입력해주세요"
                style={{
                  fontSize: "1rem",
                  fontFamily: "JuliusSansOne",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#FFFAFA",
                  border: "1px solid rgba(109, 107, 107, 0.4)",
                  resize: "none",
                  margin: "0rem 0.6rem 0rem 0rem",
                  padding: "1rem",
                  // borderRadius: "10px",
                }}
                onChange={(event) => handleInput(event)}
              />
              <Box
                sx={{
                  width: "50%",
                  height: "100%",
                }}
              >
                <BouquetImg
                  bouquetImage={presentBouquet}
                  modal={true}
                ></BouquetImg>
              </Box>
            </Box>
            {isStored ? (
              <div>
                <Typography
                  sx={{
                    position: "absolute",
                    fontSize: "15px",
                    fontWeight: "bold",
                    fontFamily: "JuliusSansOne",
                    top: "70%",
                    left: "15%",
                  }}
                >
                  완성된 메시지 카드와 꽃다발을 전달해보세요
                  <CopyToClipboard
                    text={BASE_URL + "/present/" + uuid}
                    onCopy={handleCopyButton}
                  >
                    <Button>🔗링크복사</Button>
                  </CopyToClipboard>
                </Typography>
                <Box sx={{ position: "absolute", top: "80%", left: "70px" }}>
                  <KakaoBtn
                    handleBtn={handleShare}
                    title="카카오톡으로 공유하기"
                  ></KakaoBtn>
                </Box>
              </div>
            ) : (
              <Box sx={{ position: "absolute", top: "80%", left: "70px" }}>
                <Button
                  sx={{
                    width: 156,
                    height: 36,
                    backgroundColor: "#FFE0E0",
                    color: "#000000",
                    fontFamily: "JuliusSansOne",
                  }}
                  onClick={handleStoreButtonClick}
                >
                  저장하기
                </Button>
              </Box>
            )}
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
