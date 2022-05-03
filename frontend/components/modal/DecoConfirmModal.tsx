import React from "react";
import { Box, Typography, Grid, Button, Link } from "@mui/material";
import BouquetImg from "../present/BouquetImg";

interface decorationModalProps {
  openDecoModal?: () => void;
  closeDecoModal?: () => void;
  decoModal?: boolean;
}
function DecoConfirmModal({
  openDecoModal,
  closeDecoModal,
  decoModal,
}: decorationModalProps) {

  console.log(closeDecoModal)
  

  const bouquetImage = "/img/bouquet3.png";

  const btnStyle = {
    backgroundColor: "#FFE0E0",
    color: "#000000",
    fontFamily: "JuliusSansOne",
    top: "450px",
    width: "120px",
  
    "&:hover": { backgroundColor: "#BAD7DF" },
  };

  return (
    <>
      {decoModal ? (
        <Box
          sx={{
            position: "absolute",
            width: "420px",
            height: "100%",
            backgroundColor: "rgba(255, 250, 250, 75%)",
            zIndex: 900,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "90%",
              left: "5%",
              height: "55%",
              backgroundColor: "#FFFAFA",
              zIndex: 1300,
              borderRadius: "10px",
              top: "20%",
              boxShadow: "3px 3px #e8e3e3",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                fontSize: "17px",
                fontFamily: "JuliusSansOne",
                fontWeight: "bold",
                top: "20px",
                left: "57px",
              }}
            >
              완성된 꽃다발이 마음에 드시나요?
            </Typography>
            <Box
              sx={{
                position: "absolute",
                width: "300px",
                height: "200px",
                top: "62px",
                left: "40px",
              }}
            >
              <BouquetImg bouquetImage={bouquetImage}></BouquetImg>
            </Box>
            <Grid style={{ display: "flex", justifyContent: "space-evenly"}}>
              <Grid item xs={6}>
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ ...btnStyle }}
                  onClick={closeDecoModal}
                >
                  <Typography>더 꾸미기</Typography>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Link href="/confirm" sx={{ textDecoration: "none" }}>
                  <Button variant="contained" size="large" sx={{ ...btnStyle }}>
                    <Typography>완성하기</Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      ) : null}
    </>
  );
}


export default DecoConfirmModal;

