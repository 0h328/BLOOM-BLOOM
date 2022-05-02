import { Box, Button } from '@mui/material';
import Storecardsmall from '../components/order/storecard_small'
import OrderFlower from '../components/order/order_flower'
import OrderContent from '../components/order/OrderContent'



export default function OrderDetail() {
  return(
    <div style={{
      width: "420px",
      height: "926px",
      margin: "auto",
    }}>
      <Storecardsmall></Storecardsmall>
      <OrderFlower></OrderFlower>
      <OrderContent></OrderContent>
    </div>

  );
}