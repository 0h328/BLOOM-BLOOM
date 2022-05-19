import { Box, Button, Typography } from "@mui/material";
import OrderlIst from "../components/order/OrderList";
import Header from "../components/common/Header";
import { getOrderList } from "../components/apis/order";
import { useEffect, useState } from "react";

export default function OrderlistPage() {
  const [orderInfoList, setOrderInfoList] = useState<
    [
      {
        orderSeq: number;
        storeName: string;
        storeContact: string;
        storeAddress: string;
        createdDate: Date;
        bouquetImage: string;
      }
    ]
  >();
  const getList = async () => {
    const res = await getOrderList();
    setOrderInfoList(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    getList();
  }, []);

  const OrderinfoList = [
    {
      storeName: "1번 꽃집",
      orderDay: "2022-02-02",
      storeAddress: "서울특별시",
      storeCall: "010-0000-0000",
      flowerImage: "/test.png",
    },
    {
      storeName: "2번 꽃집",
      orderDay: "2022-02-02",
      storeAddress: "경기도",
      storeCall: "010-0000-0000",
      flowerImage: "/test.png",
    },
    {
      storeName: "3번 꽃집",
      orderDay: "2022-02-02",
      storeAddress: "울산광역시",
      storeCall: "010-0000-0000",
      flowerImage: "/test.png",
    },
    {
      storeName: "4번 꽃집",
      orderDay: "2022-02-02",
      storeAddress: "주소몰라요",
      storeCall: "010-0000-0000",
      flowerImage: "/test.png",
    },
    {
      storeName: "4번 꽃집",
      orderDay: "2022-02-02",
      storeAddress: "주소몰라요",
      storeCall: "010-0000-0000",
      flowerImage: "/test.png",
    },
    {
      storeName: "4번 꽃집",
      orderDay: "2022-02-02",
      storeAddress: "주소몰라요",
      storeCall: "010-0000-0000",
      flowerImage: "/test.png",
    },
    {
      storeName: "4번 꽃집",
      orderDay: "2022-02-02",
      storeAddress: "주소몰라요",
      storeCall: "010-0000-0000",
      flowerImage: "/test.png",
    },
  ];

  return (
    <Box
      sx={{
        mx: "auto",
        width: 420,
        position: "relative",
        backgroundColor: "#FFFAFA",
        height: "100vh",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ height: "10vh", display: "flex", alignItems: "center" }}>
        <Header></Header>
      </Box>
      <Box
        sx={{
          height: "5vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "OneMobileLight",
            fontSize: "17px",
            fontWeight: "bold",
            height: "100%",
            width: "30%",
            textAlign: "center",
            display: "flex",
          }}
        >
          주문내역
        </Typography>
      </Box>
      <Box
        sx={{
          height: "85vh",
          display: "flex",
          overflowY: "scroll",
          justifyContent: "center",
        }}
      >
        <Box sx={{}}>
          {orderInfoList !== undefined ? (
            <Box>
              {!orderInfoList.length && orderInfoList !== undefined ? (
                <Box
                  sx={{
                    mt: "2rem",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontFamily: "OneMobileLight" }}>
                    주문내역이 없습니다
                  </Typography>
                </Box>
              ) : (
                <Box>
                  {orderInfoList.map((data, index) => {
                    return <OrderlIst OrderInfo={data} key={index}></OrderlIst>;
                  })}
                </Box>
              )}
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}
