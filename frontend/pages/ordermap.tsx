import { useEffect } from "react";
import {Box, Button, Typography} from '@mui/material';
import StoreCard from '../components/order/StoreCard'
import Map2 from '../components/order/Map2'
import Header from "../components/common/Header";





function OrderMap() {
 
  return (
  <Box style={{
    width: "420px",
    height: "926px",
    margin: "auto",
    minHeight: "100vh",
  }}>
    <Box sx={{height:30}}></Box>
    <Header></Header>
    <Map2></Map2>
  </Box>)
}


export default OrderMap;