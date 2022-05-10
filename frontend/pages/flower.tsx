import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Header from "../components/common/Header";
import FlowerChooseText from "../components/Choose/FlowerChooseText";
import { flowerList } from "../components/flower/FlowerData";
import { groupBy } from "../components/common/GroupBy";
import FlowerObject from "../components/flower/FlowerObject";
import Toast from "../components/common/Toast";
import { toast } from "material-react-toastify";
import { mainFlowerState } from "../states/states";
import { useRecoilState } from "recoil";
import { getFlower } from "../components/apis/bouquetApi";

function Flower() {
  let groupByName = groupBy(flowerList, (flower) => flower.flowerName);
  const flowerListByName = Object.entries(groupByName);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [validCount, setValidCount] = useState<boolean>(true);
  const [mainFlower, setMainFlower] = useRecoilState(mainFlowerState);
  const handleTotal = (dif: number) => {
    setTotalCount(totalCount + dif);
  };
  const handleError = (code: number) => {
    switch (code) {
      case 0:
        toast.error("📣0개이하는 선택할 수 없습니다");
        break;
      case 1:
        toast.error("📣꽃은 8개까지 선택할 수 있습니다");
        break;
    }
  };
  const handleFloweList = async () => {
    const response = await getFlower();
    console.log(response);
  };
  useEffect(() => {
    if (totalCount == 8) {
      setValidCount(false);
    } else if (totalCount < 8) {
      setValidCount(true);
    } else if (totalCount > 8) {
      setValidCount(false);
    }
    console.log(totalCount);
  }, [totalCount]);
  useEffect(() => {
    handleFloweList();
  }, []);
  console.log(mainFlower);
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
        <Header page="flower"></Header>
      </Box>
      <FlowerChooseText></FlowerChooseText>
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "#FFE0E0",
          width: "410px",
          height: "730px",
          top: "150px",
          left: "5px",
          borderRadius: "10px",
          overflowX: "hidden",
          overflowY: "scroll",
        }}
      >
        {flowerListByName.map((item, index) => {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{ ...textStyle }}
                  key={index}
                  variant="subtitle1"
                  display="block"
                >
                  {item[0]}
                </Typography>
              </Box>
              <Grid container>
                {item[1].map((flowerItem, index) => {
                  return (
                    <>
                      <Grid key={index} item xs={12 / item[1].length}>
                        <Box sx={{ margin: "5%" }}>
                          <FlowerObject
                            flower={flowerItem}
                            handleTotal={handleTotal}
                            validCount={validCount}
                            handleError={handleError}
                          ></FlowerObject>
                        </Box>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </>
          );
        })}
      </Box>
      <Toast />
    </Box>
  );
}

export const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};

export const textStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "10px 0px 10px 0px",
  width: "30%",
  minWidth: "fitContent",
  backgroundColor: "white",
  borderRadius: "5px",
  fontFamily: "JuliusSansOne",
};
export default Flower;
