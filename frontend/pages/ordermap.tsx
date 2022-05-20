import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import StoreCard from "../components/order/StoreCard";
import Map from "../components/order/Map";
import Header from "../components/common/Header";
import { useRouter } from "next/router";

function OrderMap() {
  const router = useRouter();
  const compare = -1;
  const seq = router.query.bouquetSeq;
  console.log(seq);
  return (
    <>
      {/* 부캐를 선택해서 넘어온것이 아니면 그만 물러가!!!! */}
      {/* {Number(seq)!==-1? alert("그만 물러가") : <div>b</div>} */}
      <Box
        style={{
          width: "420px",
          height: "100vh",
          margin: "auto",
          minHeight: "100vh",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFAFA",
        }}
      >
        <Box
          sx={{
            height: "10vh",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Header></Header>
        </Box>

        <Box
          sx={{
            height: "3vh",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "OneMobileLight",
              fontWeight: "600",
              fontSize: "15px",
              color: "#6c6c6c",
              // pt: 2,
            }}
          >
            원하시는 꽃집을 선택해 꽃다발 주문 의뢰를 해보세요
          </Typography>
        </Box>
        <Box
          sx={{
            height: "90vh",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Map bouquetSeq={Number(seq)}></Map>
        </Box>
      </Box>
    </>
  );
}
export default OrderMap;
