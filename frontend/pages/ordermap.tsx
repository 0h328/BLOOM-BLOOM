import { useEffect } from "react";
import {Box, Button, Typography} from '@mui/material';
import Storecard from '../components/order/storecard'
import Map from '../components/order/map'
import Header from "../components/common/Header";




function OrderMap() {
 
  return (
  <Box style={{
    width: "420px",
    height: "926px",
    margin: "auto",
    minHeight: "100vh",
  }}>
    <Header></Header>
    <Map></Map>
    <Storecard></Storecard>
  </Box>)
}


export default OrderMap;