import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function KakaoLogin() {
  const handleLogin = () => {};
  return (
    <Link href="/main" passHref>
      <Button
        variant="contained"
        size="small"
        style={{
          position: "absolute",
          backgroundColor: "#FEE500",
          color: "#3A1D1D",
          fontFamily: "JuliusSansOne",
          borderRadius: "5",
          width: 300,
          height: 50,
          top: "700px",
          left: "50px",
        }}
        onClick={handleLogin}
      >
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyItems="center"
        >
          <Grid item xs={3}>
            {" "}
            <Box
              sx={{
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <Image
                src="/img/kakaoLogo.png"
                alt="KakaoLogo"
                width={33}
                height={35}
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Typography
              style={{
                fontWeight: "700",
                fontFamily: "Poppins",
                fontSize: "17px",
              }}
            >
              카카오톡으로 시작하기
            </Typography>
          </Grid>
        </Grid>
      </Button>
    </Link>
  );
}

export default KakaoLogin;
