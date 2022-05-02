import { Box, Button } from '@mui/material';
import Storecardsmall from '../components/order/storecard_small'
import OrderFlower from '../components/order/order_flower'
import Request from '../components/order/request'
import Header from "../components/common/Header";



export default function order() {
  return(
    <div style={{
      width: "420px",
      height: "926px",
      margin: "auto",
    }}>
      <Header></Header>
      <Storecardsmall></Storecardsmall>
      <OrderFlower></OrderFlower>
      <Request></Request>
      <Box sx={{width:156, mx:'auto'}}>
        <Button sx={{width:156,height:36,backgroundColor:'#FFE0E0',color: "#000000",fontFamily: "JuliusSansOne"}}> 주문의뢰하기 </Button>
      </Box>
    </div>

  );
}