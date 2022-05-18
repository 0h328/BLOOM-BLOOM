import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/common/Header";
import FlowerImgList from "../components/main/FlowerImgList";
import BouquetDetailModal from "../components/modal/BouquetDetailModal";
import { getBouquetList } from "../components/apis/bouquetApi";
import { Bouquet } from "../components/common/Bouquet";
import MessageInputModal from "../components/modal/MessageInputModal";

function MadeList() {
  //api 연동후 data set
  const [bouquetList, setBouquetList] = useState<
    Array<{ bouquetSeq: number; bouquetImage: string }>
  >([]);
  const [bouquet, setBouquet] = useState<Bouquet>();
  const [detailModal, setDetailModal] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<boolean>(false);
  const [isStored, setIsStored] = useState<boolean>(false);
  const handleBouquetList = async () => {
    const response = await getBouquetList();
    console.log(response);
    setBouquetList(response.data.data);
  };

  const handleBouquet = (bouquet: Bouquet) => {
    handleDetailModal(true);
    setBouquet(bouquet);
  };

  const handleDetailModal = (state: boolean) => {
    setDetailModal(state);
  };

  const handleMessageModal = (state: boolean) => {
    if (state) setIsStored(false);
    setMessageModal(state);
  };

  const handleIsStored = (state: boolean) => {
    setIsStored(state);
  };

  useEffect(() => {
    handleBouquetList();
  }, []);

  return (
    <Box
      sx={{
        mx: "auto",
        width: 420,
        position: "relative",
        backgroundColor: "#FFFAFA",
        height: "100vh",
        minHeight: "100vh",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{}}>
        <Header page="madelist"></Header>
      </Box>
      <BouquetDetailModal
        bouquet={bouquet}
        handleDetailModal={handleDetailModal}
        detailModal={detailModal}
        handleMessageModal={handleMessageModal}
      ></BouquetDetailModal>
      <MessageInputModal
        messageModal={messageModal}
        handleMessageModal={handleMessageModal}
        isStored={isStored}
        handleIsStored={handleIsStored}
      ></MessageInputModal>
      <Box sx={{ mt: "2rem", width: "93%" }}>
        <Typography
          sx={{
            ...textStyle,
          }}
        >
          내가 만든 꽃다발
        </Typography>
        <Typography
          sx={{
            ...textStyle,
            fontSize: "0.8rem",
            mt: "0.5rem",
          }}
        >
          꽃다발을 클릭하여 꽃다발을 공유하거나 꽃집에 주문해보세요
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFE0E0",
          width: "93%",
          height: "80%",
          borderRadius: "10px",
          overflowX: "hidden",
          overflowY: "scroll",
          justifyContent: "center",
          mt: "1rem",
          pt: "1rem",
        }}
      >
        <FlowerImgList
          bouquetList={bouquetList}
          page="madelist"
          handleBouquet={handleBouquet}
        ></FlowerImgList>
      </Box>
    </Box>
  );
}

export const textStyle = {
  fontFamily: "OneMobileLight",
  fontStyle: "normal",
  fontWeight: "bold",
  lineHeight: "17px",
  fontSize: "1rem",
  color: "rgba(0, 0, 0, 0.8)",
};
export default MadeList;
