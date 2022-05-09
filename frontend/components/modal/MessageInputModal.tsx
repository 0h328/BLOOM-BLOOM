import React, { ChangeEvent, useState } from "react";
import { Box, TextareaAutosize, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BouquetImg from "../present/BouquetImg";
import KakaoBtn from "../button/KakaoBtn";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { presentBouquetState } from "../../states/states";
import { savePresent } from "../apis/bouquetApi";

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
  const [content, setContent] = useState<string>();
  const [presentBouquet, setPresentBouquet] =
    useRecoilState(presentBouquetState);
  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setContent(`${text}`);
  };
  const handleShare = async () => {
    const body = {
      bouquetSeq: presentBouquet,
      presentDesc: content,
    };

    const response = await savePresent(body);
    const uuid = response.data.data.uuid;
    console.log(response);
  };
  const handleRoute = () => {
    router.back();
  };
  const bouquetImage = "/img/bouquet3.png";
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
              backgroundColor: "#FFE0E0",
              zIndex: 1300,
              borderRadius: "10px",
              top: "20%",
              display: "flex",
              justifyContent: "center",
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
                height: "50%",
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
                  // marginBottom: "-1rem",
                  // marginLeft: "0.6rem",
                  padding: "1rem",
                  borderRadius: "10px",
                }}
                onChange={(event) => handleInput(event)}
              />
              <Box
                sx={{
                  width: "50%",
                  height: "100%",
                }}
              >
                <BouquetImg bouquetImage={bouquetImage}></BouquetImg>
              </Box>
            </Box>
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
            </Typography>
            <Box sx={{ position: "absolute", top: "80%", left: "70px" }}>
              <KakaoBtn
                handleBtn={handleShare}
                title="카카오톡으로 공유하기"
              ></KakaoBtn>
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}
export default MessageInputModal;
