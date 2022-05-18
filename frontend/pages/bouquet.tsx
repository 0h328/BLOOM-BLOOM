import React, { useState, useEffect } from "react";
import BouquetContainer from "../containers/BouquetContainer";
import Header from "../components/common/Header";
import { Box } from "@mui/material";
import { getFlower, getDeco, getWrap } from "../components/apis/flower";

export default function FlowerPage() {
  const [windowHeight, setWindowHeight] = useState<number>();
  const [flowerInfo, setFlowerInfo] = useState();
  const [decoInfo, setDecoInfo] = useState();
  const [wrapInfo, setWrapInfo] = useState();
  const value = async () => {
    const res = await getFlower();
    const res2 = await getDeco();
    const res3 = await getWrap();
    setFlowerInfo(res.data.data);
    setDecoInfo(res.data.data);
    setWrapInfo(res.data.data);
  };

  useEffect(() => {
    value();
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <Box
      sx={{
        mx: "auto",
        width: 420,
        backgroundColor: "#FFFAFA",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "10vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Header page="bouquet"></Header>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <BouquetContainer></BouquetContainer>
      </Box>
    </Box>
  );
}
