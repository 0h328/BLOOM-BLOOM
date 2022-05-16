import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useRecoilState } from "recoil";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import FlowerInfoList from "../../components/modal/FlowerInfoList";
import BouquetDetailModalBtn from "../modal/BouquetDetailModalBtn";
import { Bouquet } from "../common/Bouquet";
import { getBouquetDetail } from "../apis/bouquetApi";
import { presentBouquetState } from "../../states/states";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [presentBouquet, setPresentBouquet] =
    useRecoilState(presentBouquetState);
  //api 연동후 data set
  const [flowerInfo, setFlowerInfo] = useState<
    Array<{ flowerName: string; flowerImage: string; flowerCount: number }>
  >([]);
  const closeBouquetDetailModal = () => {
    setPresentBouquet({
      presentBouquetImage: "",
      presentBouquetSeq: -1,
    });
    handleDetailModal(false);
  };
  const handleBouquetDetail = async (bouquet: Bouquet) => {
    const response = await getBouquetDetail(bouquet.bouquetSeq);
    // console.log(response);
    setFlowerInfo(response.data.data.flowerInfo);
  };
  const handleBtn = (code: number) => {
    switch (code) {
      case 0:
        handleShare();
        break;
      case 1:
        handleOrder();
        break;
      case 2:
        handleDelete();
        break;
    }
  };
  const handleShare = () => {
    console.log(bouquet.bouquetImage);
    setPresentBouquet({
      presentBouquetImage: bouquet.bouquetImage,
      presentBouquetSeq: bouquet.bouquetSeq,
    });
    router.push("/share");
  };
  const handleOrder = () => {};
  const handleDelete = () => {};

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
              mt: "15%",
              width: "90%",
              height: "85%",
              backgroundColor: "#FFFAFA",
              zIndex: 1300,
              borderRadius: "10px",
              mx: "auto",
              boxShadow: "6px 6px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <CloseIcon
                sx={{ margin: "1rem 1rem 0rem 1rem" }}
                onClick={closeBouquetDetailModal}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={bouquet.bouquetImage}
                alt="꽃다발"
                width={"90%"}
                height={"300px"}
              ></img>
            </Box>
            <Box
              sx={{
                width: "95%",
                height: "35%",
                backgroundColor: "#ffff",
                borderRadius: "10px",
                border: "1px solid rgba(82, 82, 82, 0.29)",
                mx: "auto",
              }}
            >
              <FlowerInfoList flowerInfoList={flowerInfo} />
            </Box>
            <Box sx={{ height: "5%", width: "70%", mx: "auto" }}>
              <BouquetDetailModalBtn
                handleBtn={handleBtn}
                bouquetSeq={bouquet.bouquetSeq}
              />
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export default BouquetDetailModal;
