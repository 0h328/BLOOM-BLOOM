import React from "react";
import Link from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography, IconButton, Box } from "@mui/material";
import Toast from "../common/Toast";
import { toast } from "material-react-toastify";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
interface textProps {
  totalCount: number;
}
function FlowerChooseText({ totalCount }: textProps) {
  const router = useRouter();
  const handleBtn = () => {
    if (totalCount === 0) {
      toast.error("📣꽃을 1개이상 선택해주세요");
    } else {
      router.push("./arrange");
    }
  };
  return (
    <>
      <Toast></Toast>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          textAlign="center"
          display="flex"
          justifyContent="space-around"
          width="100%"
        >
          <IconButton style={{ color: "black", marginBottom: "5px" }}>
            <Link href="/bouquet" passHref>
              <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
            </Link>
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "18px",
                fontFamily: "OneMobileLight",
              }}
            >
              꽃을 선택해주세요
            </Typography>
            <Typography
              component="div"
              display="flex"
              sx={{
                fontWeight: "600",
                alignItems: "center",
                ml: "0.5rem",
                fontFamily: "OneMobileLight",
              }}
            >
              ({totalCount}/10)
            </Typography>
          </Box>
          <IconButton
            style={{ color: "black", marginBottom: "5px" }}
            onClick={handleBtn}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          top="68px"
          style={{ textAlign: "center", fontFamily: "OneMobileLight" }}
        >
          꽃은 최대 10개까지 선택 가능합니다.
        </Typography>
      </Box>
    </>
  );
}

export default FlowerChooseText;
