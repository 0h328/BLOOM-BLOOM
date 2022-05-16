import React, { useState } from "react";
import { Box, Typography, Grid, Button, Link } from "@mui/material";
import { deleteBouquet } from "../apis/bouquetApi";
import { toast } from "material-react-toastify";
import Toast from "../../components/common/Toast";
interface btnProps {
  handleBtn: (code: number) => void;
  bouquetSeq: number;
}
function BouquetDetailModalBtn({ handleBtn, bouquetSeq }: btnProps) {
  const handleDelete = async () => {
    const response = await deleteBouquet(bouquetSeq);
    if (response.status === 200) {
      toast.success("🔔 성공적으로 삭제되었습니다");
    }
    console.log(response);
  };
  return (
    <Grid container>
      <Toast />
      <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          size="small"
          sx={{ ...btnStyle }}
          onClick={() => handleBtn(0)}
        >
          <Typography sx={{ ...btnStyle1 }}>공유</Typography>
        </Button>
      </Grid>
      <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
        <Link href="/order" sx={{ textDecoration: "none" }}>
          <Button variant="contained" size="small" sx={{ ...btnStyle }}>
            <Typography sx={{ ...btnStyle1 }}> 주문</Typography>
          </Button>
        </Link>
      </Grid>
      <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
        <Link href="/madelist" sx={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            size="small"
            sx={{ ...btnStyle }}
            onClick={handleDelete}
          >
            <Typography sx={{ ...btnStyle1 }}>삭제</Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export const btnStyle = {
  backgroundColor: "#FFE0E0",
  color: "#000000",
  fontFamily: "OneMobileLight",
  margin: "10px",
  "&:hover": { backgroundColor: "#BAD7DF" },
};
export const btnStyle1 = {
  fontFamily: "OneMobileLight",
};

export default BouquetDetailModalBtn;
