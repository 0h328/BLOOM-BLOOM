import { useEffect } from "react";
import {Box, Button, Typography} from '@mui/material';
import StoreCard from '../components/order/StoreCard'
import Map from '../components/order/Map'
import Header from "../components/common/Header";
import { useRouter } from 'next/router';




function OrderMap() {
  const router = useRouter();
  const compare = -1;
  const seq = router.query.bouquetSeq;
  return (<>
    {/* 부캐를 선택해서 넘어온것이 아니면 그만 물러가!!!! */}
    {/* {Number(seq)!==-1? alert("그만 물러가") : <div>b</div>} */}
    <Box style={{
      width: "420px",
      height: "926px",
      margin: "auto",
      minHeight: "100vh",
    }}>
      <Box sx={{ height: 30 }}></Box>
      <Header></Header>
      <Map bouquetSeq={Number(seq)}></Map>
    </Box></>
  )
}
export default OrderMap;