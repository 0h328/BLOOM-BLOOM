import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
interface btnProps {
  handleBtn: () => void;
  title: string;
}
function KakaoBtn({ handleBtn, title }: btnProps) {
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
          width: 280,
          height: 45,
        }}
        onClick={handleBtn}
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
                position: "absolute",
                alignItems: "center",
                justifyItems: "center",
                top: "8px",
                left: "30px",
              }}
            >
              <Image
                src="/img/kakaoLogo.png"
                alt="KakaoLogo"
                width={30}
                height={33}
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Typography
              style={{
                fontWeight: "600",
                fontFamily: "JuliusSansOne",
                fontSize: "15px",
                color: "#3A1D1D",
              }}
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
      </Button>
    </Link>
  );
}

export default KakaoBtn;
