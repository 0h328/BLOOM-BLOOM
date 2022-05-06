import { useEffect } from "react";
import {Box, Button, Typography} from '@mui/material';
import StoreCard from '../components/order/StoreCard'
import Map from '../components/order/Map'
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
    <Map></Map>
  </Box>)
}


export default OrderMap;