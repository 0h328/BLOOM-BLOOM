import React, { useState } from "react";
import { Box, Typography, Grid, Button, Link } from "@mui/material";

interface btnProps {
  handleBtn: (code: number) => void;
}
function BouquetDetailModalBtn({ handleBtn }: btnProps) {
  const handleDelete = () => {};
  return (
    <Grid container>
      <Grid item xs={4}>
        <Button
          variant="contained"
          size="small"
          sx={{ ...btnStyle }}
          onClick={() => handleBtn(0)}
        >
          <Typography>공유</Typography>
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Link href="/order" sx={{ textDecoration: "none" }}>
          <Button variant="contained" size="small" sx={{ ...btnStyle }}>
            <Typography>주문</Typography>
          </Button>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link href="/madelist" sx={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            size="small"
            sx={{ ...btnStyle }}
            onClick={handleDelete}
          >
            <Typography>삭제</Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export const btnStyle = {
  backgroundColor: "#FFE0E0",
  color: "#000000",
  fontFamily: "JuliusSansOne",
  margin: "10px",
  "&:hover": { backgroundColor: "#BAD7DF" },
};

export default BouquetDetailModalBtn;
