import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    console.log(bouquetList.length);
  }, [bouquetList]);
  return (
    <>
      {page == "madelist" ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={0}
            display="flex"
            direction="row"
            alignItems="center"
            justifyItems="center"
            sx={{ width: "90%" }}
          >
            {bouquetList.map((bouquet, index) => {
              return (
                <Grid
                  item
                  xs={4}
                  key={index}
                  sx={{
                    display: "flex",
                    "&:hover": { cursor: "pointer" },
                    padding: "1.5%",
                  }}
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
        </Box>
      ) : (
        <>
          {bouquetList.length === 0 ? (
            <Box
              sx={{
                // position: "absolute",
                // width: "100%",
                // height: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "ONEMobileLight",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                {infoText}
              </Typography>
            </Box>
          ) : (
            <Grid container sx={{}}>
              {bouquetList.map((bouquet, index) => {
                return (
                  <Grid
                    item
                    xs={4}
                    key={index}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src={bouquet.bouquetImage}
                      alt="꽃다발"
                      width={"160px"}
                      height={"160px"}
                    ></img>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </>
      )}
    </>
  );
}

export default FlowerImgList;
