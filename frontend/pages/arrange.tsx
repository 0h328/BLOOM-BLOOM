import React, { useState, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "../components/common/Header";
import Move from "../components/move/Move";
import FlowerArrangeText from "../components/Choose/FlowerArrangeText";
import Test from "../components/move/Test";
function Arrange() {
  const handleFinish = () => {
    setFinish(true);
  };
  const [finish, setFinish] = useState<boolean>(false);
  const [flowers, setFlowers] = useState([
    "/img/carnationPink.png",
    "/img/carnationOrange.png",
    "/img/hydrangeaPurple.png",
    "/img/hydrangeaBlue.png",
    "/img/peonyWhite.png",
    "/img/lisianthusPurple.png",
    "/img/lisianthusPink.png",
    "/img/ranunculusPink.png",
  ]);
  return (
    <Box
      sx={{
        mx: "auto",
        width: 420,
        position: "relative",
        backgroundColor: "#FFFAFA",
        height: "100vh",
        minHeight: "100vh",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box sx={{ position: "absolute", top: "2%" }}>
        <Header page="main"></Header>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "13%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "75%",
              height: "50%",
            }}
          >
            <img
              src="/img/wrapPinkBack.png"
              style={{
                borderRadius: "200px",
                height: "100%",
                width: "100%",
              }}
            ></img>
          </Box>
          <Box
            sx={{
              position: "absolute",
              width: "75%",
              height: "50%",
            }}
          >
            <img
              src="/img/flower3.png"
              style={{
                borderRadius: "200px",
                height: "100%",
                width: "100%",
              }}
            ></img>
          </Box>
          <Box
            sx={{
              position: "absolute",
              width: "75%",
              height: "50%",
            }}
          >
            <img
              src="/img/wrapPinkFront.png"
              style={{
                borderRadius: "200px",
                height: "100%",
                width: "100%",
              }}
            ></img>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "52%",
            width: "90%",
            height: "18%",
            backgroundColor: "#EFDFBF",
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <Move finish={finish}></Move>
        </Box>
        <Button
          variant="contained"
          size="small"
          style={{
            position: "absolute",
            backgroundColor: "#FFE0E0",
            color: "#3A1D1D",
            fontFamily: "JuliusSansOne",
            borderRadius: "5",
            width: 280,
            height: 45,
            top: "75%",
          }}
          onClick={handleFinish}
        >
          <Typography>완료</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default Arrange;
