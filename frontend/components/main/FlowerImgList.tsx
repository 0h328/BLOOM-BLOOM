import React from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";

interface Img {
  src: string;
}

interface ImgDataProps {
  imgList: Img[];
  top: string;
  page?: string;
}

function FlowerImgList({ imgList, top, page }: ImgDataProps) {
  return (
    <Box
      sx={{ position: "absolute", display: "flex", top: { top }, left: "15px" }}
    >
      {page == "madelist" ? (
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyItems="center"
          sx={{ width: 420 }}
        >
          {imgList.map((img, index) => {
            return (
              <Grid item xs={4} key={index}>
                <Image
                  src={img.src}
                  alt="꽃다발"
                  width={115}
                  height={190}
                ></Image>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <>
          {imgList.map((img, index) => {
            return (
              <Box key={index} sx={{ margin: "5px" }}>
                <Image
                  src={img.src}
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
