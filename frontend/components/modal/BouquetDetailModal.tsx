import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useRecoilState } from "recoil";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import FlowerInfoList from "../../components/modal/FlowerInfoList";
import BouquetDetailModalBtn from "../modal/BouquetDetailModalBtn";
import { Bouquet } from "../common/Bouquet";
import { getBouquetDetail } from "../apis/bouquetApi";

interface modalProps {
  bouquet: Bouquet;
  handleDetailModal: (state: boolean) => void;
  detailModal: boolean;
}
function BouquetDetailModal({
  bouquet,
  handleDetailModal,
  detailModal,
}: modalProps) {
  //test용 dummy data
  const flowerinfoList = [
    {
      flowerName: "수국",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
  ];
  //api 연동후 data set
  const [flowerInfo, setFlowerInfo] = useState<Array<{}>>([]);

  const closeBouquetDetailModal = () => {
    handleDetailModal(false);
  };
  const handleBouquetDetail = async (bouquet: Bouquet) => {
    const reponse = await getBouquetDetail(bouquet.bouquetSeq);
    setFlowerInfo(reponse.data.data.flowerInfo);
  };

  useEffect(() => {
    if (bouquet !== undefined) {
      handleBouquetDetail(bouquet);
    }
  }, [bouquet]);

  return (
    <>
      {detailModal ? (
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
              width: "90%",
              height: "75%",
              backgroundColor: "#FFFAFA",
              zIndex: 1300,
              borderRadius: "10px",
              top: "15%",
              left: "4%",
            }}
          >
            <CloseIcon
              sx={{ position: "absolute", top: "20px", left: "90%", color: "" }}
              onClick={closeBouquetDetailModal}
            />
            <Box sx={{ position: "absolute", top: "8%", left: "10%" }}>
              <Image
                src={bouquet.bouquetImage}
                alt="꽃다발"
                width={315}
                height={290}
              ></Image>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "2%",
                width: "95%",
                height: "40%",
                backgroundColor: "#ffff",
                borderRadius: "10px",
                border: "1px solid rgba(82, 82, 82, 0.29)",
                overflow: "scroll",
              }}
            >
              <FlowerInfoList flowerInfoList={flowerinfoList} />
            </Box>
            <Box sx={{ position: "absolute", top: "90%", left: "15%" }}>
              <BouquetDetailModalBtn />
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export default BouquetDetailModal;
