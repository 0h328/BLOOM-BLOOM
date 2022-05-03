import { Box, Button } from '@mui/material';
import StoreCardSmall from '../components/order/StoreCardSmall'
import OrderFlower from '../components/order/OrderFlower'
import Request from '../components/order/Request'
import Header from "../components/common/Header";
import MakeButton from "../components/main/MakeButton";



export default function Order() {

  const store = { storeName: '꽃집 이름', storeCall:'010-0000-0000', storeAddress:'서울특별시 역삼 어디에있어요', storeDomain:'www.naver.com', storeImage: "/test.png" };
  return(
    <div style={{
      width: "420px",
      height: "926px",
      margin: "auto",
    }}>
      <Box sx={{height:30}}>
      </Box>
      <Header page="order"></Header>
      <StoreCardSmall storeInfo={store}></StoreCardSmall>
      <OrderFlower></OrderFlower>
      <Request></Request>
      <Box sx={{width:156, mx:'auto'}}>
        <Button sx={{width:156,height:36,backgroundColor:'#FFE0E0',color: "#000000",fontFamily: "JuliusSansOne"}}> 주문의뢰하기 </Button>
      </Box>
    </div>

  );
}