import { Box, Button, Typography } from '@mui/material';
import OrderlIst from '../components/order/OrderList'
import Header from "../components/common/Header";
import {getOrderList} from "../components/apis/order"
import { useEffect, useState } from 'react';

export default function OrderlistPage() {

  const [orderInfoList, getOrderInfoList] = useState([])
  const value = async () => {
    const res = await getOrderList();
    getOrderInfoList(res.data.data)
    console.log(res)
  }

  useEffect(() => {
    value()
  },[])

    const OrderinfoList = [
    {
      storeName: "1번 꽃집",
      orderDay: "2022-02-02",
      storeAddress: '서울특별시',
      storeCall : '010-0000-0000',
      flowerImage: "/test.png"
    },
    {
      storeName: "2번 꽃집",
      orderDay: "2022-02-02",
      storeAddress: '경기도',
      storeCall : '010-0000-0000',
      flowerImage: "/test.png"
    },
    {
      storeName: "3번 꽃집",
      orderDay: "2022-02-02",
      storeAddress: '울산광역시',
      storeCall : '010-0000-0000',
      flowerImage: "/test.png"
    },
    {
      storeName: "4번 꽃집",
      orderDay: "2022-02-02",
      storeAddress: '주소몰라요',
      storeCall : '010-0000-0000',
      flowerImage: "/test.png"
    },
    {
      storeName: "4번 꽃집",
      orderDay: "2022-02-02",
      storeAddress: '주소몰라요',
      storeCall : '010-0000-0000',
      flowerImage: "/test.png"
    },
    {
      storeName: "4번 꽃집",
      orderDay: "2022-02-02",
      storeAddress: '주소몰라요',
      storeCall : '010-0000-0000',
      flowerImage: "/test.png"
    },
    {
      storeName: "4번 꽃집",
      orderDay: "2022-02-02",
      storeAddress: '주소몰라요',
      storeCall : '010-0000-0000',
      flowerImage: "/test.png"
    },
    
  ];

  return(
    <div style={{
      width: "420px",
      height: "926px",
      margin: "auto",
    }}>
      <Box sx={{height:30}}></Box>
      <Header></Header>
      <Typography sx={{fontFamily: "Julius Sans One", fontSize:'17px', fontWeight:'bold', ml:4, mt:3}}>주문내역</Typography>
      <Box sx={{height:720,overflowY: "scroll"}}>
      {OrderinfoList.map((OrderInfo, index) => (
        <OrderlIst OrderInfo={OrderInfo} key={index}></OrderlIst>
      ))}
      </Box>
    </div>

  );
}