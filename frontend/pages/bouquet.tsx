import React, { useState, useEffect } from 'react';
import BouquetContainer from '../containers/BouquetContainer';
import Header from "../components/common/Header";
import { Box } from "@mui/material";
import { getFlower, getDeco, getWrap } from "../components/apis/flower";



export default function FlowerPage() {
  const [flowerInfo, setFlowerInfo] = useState();
  const [decoInfo, setDecoInfo] = useState();
  const [wrapInfo, setWrapInfo] = useState();
  const value = async () => {
    const res = await getFlower();
    const res2 = await getDeco();
    const res3 = await getWrap();
    setFlowerInfo(res.data.data)
    setDecoInfo(res.data.data)
    setWrapInfo(res.data.data)
  }

  useEffect(() => {
    value()
  },[])

export default function flowerPage() {
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
      <Box sx={{ position: "absolute", top: "30px" }}>
        <Header page="bouquet"></Header>
      </Box>
      <BouquetContainer></BouquetContainer>
    </Box>
  );
}
