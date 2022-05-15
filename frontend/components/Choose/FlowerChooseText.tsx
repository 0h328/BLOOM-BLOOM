import React from "react";
import Link from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography, IconButton } from "@mui/material";
import Toast from "../common/Toast";
import { toast } from "material-react-toastify";
import { useRouter } from "next/router";
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
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        textAlign="center"
        position="relative"
        top="80px"
      >
        <IconButton
          style={{ color: "black", right: "60px", marginBottom: "5px" }}
        >
          <Link href="/bouquet" passHref>
            <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
          </Link>
        </IconButton>
        꽃을 선택해주세요
        <IconButton
          style={{ color: "black", left: "60px", marginBottom: "5px" }}
          onClick={handleBtn}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
        component="div"
        position="relative"
        top="68px"
        style={{ textAlign: "center" }}
      >
        꽃은 최대 12개까지 선택 가능합니다.
      </Typography>
    </>
  );
}

export default FlowerChooseText;
