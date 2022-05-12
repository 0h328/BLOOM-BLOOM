import React, { useState } from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { Bouquet } from "../common/Bouquet";
import { textStyle } from "./FlowerImgListTitle";
interface dataProps {
  bouquetList: Bouquet[];
  page?: string;
  handleBouquet?: (bouquet: Bouquet) => void;
  infoText?: string;
}
function FlowerImgList({
  bouquetList,
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
                  sx={{ "&:hover": { cursor: "pointer" }, padding: "1%" }}
                >
                  <img
                    src={bouquet.bouquetImage}
                    alt="꽃다발"
                    width={"100%"}
                    height={"100%"}
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
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                top: "10%",
              }}
            >
              <Typography sx={{ ...textStyle }}>{infoText}</Typography>
            </Box>
          ) : (
            <Box sx={{ display: "flex" }}>
              {bouquetList.map((bouquet, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      margin: "1%",
                    }}
                  >
                    <img
                      src={bouquet.bouquetImage}
                      alt="꽃다발"
                      width={"100%"}
                      height={"100%"}
                    ></img>
                  </Box>
                );
              })}
            </Box>
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
