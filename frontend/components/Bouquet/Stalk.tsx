import React from "react";
import { Box, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { flowerState } from "../../states/states";

interface flower {
  flowerSeq: number;
  flowerImage: string;
}

interface flowerProps {
  flowerList: flower[];
}

function Stalk({ flowerList }: flowerProps) {
  const [flowerInfo, setFlowerInfo] = useRecoilState(flowerState);
  const handleFlowerInfo = (flower: {
    flowerSeq: number;
    flowerImage: string;
  }) => {
    setFlowerInfo({
      ...flower,
    });
  };

  const clickHandler = (
    flower: {
      flowerSeq: number;
      flowerImage: string;
    },
    event
  ) => {
    handleFlowerInfo(flower);
  };

  return (
    <Box sx={{ ...style }}>
      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justifyItems="center"
        sx={{ width: 300, marginTop: "10px" }}
      >
        {flowerList.map((flower, index) => {
          return (
            <Grid
              item
              xs={6}
              key={index}
              sx={{
                "&:hover": { cursor: "pointer" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={flower.flowerImage}
                alt="부속꽃"
                style={{ width: "110px", height: "110px" }}
                onClick={(event) => {
                  clickHandler(flower, event);
                }}
              ></img>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  // margin: "20px auto",
};

export default Stalk;
