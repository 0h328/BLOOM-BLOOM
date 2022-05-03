import React, { useState } from 'react';
import Header from "../components/common/Header";
import BouquetImg from "../components/present/BouquetImg";
import FlowerArrangeText from '../components/Choose/FlowerArrangeText';
import ConfirmBtn from "../components/Button/ConfirmPageBtn";
import DecoConfirmModal from "../components/modal/DecoConfirmModal";
import FlowerArrange from '../components/Bouquet/FlowerArrange';
import { Box } from '@mui/material';

export default function Arrange() {
  const [decoModal, setDecoModal] = useState<boolean>(false);

  const bouquetImage = "/img/bouquet2.png";

  const handleDecoModal = (e: any) => {
    openDecoModal();
  };
  const openDecoModal = () => {
    setDecoModal(true);
  }
  const closeDecoModal = () => {
    setDecoModal(false);
  }



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
      <DecoConfirmModal
        openDecoModal={openDecoModal}
        closeDecoModal={closeDecoModal}
        decoModal={decoModal}
      ></DecoConfirmModal>
      <FlowerArrangeText></FlowerArrangeText>
      <Box sx={{ position: "absolute", top: "150px", left: "30px" }}>
        <BouquetImg bouquetImage={bouquetImage}></BouquetImg>
      </Box>
      <Box sx={{ position: "absolute", top: "600px", left: "30px" }}>
        <FlowerArrange></FlowerArrange>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "100px",
          left: "45px",
          alignItems: "center",
        }}
      >
        <ConfirmBtn
          click={(e: any) => handleDecoModal(e)}
          title="완료"
          text=""
        ></ConfirmBtn>
      </Box>
    </Box>
  )
};