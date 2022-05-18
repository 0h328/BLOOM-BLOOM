import React, { useEffect, useState, useRef } from "react";
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
  handleMessageModal: (state: boolean) => void;
}
declare var imageType: typeof Image;
interface Window {
  Image: typeof imageType;
}
function BouquetDetailModal({
  bouquet,
  handleDetailModal,
  detailModal,
  handleMessageModal,
}: modalProps) {
  const router = useRouter();
  const imageRef = useRef(null);
  const [presentBouquet, setPresentBouquet] =
    useRecoilState(presentBouquetState);
  //api 연동후 data set
  const [flowerInfo, setFlowerInfo] = useState<
    Array<{ flowerName: string; flowerImage: string; flowerCount: number }>
  >([]);
  const [offsetHeight, setOffsetHeight] = useState<number>();
  const [windowHeight, setWindowHeight] = useState<boolean>();
  const closeBouquetDetailModal = () => {
    // setPresentBouquet({
    //   presentBouquetImage: "",
    //   presentBouquetSeq: -1,
    // });
    handleDetailModal(false);
  };
  const handleBouquetDetail = async (bouquet: Bouquet) => {
    const response = await getBouquetDetail(bouquet.bouquetSeq);
    const image: HTMLImageElement = new window.Image();
    image.src = bouquet.bouquetImage;
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
    handleMessageModal(true);
    handleDetailModal(false);
  };
  const handleOrder = () => {};
  const handleDelete = async () => {
    const response = await deleteBouquet(bouquet.bouquetSeq);
    if (response.status === 200) {
      let n: ReturnType<typeof setTimeout>;
      n = setTimeout(() => {
        location.reload();
      }, 200);
      toast.success("🔔 성공적으로 삭제되었습니다");
    }
    console.log(response);
  };

  useEffect(() => {
    if (bouquet !== undefined) {
      handleBouquetDetail(bouquet);
    }
  }, [bouquet]);
  useEffect(() => {
    if (imageRef !== null && imageRef !== undefined) {
      if (imageRef.current !== null) {
        console.log(imageRef.current.offsetHeight);
        setOffsetHeight(imageRef.current.offsetHeight);
      }
    }
    setWindowHeight(window.innerHeight < 500);
  });
  useEffect(() => {
    console.log(offsetHeight);
  }, [offsetHeight]);
  return (
    <>
      {detailModal ? (
        <Box
          sx={{
            position: "absolute",
            width: "420px",
            height: "100vh",
            backgroundColor: "rgb(31 31 31 / 33%)",
            zIndex: 900,
          }}
        >
          <Toast />
          <Box
            sx={{
              mt: "10%",
              width: "90%",
              height: "90vh",
              backgroundColor: "#FFFAFA",
              zIndex: 1300,
              borderRadius: "10px",
              mx: "auto",
              boxShadow: "6px 6px 4px rgb(161 161 161 / 75%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: "3vh",
              }}
            >
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
                onClick={handleDelete}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "87vh",
                mx: "auto",
                // position: offsetHeight > 227 ? "relative" : null,
                // top: offsetHeight > 227 ? "-5%" : null,
              }}
            >
              <Box
                sx={{
                  width: "40vh",
                  // mt: "10%",
                  mx: "auto",
                }}
              >
                <img
                  ref={imageRef}
                  id="img"
                  src={bouquet.bouquetImage}
                  alt="꽃다발"
                  width={"100%"}
                  height={"auto"}
                ></img>
              </Box>
              <Box sx={{ width: "90%", height: "30vh", mx: "auto" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#ffff",
                    borderRadius: "10px",
                    border: "1px solid rgba(82, 82, 82, 0.29)",
                    mx: "auto",
                    // position: offsetHeight > 227 ? "absolute" : null,
                    // top: offsetHeight ? `${offsetHeight - 30}px` : null,
                  }}
                >
                  <FlowerInfoList flowerInfoList={flowerInfo} />
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "15vh",
                  mx: "auto",
                  display: "flex",
                  justifyContent: "center",
                  mt: "1vh",
                }}
              >
                <BouquetDetailModalBtn
                  handleBtn={handleBtn}
                  bouquetSeq={bouquet.bouquetSeq}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export default BouquetDetailModal;
