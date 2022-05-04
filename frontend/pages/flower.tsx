import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Header from "../components/common/Header";
import FlowerChooseText from "../components/Choose/FlowerChooseText";
import { flowerList } from "../components/flower/FlowerData";
import { groupBy } from "../components/common/GroupBy";
import FlowerObject from "../components/flower/FlowerObject";
import { ToastContainer, toast } from "react-toastify";

function Flower() {
  let groupByName = groupBy(flowerList, (flower) => flower.flowerName);
  const flowerListByName = Object.entries(groupByName);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [validCount, setValidCount] = useState<boolean>(true);
  const handleTotal = (dif: number) => {
    setTotalCount(totalCount + dif);
  };
  useEffect(() => {
    if (totalCount == 8) setValidCount(false);
    console.log(totalCount);
    if (totalCount > 8) {
      toast.error(
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              display: "inline-block",
              fontFamily: "Gowun Batang",
            }}
          >
            꽃은 8개까지만 선택할 수 있습니다
          </div>
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
          role: "alert",
        }
      );
    }
  }, [totalCount]);
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
              <Typography
                sx={{ ...textStyle }}
                key={index}
                variant="subtitle1"
                display="block"
              >
                {item[0]}
              </Typography>
              <Grid container>
                {item[1].map((flowerItem, index) => {
                  return (
                    <>
                      <Grid key={index} item xs={3}>
                        <Box sx={{ margin: "10%" }}>
                          <FlowerObject
                            flower={flowerItem}
                            handleTotal={handleTotal}
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
      <ToastContainer />
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
  marginTop: "10px",
};
export default Flower;
