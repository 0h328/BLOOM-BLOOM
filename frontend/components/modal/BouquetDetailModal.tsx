import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useRecoilState } from "recoil";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import FlowerInfoList from "../../components/modal/FlowerInfoList";
import BouquetDetailModalBtn from "../modal/BouquetDetailModalBtn";
import BouquetImg from "../present/BouquetImg";
import { Bouquet } from "../common/Bouquet";
import { getBouquetDetail } from "../apis/bouquetApi";
import { presentBouquetState } from "../../states/states";
import { useRouter } from "next/router";
import { deleteBouquet } from "../apis/bouquetApi";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { toast } from "material-react-toastify";
import Toast from "../../components/common/Toast";
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
    localStorage.setItem("bouquetImage", bouquet.bouquetImage);
    router.push("/share");
  };
  const handleOrder = () => {};
  const handleDelete = async () => {
    const response = await deleteBouquet(bouquet.bouquetSeq);
    if (response.status === 200) {
      toast.success("🔔 성공적으로 삭제되었습니다");
    }
    console.log(response);
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
          <Toast />
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
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <ArrowBackOutlinedIcon
                sx={{
                  margin: "1rem 1rem 0rem 1rem",
                  "&:hover": { cursor: "pointer" },
                }}
                onClick={closeBouquetDetailModal}
              />
              <DeleteOutlineOutlinedIcon
                sx={{
                  margin: "1rem 1rem 0rem 1rem",
                  "&:hover": { cursor: "pointer" },
                }}
                onClick={closeBouquetDetailModal}
              />
            </Box>
            <Box
              sx={{
                width: "75%",
                mx: "auto",
              }}
            >
              <BouquetImg bouquetImage={bouquet.bouquetImage}></BouquetImg>
            </Box>
            <Box
              sx={{
                width: "95%",
                height: "30%",
                backgroundColor: "#ffff",
                borderRadius: "10px",
                border: "1px solid rgba(82, 82, 82, 0.29)",
                mx: "auto",
                top: "10%",
              }}
            >
              <FlowerInfoList flowerInfoList={flowerInfo} />
            </Box>
            <Box sx={{ height: "10%", width: "70%", mx: "auto" }}>
              <BouquetDetailModalBtn
                handleBtn={handleBtn}
                bouquetSeq={bouquet.bouquetSeq}
                handleDelete={handleDelete}
              />
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export default BouquetDetailModal;
