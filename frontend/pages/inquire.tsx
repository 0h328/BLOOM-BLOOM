import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import FlowerInfoList from "../components/modal/FlowerInfoList";
import Image from "next/image";
import Header from "../components/common/Header";

function Inquire() {
  //test용 dummy data
  const bouquetImage = "/img/bouquet1.png";
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
    {
      flowerName: "장미",
      flowerImage: "/img/hydrangeaPink.png",
      flowerCount: 1,
    },
  ];
  const customerdata = { name: "김정혁", phonenumber: "010-5232-6532" };
  return (
    <Box
      sx={{
        mx: "auto",
        width: 420,
        position: "relative",
        backgroundColor: "#FFFAFA",
        height: "840px",
        minHeight: "100vh",
      }}
    >
      <Header></Header>
      <Box sx={{ position: "absolute", top: "10%", left: "10%" }}>
        <Image src={bouquetImage} alt="꽃다발" width={335} height={390}></Image>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            backgroundColor: "#ffff",
            border: "1px solid rgba(82, 82, 82, 0.29)",
            borderRadius: "5px",
            // overflow: "scroll",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "30px",
              textAlign: "center",
              alignItems: "center",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              backgroundColor: "#EFDFBF",
            }}
          >
            <Grid container>
              <Grid item xs={4}>
                <Typography sx={{ ...textStyle }}>고객</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ ...textStyle }}>연락처</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              fontSize: "14px",
              alignItems: "center",
              height: "30px",
            }}
          >
            <Grid container>
              <Grid item xs={4}>
                <Typography sx={{ fontFamily: "JuliusSansOne" }}>
                  {customerdata.name}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ fontFamily: "JuliusSansOne" }}>
                  {customerdata.phonenumber}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <FlowerInfoList flowerInfoList={flowerinfoList} />
        </Box>
      </Box>
    </Box>
  );
}

export const textStyle = {
  fontSize: "15px",
  fontWeight: "bold",
  fontFamily: "JuliusSansOne",
};
export default Inquire;
