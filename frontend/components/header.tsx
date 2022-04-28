import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Link from "next/link";

type PageIdetifierProps = {
  page: string;
};

function Header({ page }: PageIdetifierProps) {
  const handleLogout = () => {};
  return (
    <>
      <Box sx={{ position: "absolute", top: "30px" }}>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyItems="center"
          sx={{ width: 420 }}
        >
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Box>
              <Link href="/main" passHref>
                <Box sx={{ "&:hover": { cursor: "pointer" } }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "JuliusSansOne",
                      fontSize: 25,
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
                    fontFamily: "JuliusSansOne",
                    fontSize: 13,
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Typography>
              </Box>
            ) : null}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Header;
