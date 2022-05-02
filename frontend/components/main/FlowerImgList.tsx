import React, { useState } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { detailModalState, bouquetInfoState } from "../../states/states";

interface bouquet {
  bouquetSeq: number;
  bouquetImage: string;
}

interface dataProps {
  bouquetList: bouquet[];
  top: string;
  page?: string;
}

function FlowerImgList({ bouquetList, top, page }: dataProps) {
  const [detailModal, setDetailModal] = useRecoilState(detailModalState);
  const [bouquetInfo, setBouquetInfo] = useRecoilState(bouquetInfoState);

  const handleBouquetInfo = (bouquet: {
    bouquetSeq: number;
    bouquetImage: string;
  }) => {
    setBouquetInfo({
      ...bouquet,
    });
  };

  const clickHandler = (
    bouquet: {
      bouquetSeq: number;
      bouquetImage: string;
    },
    event
  ) => {
    handleBouquetInfo(bouquet);
    setDetailModal(true);
  };
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        top: { top },
        left: page === "madelist" ? "5px" : "15px",
      }}
    >
      {page == "madelist" ? (
        <>
          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyItems="center"
            sx={{ width: 410 }}
          >
            {bouquetList.map((bouquet, index) => {
              return (
                <Grid
                  item
                  xs={4}
                  key={index}
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <Image
                    src={bouquet.bouquetImage}
                    alt="꽃다발"
                    width={115}
                    height={190}
                    onClick={(event) => {
                      clickHandler(bouquet, event);
                    }}
                  ></Image>
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        <>
          {bouquetList.map((bouquet, index) => {
            return (
              <Box key={index} sx={{ margin: "5px" }}>
                <Image
                  src={bouquet.bouquetImage}
                  alt="꽃다발"
                  width={115}
                  height={190}
                ></Image>
              </Box>
            );
          })}
        </>
      )}
    </Box>
  );
}
export default FlowerImgList;
