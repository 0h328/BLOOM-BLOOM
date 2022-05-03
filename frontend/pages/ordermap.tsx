import { useEffect } from "react";
import {Box, Button, Typography} from '@mui/material';
import StoreCard from '../components/order/StoreCard'
import Map from '../components/order/map'
import Header from "../components/common/Header";




function OrderMap() {
  const store = { storeName: '꽃집 이름', storeCall:'010-0000-0000', storeAddress:'서울특별시 역삼 어디에있어요', storeDomain:'www.naver.com', storeImage: "/test.png" };
 
  return (
  <Box style={{
    width: "420px",
    height: "926px",
    margin: "auto",
    minHeight: "100vh",
  }}>
    <Box sx={{height:30}}></Box>
    <Header></Header>
    <Map></Map>
    <StoreCard storeInfo={store}></StoreCard>
  </Box>)
}


export default OrderMap;