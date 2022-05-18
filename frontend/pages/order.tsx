import { Box, Button } from "@mui/material";
import StoreCardSmall from "../components/order/StoreCardSmall";
import OrderFlower from "../components/order/OrderFlower";
import Request from "../components/order/Request";
import Header from "../components/common/Header";
import MakeButton from "../components/main/MakeButton";
import { useRouter } from "next/router";

export default function Order() {
  const router = useRouter();
  const store = JSON.parse(String(router.query.storeInfo));
  const bouquetSeq = router.query.bouquetSeq;
  console.log(bouquetSeq);
  return (
    <div
      style={{
        width: "420px",
        height: "926px",
        margin: "auto",
      }}
    >
      <Box sx={{ height: 30 }}></Box>
      <Header page="order"></Header>
      <StoreCardSmall storeInfo={store}></StoreCardSmall>
      <OrderFlower bouquetSeq={Number(bouquetSeq)}></OrderFlower>
      <Request></Request>
      <Box sx={{ width: 156, mx: "auto" }}>
        <Button
          sx={{
            width: 156,
            height: 36,
            backgroundColor: "#FFE0E0",
            color: "#000000",
            fontFamily: "OneMobileLight",
            fontWeight: "bold",
          }}
        >
          {" "}
          주문의뢰하기{" "}
        </Button>
      </Box>
    </div>
  );
}
