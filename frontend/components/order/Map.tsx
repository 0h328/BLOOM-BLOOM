import { useEffect, useState } from "react";
import StoreCard from "./StoreCard";
import { Box } from "@mui/system";
import { getMap } from "../apis/map";
import { getBouquetDetail } from "../apis/bouquetApi";

declare global {
  interface Window {
    kakao: any;
  }
}
interface props {
  bouquetSeq: number;
}
function Map({ bouquetSeq }: props) {
  const [forMarker, SetForMarker] = useState([]);
  const [bouquet, setBouquet] = useState();
  const [store, SetStore] = useState({
    storeName: "처음이야",
    storeContact: "010-0000-0000",
    storeAddress: "서울특별시 역삼 어디에있어요",
    storeMapId: "www.naver.com",
    storeImage: "/test.png",
  });
  var storeArray = [];
  var bouquetInfo = null;
  const check = async (data: object) => {
    const res = await getMap(data);
    storeArray = res.data.data;
  };

  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    //appkey 관리 필요
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=682d057f339c72447d6633e53e098d0c&autoload=false`;

    document.head.appendChild(mapScript);
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const test = async (data: object) => {
          await check(data);
          setMarker();
        };
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            37.494966766847845,
            127.12635783521158
          ),
          level: 4,
        };
        const map = new window.kakao.maps.Map(container, options);
        var bounds = map.getBounds();
        var swLatLng = bounds.getSouthWest();
        var neLatLng = bounds.getNorthEast();
        const data = {
          swLat: swLatLng.Ma,
          swLng: swLatLng.La,
          neLat: neLatLng.Ma,
          neLng: neLatLng.La,
        };
        test(data);
        // 현재 내 위치 찾기
        // if (navigator.geolocation) {

        //   // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        //   navigator.geolocation.getCurrentPosition(function(position) {

        //       var lat = position.coords.latitude, // 위도
        //           lon = position.coords.longitude; // 경도

        //       var locPosition = new window.kakao.maps.LatLng(lat, lon) // geolocation으로 얻어온 좌표
        //       var presentPosition=locPosition;

        //       map.setCenter(locPosition);

        //     });

        // } else { // HTML5의 GeoLocation을 사용할 수 없을때

        //       var locPosition = new window.kakao.maps.LatLng(37.4408907421696 , 127.147431848755)
        //       alert('현재 위치를 찾을 수 없습니다!');
        //   }
        var selectedMarker = null;
        function setMarker() {
          const imageSrc = "/img/markerImg1.png";
          for (var i = 0; i < storeArray.length; i++) {
            // 마커를 생성합니다
            addMarker(storeArray[i], i);
          }
          function addMarker(position, idx) {
            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new window.kakao.maps.Size(30, 43);
            var _imageSize = new window.kakao.maps.Size(37, 50);
            // 마커 이미지를 생성합니다
            var markerImage = new window.kakao.maps.MarkerImage(
              imageSrc,
              imageSize
            );
            var _markerImage = new window.kakao.maps.MarkerImage(
              imageSrc,
              _imageSize
            );

            var marker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(
                position.storeLat,
                position.storeLng
              ),
              title: storeArray[i].title,
              map: map,
              image: markerImage,
            });

            marker.markerImage = markerImage;

            // 마커를 클릭할 시 일어난 이벤트 > 상점 저장 어떻게할지
            window.kakao.maps.event.addListener(marker, "click", function () {
              SetStore(storeArray[idx]);
            });
            // 마커에 mouseover 이벤트를 등록합니다
            window.kakao.maps.event.addListener(
              marker,
              "mouseover",
              function () {
                // 클릭된 마커가 없고, mouseover된 마커가 클릭된 마커가 아니면
                // 마커의 이미지를 오버 이미지로 변경합니다
                console.log(i);
                if (!selectedMarker || selectedMarker !== marker) {
                  marker.setImage(_markerImage);
                }
              }
            );

            // 마커에 mouseout 이벤트를 등록합니다
            window.kakao.maps.event.addListener(
              marker,
              "mouseout",
              function () {
                // 클릭된 마커가 없고, mouseout된 마커가 클릭된 마커가 아니면
                // 마커의 이미지를 기본 이미지로 변경합니다
                if (!selectedMarker || selectedMarker !== marker) {
                  marker.setImage(markerImage);
                }
              }
            );

            // 마커에 click 이벤트를 등록합니다
            window.kakao.maps.event.addListener(marker, "click", function () {
              // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
              // 마커의 이미지를 클릭 이미지로 변경합니다
              if (!selectedMarker || selectedMarker !== marker) {
                // 클릭된 마커 객체가 null이 아니면
                // 클릭된 마커의 이미지를 기본 이미지로 변경하고
                !!selectedMarker &&
                  selectedMarker.setImage(selectedMarker.markerImage);
                // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
                marker.setImage(_markerImage);
              }

              // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
              selectedMarker = marker;
            });

            window.kakao.maps.event.addListener(map, "click", function () {
              marker.setImage(markerImage);
            });

            // 마커에 click 이벤트를 등록합니다
            window.kakao.maps.event.addListener(map, "click", function () {
              marker.setImage(markerImage);
            });
          }
        }
        window.kakao.maps.event.addListener(map, "dragend", function () {
          // 지도의 현재 영역을 얻어옵니다
          var bounds = map.getBounds();

          // 영역의 남서쪽 좌표를 얻어옵니다
          var swLatLng = bounds.getSouthWest();

          // 영역의 북동쪽 좌표를 얻어옵니다
          var neLatLng = bounds.getNorthEast();
          const data = {
            swLat: swLatLng.Ma,
            swLng: swLatLng.La,
            neLat: neLatLng.Ma,
            neLng: neLatLng.La,
          };
          test(data);
        });

        window.kakao.maps.event.addListener(map, "zoom_changed", function () {
          var bounds = map.getBounds();
          var swLatLng = bounds.getSouthWest();

          // 영역의 북동쪽 좌표를 얻어옵니다
          var neLatLng = bounds.getNorthEast();
          const data = {
            swLat: swLatLng.Ma,
            swLng: swLatLng.La,
            neLat: neLatLng.Ma,
            neLng: neLatLng.La,
          };
          test(data);
        });
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <Box
      sx={{
        mx: "auto",
        height: "100%",
        width: "90%",
        position: "relative",
        backgroundColor: "#FFE0E0",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        id="map"
        style={{
          width: "100%",
          height: "65%",
        }}
      ></Box>
      <Box
        sx={{
          height: "35%",
          width: "100%",
          mx: "auto",
          display: "flex",
        }}
      >
        <StoreCard storeInfo={store} bouquetSeq={bouquetSeq}></StoreCard>
      </Box>
    </Box>
  );
}

export default Map;
