import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface modalProps {
  bouquetImage: string;
  handleCheckModal: (state: boolean) => void;
  checkModal: boolean;
}

function BouquetCheckModal({ bouquetImage, handleCheckModal, checkModal }) {
  const closeBouquetDetailModal = () => {
    handleCheckModal(false);
  };
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
            }}
          >
            <CloseIcon
              sx={{ position: "absolute", top: "2%", left: "90%", color: "" }}
              onClick={closeBouquetDetailModal}
            />
          </Box>
          <Box sx={{ position: "absolute", top: "8%", left: "10%" }}>
            <img
              src={bouquetImage}
              alt="꽃다발"
              width={"100%"}
              height={"100%"}
            ></img>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export default BouquetCheckModal;
