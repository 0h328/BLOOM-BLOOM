import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Grid, Typography, Button } from "@mui/material";
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
            sx={{ width: "100vh" }}
          >
            {bouquetList.map((bouquet, index) => {
              return (
                <Grid
                  item
                  xs={4}
                  key={index}
                  style={{ width: "20vh" }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    "&:hover": { cursor: "pointer" },
                    width: "20vh",
                  }}
                >
                  <img
                    src={bouquet.bouquetImage}
                    alt="꽃다발"
                    width={"100%"}
                    height={"auto"}
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
                height: "20%",
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
            <Grid container sx={{ display: "flex", alignItems: "center" }}>
              {bouquetList.map((bouquet, index) => {
                return (
                  <Grid
                    item
                    xs={4}
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "10vh",
                    }}
                  >
                    <img
                      src={bouquet.bouquetImage}
                      alt="꽃다발"
                      width={"173px"}
                      // width={"170px"}
                      height={"auto"}
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
