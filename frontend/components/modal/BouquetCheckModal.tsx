import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

interface modalProps {
  bouquetImage: string;
  handleCheckModal: (state: boolean) => void;
  checkModal: boolean;
}

function BouquetCheckModal({ bouquetImage, handleCheckModal, checkModal }) {
  console.log(bouquetImage);
  const img = "/img/wrapPurple.png";
  const closeBouquetDetailModal = () => {
    handleCheckModal(false);
  };
  console.log(checkModal);
  return (
    <>
      {checkModal ? (
        <Box
          sx={{
            position: "absolute",
            width: "420px",
            height: "100%",
            backgroundColor: "rgb(229 225 225 / 72%);",
            zIndex: 900,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "90%",
              height: "80%",
              backgroundColor: "#FFFAFA",
              zIndex: 1300,
              borderRadius: "10px",
              top: "10%",
              left: "4%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CloseIcon
              sx={{ position: "absolute", top: "2%", left: "90%", color: "" }}
              onClick={closeBouquetDetailModal}
            />
            <Box
              sx={{
                position: "absolute",
                top: "10%",
              }}
            >
              <Typography
                sx={{
                  // backgroundColor: "#FFE0E0",
                  color: "#000000",
                  fontFamily: "JuliusSansOne",
                  fontSize: "1.1em",
                }}
              >
                완성된 꽃다발이 마음에 드시나요?
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "18%",
                width: "80%",
                height: "50%",
              }}
            >
              <img
                src={bouquetImage}
                alt="꽃다발"
                width={"100%"}
                height={"100%"}
              ></img>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "75%",
                width: "100%",
              }}
            >
              <Button variant="contained" size="small" sx={{ ...btnStyle }}>
                더 꾸미기
              </Button>
              <Link href="/confirm" passHref>
                <Button variant="contained" size="small" sx={{ ...btnStyle }}>
                  완성하기
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export const btnStyle = {
  margin: "5%",
  width: "40%",
  backgroundColor: "#FFE0E0",
  color: "#000000",
  fontFamily: "JuliusSansOne",
  "&:hover": { backgroundColor: "#BAD7DF" },
};

export default BouquetCheckModal;
