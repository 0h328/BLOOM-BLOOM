import { Box, Button, Typography } from '@mui/material';
import OrderlIst from '../components/order/orderlist'
import Header from "../components/common/Header";




export default function order() {
  return(
    <div style={{
      width: "420px",
      height: "926px",
      margin: "auto",
    }}>
      <Header></Header>
      <Typography sx={{fontFamily: "Julius Sans One", fontSize:'17px', fontWeight:'bold', ml:4}}>주문내역</Typography>
      <OrderlIst></OrderlIst>
    </div>

  );
}