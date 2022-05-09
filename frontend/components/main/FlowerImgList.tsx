import React, { useState } from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { Bouquet } from "../common/Bouquet";

interface dataProps {
  bouquetList: Bouquet[];
  top: string;
  page?: string;
  handleBouquet?: (bouquet: Bouquet) => void;
  infoText?: string;
}
function FlowerImgList({
  bouquetList,
  top,
  page,
  handleBouquet,
  infoText,
}: dataProps) {
  const handleBouquetInfo = (bouquet: {
    bouquetSeq: number;
    bouquetImage: string;
  }) => {
    handleBouquet(bouquet);
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
        position: "relative",
        display: "flex",
        top: { top },
        left: page === "madelist" ? "5px" : "2%",
        justifyContent: "center",
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
                  <img
                    src={bouquet.bouquetImage}
                    alt="꽃다발"
                    width={115}
                    height={190}
                    onClick={(event) => {
                      clickHandler(bouquet, event);
                    }}
                  ></img>
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        <>
          {!bouquetList.length ? (
            <Box
              sx={{
                position: "absolute",
                height: "10%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Typography sx={{ ...infoTextStyle }}>{infoText}</Typography>
            </Box>
          ) : (
            <>
              {bouquetList.map((bouquet, index) => {
                return (
                  <Box
                    key={index}
                    sx={{ display: "flex", width: "100%", height: "100%" }}
                  >
                    <img
                      src={bouquet.bouquetImage}
                      alt="꽃다발"
                      width={"90%"}
                      height={"150%"}
                    ></img>
                  </Box>
                );
              })}
            </>
          )}
        </>
      )}
    </Box>
  );
}

export const infoTextStyle = {
  fontFamily: "JuliusSansOne",
};
export default FlowerImgList;
