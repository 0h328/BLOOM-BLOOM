import React from "react";
import { Box, Typography, Grid, useRadioGroup } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeBtn from "./HomeBtn";
import BackBtn from "./BackBtn";

type PageIdetifierProps = {
  page?: string;
};

function Header({ page }: PageIdetifierProps) {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    router.push("/");
  };
  return (
    <>
      <Box sx={{}}>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyItems="center"
          sx={{ width: 420 }}
        >
          <Grid item xs={3}>
            {page == "main" ? null : <BackBtn />}
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Link href="/main" passHref>
                <Box sx={{ "&:hover": { cursor: "pointer" } }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "ONEMobileLight",
                      fontSize: 25,
                      // fontWeight: "600",
                    }}
                  >
                    BLOOM BLOOM
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={3}>
            {page == "main" ? (
              <Box sx={{ "&:hover": { cursor: "pointer" } }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontFamily: "ONEMobileLight",
                    fontSize: 13,
                  }}
                  onClick={handleLogout}
                >
                  LOGOUT
                </Typography>
              </Box>
            ) : (
              <HomeBtn />
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Header;
