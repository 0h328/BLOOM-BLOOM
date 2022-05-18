import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/common/Header";
import { useRouter } from "next/router";
import BouquetImg from "../components/present/BouquetImg";
import ConfirmBtn from "../components/button/ConfirmPageBtn";
import MessageInputModal from "../components/modal/MessageInputModal";
import { useRecoilState } from "recoil";
import { confirmBouquetState, presentBouquetState } from "../states/states";
import CommonButton from "../components/common/CommonButton";
import { messageStoredState } from "../states/states";

function Confirm() {
  const router = useRouter();
  const [confirmBouquet, setConfirmBouquet] =
    useRecoilState(confirmBouquetState);
  const [presentBouquet, setPresentBouquet] =
    useRecoilState(presentBouquetState);
  const [messageModal, setMessageModal] = useState<boolean>(false);
  const [messageStored, setMessageStored] = useRecoilState(messageStoredState);
  const bouquetImage = "/img/wrapIvory.png";
  const handleMessageModal = (state: boolean) => {
    setMessageStored(false);
    setMessageModal(state);
  };
  const openMessageModal = () => {
    setMessageModal(true);
  };
  const closeMessageModal = () => {
    setMessageModal(false);
  };
  const handleRoute = () => {
    // e.preventDefault();
    var bouquetSeq = presentBouquet.presentBouquetSeq;
    router.push('/ordermap/?bouquetSeq='+bouquetSeq,'/ordermap');
  };
  const handleIsStored = (state: boolean) => {
    // setIsStored(state);
    setMessageStored(state);
  };
  console.log(presentBouquet);
  return (
    <Box
      sx={{
        mx: "auto",
        width: 420,
        position: "relative",
        backgroundColor: "#FFFAFA",
        height: "100vh",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ position: "absolute", top: "2%" }}>
        <Header></Header>
      </Box>
      <MessageInputModal
        messageModal={messageModal}
        handleMessageModal={handleMessageModal}
        handleIsStored={handleIsStored}
      ></MessageInputModal>
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          maxHeight: "50%",
          height: "45%",
        }}
      >
        <BouquetImg bouquetImage={confirmBouquet}></BouquetImg>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "65%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CommonButton
          icon={"📜"}
          text={"메세지와 함께 공유하기"}
          backgroundColor={"#EFDFBF"}
          handleBtn={() => openMessageModal()}
        ></CommonButton>
        <Typography
          sx={{
            fontFamily: "OneMobileLight",
            fontSize: "0.8rem",
            mb: "20px",
            mt: "5px",
            width: 260,
          }}
        >
          * 메시지 카드 작성 후, 공유할 수 있습니다.
        </Typography>
        {/* <ConfirmBtn
            click={() => handleMessageModal()}
            title="메세지와 함께 공유하기"
            text=" * 메시지 카드 작성 후, 카카오톡으로 공유할 수 있습니다."
          ></ConfirmBtn> */}
        <CommonButton
          icon={"🌹"}
          text={"꽃집에 주문하기"}
          backgroundColor={"#FFE0E0"}
          handleBtn={handleRoute}
        ></CommonButton>
        <Typography
          sx={{
            fontFamily: "OneMobileLight",
            fontSize: "0.8rem",
            mb: "20px",
            mt: "5px",
            width: 260,
          }}
        >
          * 꽃집에 꽃다발을 주문할 수 있습니다.
        </Typography>
        {/* <ConfirmBtn
            click={() => handleRoute()}
            title="주문하기"
            text="* 원하는 꽃집에 꽃다발을 주문할 수 있습니다."
          ></ConfirmBtn> */}
      </Box>
    </Box>
  );
}

export default Confirm;
