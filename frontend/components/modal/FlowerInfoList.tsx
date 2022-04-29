import React, { useState } from "react";
import { Box, Typography, List, ListItem, Grid } from "@mui/material";
import Image from "next/image";

interface flowerInfo {
  flowerName: string;
  flowerImage: string;
  flowerCount: number;
}
interface FlowerInfoProps {
  flowerInfoList: flowerInfo[];
}
function FlowerInfoList({ flowerInfoList }: FlowerInfoProps) {
  return (
    <>
      <Box
        sx={{
          ...boxStyle,
          height: "15%",
          backgroundColor: "#FFE0E0",
          display: "flex",
        }}
      >
        <Grid container>
          <Grid item xs={4}>
            <Typography>꽃이름</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>꽃</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>개수</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          ...boxStyle,
          backgroundColor: "#ffff",
          borderColor: "#fffa",
        }}
      >
        {flowerInfoList.map((flowerInfo, index) => (
          <Grid
            container
            key={index}
            sx={{
              borderBottom: "1px solid rgba(82, 82, 82, 0.29)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid item xs={4}>
              {flowerInfo.flowerName}
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Image
                  src={flowerInfo.flowerImage}
                  alt="꽃"
                  width={30}
                  height={30}
                ></Image>
              </Box>
            </Grid>
            <Grid item xs={4}>
              {flowerInfo.flowerCount}
            </Grid>
          </Grid>
        ))}
      </Box>
    </>
  );
}

export const boxStyle = {
  textAlign: "center",
  fontSize: "14px",
  alignItems: "center",
};

export default FlowerInfoList;
