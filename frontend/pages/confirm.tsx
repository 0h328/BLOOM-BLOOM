import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../components/common/Header";
import { useRouter } from "next/router";
import BouquetImg from "../components/present/BouquetImg";
import ConfirmBtn from "../components/button/ConfirmPageBtn";
import MessageInputModal from "../components/modal/MessageInputModal";
import { useRecoilState } from "recoil";
import { confirmBouquetState, presentBouquetState } from "../states/states";
function Confirm() {
  const router = useRouter();
  const [confirmBouquet, setConfirmBouquet] =
    useRecoilState(confirmBouquetState);
  const [presentBouquet, setPresentBouquet] =
    useRecoilState(presentBouquetState);
  const [messageModal, setMessageModal] = useState<boolean>(false);
  const bouquetImage = "/img/wrapIvory.png";
  const handleMessageModal = (state: boolean) => {
    setMessageModal(state);
  };
  const openMessageModal = () => {
    setMessageModal(true);
  };
  const closeMessageModal = () => {
    setMessageModal(false);
  };
  const handleRoute = (e: any) => {
    e.preventDefault();
    router.push("/order");
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
      <Box sx={{ position: "absolute", top: "65%" }}>
        <Box sx={{ margin: "5% 0% 8% 0%" }}>
          <ConfirmBtn
            click={(e: any) => handleMessageModal(e)}
            title="메시지 카드 작성하기"
            text=" * 메시지 카드 작성 후, 카카오톡으로 공유할 수 있습니다."
          ></ConfirmBtn>
        </Box>
        <Box sx={{ margin: "5% 0% 8% 0%" }}>
          <ConfirmBtn
            click={(e: any) => handleRoute(e)}
            title="주문하기"
            text="* 원하는 꽃집에 꽃다발을 주문할 수 있습니다."
          ></ConfirmBtn>
        </Box>
      </Box>
    </Box>
  );
}

export default Confirm;
