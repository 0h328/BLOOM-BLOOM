import { Box, Button, Typography, Link } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";
import Image from "next/image";
import React from "react";
import Router from "next/router";

/*
”flowerinfo”: [
   {
      ”flowerName” : String,
      ”flowerImage” : String,
      ”flowerCount” : INT
   }
],
”bouquetImage” : String,

"storeSeq": 1,
"storeName": "플라워",
"storeContact": "010-0000-1111",
"storeAddress": "도로명",
"storeRegNum": "4199238",
"storeMapId": "abc",
"storeBlogId": "abc",
"storeInstagramId": "abc",
"storeImageLink": "abc"
*/

function Storecard(props) {
  const storeInfo = props.storeInfo;
  const bouquetSeq = props.bouquetSeq;
  console.log(storeInfo);
  const SendQuery = () => {
    const param_2 = bouquetSeq;

    console.log("bouquetInfo in Storecard", param_2);
    Router.push(
      "/order/?storeInfo=" +
        JSON.stringify(storeInfo) +
        "&" +
        "bouquetSeq=" +
        bouquetSeq,
      "/order"
    );
  };

  return (
    <>
      {storeInfo.storeName === "처음이야" ? (
        <Box
          sx={{
            width: "100%",
            // height: "100%",
            mt: 3,
            mb: 3,
            mx: "auto",
            backgroundColor: "#FFE0E0",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "OneMobileLight",
          }}
        >
          <Typography
            sx={{
              fontFamily: "OneMobileLight",
              fontSize: "15px",
              fontWeight: "bold",
              lineHeight: "20px",
              height: "30%",
            }}
          >
            지도에서 마커를 클릭해 꽃집을 선택하면 <br />
            자세한 정보를 확인하실 수 있습니다
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              margin: "auto",
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ ...explainStyle, backgroundColor: "#EFDFBF" }}>
              <img src="/img/blog.png" alt="insta" width={20} height={20}></img>
              <Typography sx={{ ...textStyle }}>
                {" "}
                블로그에서 <br />더 많은 정보를 <br />
                얻어보세요
              </Typography>
            </Box>
            <Box sx={{ ...explainStyle, backgroundColor: "#EFDFBF" }}>
              <img
                src="/img/insta.png"
                alt="insta"
                width={20}
                height={20}
              ></img>{" "}
              <Typography sx={{ ...textStyle }}>
                {" "}
                꽃집 인스타그램을
                <br /> 구경해보세요
              </Typography>
            </Box>
            <Box sx={{ ...explainStyle, backgroundColor: "#EFDFBF" }}>
              <img
                src="/img/naverIcon.png"
                alt="insta"
                width={20}
                height={20}
              ></img>
              <Typography sx={{ ...textStyle }}>
                네이버 지도에서 <br /> 더 자세한 정보를 <br /> 확인할 수 있어요
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            mt: 1,
            mb: 3,
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "OneMobileLight",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "60%",
              flexDirection: "row",
              justifyContent: "space-around",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: "40%",
                height: "auto",
                maxHeight: "100%",
              }}
            >
              <img
                src={storeInfo.storeImageLink}
                alt="test"
                width={"100%"}
                height={"auto"}
              ></img>
            </Box>
            <Box sx={{ width: "50%", height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  height: 35,
                  alignItems: "baseline",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "OneMobileLight",
                    fontSize: "23px",
                    fontWeight: "bold",
                  }}
                >
                  {storeInfo.storeName.length > 6
                    ? storeInfo.storeName.slice(0, 5) + "..."
                    : storeInfo.storeName}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: 35,
                    justifyContent: "space-between",
                    ml: 0.5,
                  }}
                >
                  <img
                    src="/img/insta.png"
                    alt="insta"
                    width={15}
                    height={15}
                  ></img>
                  <img
                    src="/img/blog.png"
                    alt="insta"
                    width={15}
                    height={15}
                  ></img>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontFamily: "OneMobileLight",
                    fontSize: "11px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CallIcon sx={{ fontSize: "11px", mx: "1rem" }}></CallIcon>
                  {storeInfo.storeContact}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "OneMobileLight",
                    fontSize: "11px",
                    mt: 0.5,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <LocationOnIcon
                    sx={{ fontSize: "11px", mx: "1rem" }}
                  ></LocationOnIcon>
                  {storeInfo.storeAddress}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "OneMobileLight",
                    fontSize: "11px",
                    mt: 0.5,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MapIcon sx={{ fontSize: "11px", mx: "1rem" }}></MapIcon>
                  <Link
                    href={`https://naver.me/${storeInfo.storeMapId}`}
                    target="_blank"
                    sx={{ textDecoration: "none" }}
                  >
                    {storeInfo.storeMapId}
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              height: "20%",
              justifyContent: "flex-end",
            }}
          >
            {/* 여기에 이제 받아온 데이터를 넘겨서 옮겨주면 보내주면 될 것 같습니다 */}
            <Box
              sx={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  width: 130,
                  height: 36,
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  fontFamily: "OneMobileLight",
                  fontWeight: 600,
                  boxShadow: "1px 1px 4px 1px #dadce0",
                }}
                onClick={SendQuery}
              >
                주문하기
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Storecard;

export const explainStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "15px",
  justifyContent: "space-evenly",
  width: "30%",
};

export const textStyle = {
  fontFamily: "OneMobileLight",
  fontSize: "0.7rem",
  fontWeight: "bold",
};
