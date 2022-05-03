import { Box, Button } from '@mui/material';
import StoreCardSmall from '../components/order/StoreCardSmall'
import OrderFlower from '../components/order/OrderFlower'
import OrderContent from '../components/order/OrderContent'
import Header from "../components/common/Header";

export default function OrderDetail() {
  const store = { storeName: '꽃집 이름', storeCall:'010-0000-0000', storeAddress:'서울특별시 역삼 어디에있어요', storeDomain:'www.naver.com', storeImage: "/test.png" };
  return(
    <div style={{
      width: "420px",
      height: "926px",
      margin: "auto",
    }}>
      <Box sx={{height:30}}>
      </Box>
      <Header></Header>
      <StoreCardSmall storeInfo={store}></StoreCardSmall>
      <OrderFlower></OrderFlower>
      <OrderContent></OrderContent>
    </div>

  );
}