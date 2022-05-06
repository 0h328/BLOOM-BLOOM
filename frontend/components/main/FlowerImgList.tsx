import React, { useState } from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { Bouquet } from "../common/Bouquet";

interface dataProps {
  bouquetList: Bouquet[];
  top: string;
  page?: string;
  handleBouquet?: (bouquet: Bouquet) => void;
}

function FlowerImgList({ bouquetList, top, page, handleBouquet }: dataProps) {
  const handleBouquetInfo = (bouquet: {
    bouquetSeq: number;
    bouquetImage: string;
  }) => {
    handleBouquet(bouquet);
    // setBouquetInfo({
    //   ...bouquet,
    // });
  };

  const clickHandler = (
    bouquet: {
      bouquetSeq: number;
      bouquetImage: string;
    },
    event: any
  ) => {
    handleBouquetInfo(bouquet);
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
