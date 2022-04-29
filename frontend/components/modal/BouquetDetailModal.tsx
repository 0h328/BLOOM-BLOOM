import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import Image from "next/image";
import { detailModalState, bouquetInfoState } from "../../states/states";
import CloseIcon from "@mui/icons-material/Close";
import FlowerInfoList from "../../components/modal/FlowerInfoList";

interface ModalProps {
  open: boolean;
}
function BouquetDetailModal() {
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
  const [detailModal, setDetailModal] = useRecoilState(detailModalState);
  const [bouquetInfo, setBouquetInfo] = useRecoilState(bouquetInfoState);
  //api 연동후 data set
  //   const [flowerInfo, setFlowerInfo] = useState<Array<{}>>([]);

  const closeBouquetDetailModal = () => {
    setDetailModal(false);
  };

  //   useEffect(() => {
  //     console.log(bouquetInfo);
  //   }, [bouquetInfo]);

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
              height: "636px",
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
                src={bouquetInfo.bouquetImage}
                alt="꽃다발"
                width={315}
                height={290}
              ></Image>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "55%",
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
          </Box>
        </Box>
      ) : null}
    </>
  );
}
export default BouquetDetailModal;
