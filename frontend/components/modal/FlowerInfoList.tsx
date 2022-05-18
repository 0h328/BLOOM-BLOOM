import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { textStyle } from "../main/FlowerImgListTitle";

interface flowerInfo {
  flowerName: string;
  flowerImage: string;
  flowerCount: number;
}
interface flowerInfoProps {
  flowerInfoList: flowerInfo[];
}
function FlowerInfoList({ flowerInfoList }: flowerInfoProps) {
  return (
    <>
      <Box
        sx={{
          ...boxStyle,
          height: "30px",
          backgroundColor: "#EFDFBF",
          display: "flex",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <Grid container>
          <Grid item xs={4}>
            <Typography sx={{ ...titleStyle }}>꽃이름</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{ ...titleStyle }}>꽃</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{ ...titleStyle }}> 개수 </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          ...boxStyle,
          height: "85%",
          overflowX: "hidden",
          overflowY: "scroll",
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
                <img
                  src={flowerInfo.flowerImage}
                  alt="꽃"
                  width={30}
                  height={30}
                ></img>
              </Box>
            </Grid>
            <Grid item xs={4}>
              &nbsp;&nbsp;
              {flowerInfo.flowerCount} 개
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

export const titleStyle = {
  fontWeight: "bold",
  fontFamily: "OneMobileLight",
  fontSize: "14px",
};

export default FlowerInfoList;
