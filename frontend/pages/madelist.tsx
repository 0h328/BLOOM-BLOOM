import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/common/Header";
import FlowerImgList from "../components/main/FlowerImgList";
import BouquetDetailModal from "../components/modal/BouquetDetailModal";
import { getBouquetList } from "../components/apis/bouquetApi";
import { Bouquet } from "../components/common/Bouquet";

function MadeList() {
  // test용 dummy data
  // const bouquetList = [
  //   { bouquetSeq: 1, bouquetImage: "/img/bouquet0.png" },
  //   { bouquetSeq: 2, bouquetImage: "/img/bouquet0.png" },
  //   { bouquetSeq: 3, bouquetImage: "/img/bouquet0.png" },
  //   { bouquetSeq: 4, bouquetImage: "/img/bouquet1.png" },
  //   { bouquetSeq: 5, bouquetImage: "/img/bouquet2.png" },
  //   { bouquetSeq: 6, bouquetImage: "/img/bouquet3.png" },
  //   { bouquetSeq: 7, bouquetImage: "/img/bouquet1.png" },
  //   { bouquetSeq: 8, bouquetImage: "/img/bouquet2.png" },
  //   { bouquetSeq: 9, bouquetImage: "/img/bouquet3.png" },
  //   { bouquetSeq: 10, bouquetImage: "/img/bouquet1.png" },
  //   { bouquetSeq: 11, bouquetImage: "/img/bouquet2.png" },
  //   { bouquetSeq: 12, bouquetImage: "/img/bouquet3.png" },
  //   { bouquetSeq: 13, bouquetImage: "/img/bouquet1.png" },
  //   { bouquetSeq: 14, bouquetImage: "/img/bouquet2.png" },
  //   { bouquetSeq: 15, bouquetImage: "/img/bouquet3.png" },
  //   { bouquetSeq: 16, bouquetImage: "/img/bouquet1.png" },
  //   { bouquetSeq: 17, bouquetImage: "/img/bouquet2.png" },
  //   { bouquetSeq: 18, bouquetImage: "/img/bouquet3.png" },
  // ];

  //api 연동후 data set
  const [bouquetList, setBouquetList] = useState<
    Array<{ bouquetSeq: number; bouquetImage: string }>
  >([]);
  const [bouquet, setBouquet] = useState<Bouquet>();
  const [detailModal, setDetailModal] = useState<boolean>(false);
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
      }}
    >
      <Box sx={{ position: "absolute", top: "2%" }}>
        <Header page="madelist"></Header>
      </Box>
      <BouquetDetailModal
        bouquet={bouquet}
        handleDetailModal={handleDetailModal}
        detailModal={detailModal}
      ></BouquetDetailModal>
      <Typography
        sx={{
          ...textStyle,
        }}
      >
        최근 제작한 꽃다발
      </Typography>

      <Box
        sx={{
          position: "absolute",
          backgroundColor: "#FFE0E0",
          width: "95%",
          height: "80%",
          top: "16%",
          borderRadius: "10px",
          overflowX: "hidden",
          overflowY: "scroll",
          justifyContent: "center",
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
  position: "absolute",
  fontFamily: "JuliusSans",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "15px",
  lineHeight: "17px",
  top: "10%",
  left: "18px",
  color: "rgba(0, 0, 0, 0.8)",
};
export default MadeList;
