import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../components/common/Header";
import { useRouter } from "next/router";
import BouquetImg from "../components/present/BouquetImg";
import ConfirmBtn from "../components/Button/ConfirmPageBtn";
import MessageInputModal from "../components/modal/MessageInputModal";
function Confirm() {
  const router = useRouter();
  const [messageModal, setMessageModal] = useState<boolean>(false);

  const bouquetImage = "/img/bouquet2.png";
  const handleMessageModal = (e: any) => {
    openMessageModal();
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
  return (
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
      <Box sx={{ position: "absolute", top: "30px" }}>
        <Header></Header>
      </Box>
      <MessageInputModal
        openMessageModal={openMessageModal}
        closeMessageModal={closeMessageModal}
        messageModal={messageModal}
      ></MessageInputModal>
      <Box sx={{ position: "absolute", top: "130px", left: "30px" }}>
        <BouquetImg bouquetImage={bouquetImage}></BouquetImg>
      </Box>
      <Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "310px",
            left: "45px",
            alignItems: "center",
          }}
        >
          <ConfirmBtn
            click={(e: any) => handleMessageModal(e)}
            title="메시지 카드 작성하기"
            text=" * 메시지 카드 작성 후, 카카오톡으로 공유할 수 있습니다."
          ></ConfirmBtn>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "200px",
            left: "45px",
            alignItems: "center",
          }}
        >
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
