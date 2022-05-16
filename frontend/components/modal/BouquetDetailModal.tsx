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
              position: "absolute",
              width: "90%",
              height: "80%",
              backgroundColor: "#FFFAFA",
              zIndex: 1300,
              borderRadius: "10px",
              top: "10%",
              left: "4%",
            }}
          >
            <CloseIcon
              sx={{ position: "absolute", top: "2%", left: "90%", color: "" }}
              onClick={closeBouquetDetailModal}
            />
            <Box sx={{ position: "absolute", top: "8%", left: "10%" }}>
              <img
                src={bouquet.bouquetImage}
                alt="꽃다발"
                width={"100%"}
                height={"100%"}
              ></img>
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
              <FlowerInfoList flowerInfoList={flowerInfo} />
            </Box>
            <Box sx={{ position: "absolute", top: "91%", left: "15%" }}>
              <BouquetDetailModalBtn handleBtn={handleBtn} />
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export default BouquetDetailModal;
