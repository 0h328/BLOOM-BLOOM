import { useEffect, useState } from "react";
import { constSelector } from "recoil";
import StoreCard from "./StoreCard"
import {getMap} from "../apis/map"
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { ConstructionOutlined } from "@mui/icons-material";

declare global {
  interface Window {
    kakao: any;
  }
}


function Map() {
  const [forMarker,SetForMarker] = useState([])
  const [store,SetStore] = useState({ storeName: '꽃집 이름', storeContact:'010-0000-0000', storeAddress:'서울특별시 역삼 어디에있어요', storeMapId:'www.naver.com', storeImage: "/test.png" })
  var storeArray = []

  const check = async (data: object) => {
    const res = await getMap(data);
    storeArray = res.data.data 
  }


  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=a72bcfeac31d42afb2702137336c4d9f&autoload=false`;

    document.head.appendChild(mapScript);
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const test = async (data: object) => {
          await check(data)
          console.log(storeArray)
          setMarker()
        }
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.4408907421696 , 127.147431848755), 
          level: 3 
        };
        const map = new window.kakao.maps.Map(container, options);
        var bounds = map.getBounds();
        var swLatLng = bounds.getSouthWest(); 
        var neLatLng = bounds.getNorthEast(); 
        const data = {
          "swLat" : swLatLng.Ma,
          "swLng" : swLatLng.La,
          "neLat" : neLatLng.Ma,
          "neLng" : neLatLng.La,
        }
        test(data)
      function setMarker() {
        const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
        for (var i = 0; i < storeArray.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new window.kakao.maps.Size(24, 35); 
          // 마커 이미지를 생성합니다    
          var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
          // 마커를 생성합니다
          var marker = new window.kakao.maps.Marker({
                position: new window.kakao.maps.LatLng(storeArray[i].storeLat, storeArray[i].storeLng),
                title : storeArray[i].title, 
                image : markerImage,
            });
          const check = i
          marker.setMap(map);
          window.kakao.maps.event.addListener(marker, 'click', function() {
            SetStore(storeArray[check])
        })
        }
      }
      window.kakao.maps.event.addListener(map, 'dragend', function() {     
        // 지도의 center를 얻어옵니다.   
        var center = map.getCenter(); 
        // 지도의 현재 레벨을 얻어옵니다
        var level = map.getLevel();
        
        // 지도타입을 얻어옵니다
        var mapTypeId = map.getMapTypeId(); 
        
        // 지도의 현재 영역을 얻어옵니다 
        var bounds = map.getBounds();
        
        // 영역의 남서쪽 좌표를 얻어옵니다 
        var swLatLng = bounds.getSouthWest(); 
        
        // 영역의 북동쪽 좌표를 얻어옵니다 
        var neLatLng = bounds.getNorthEast(); 
        const data = {
          "swLat" : swLatLng.Ma,
          "swLng" : swLatLng.La,
          "neLat" : neLatLng.Ma,
          "neLng" : neLatLng.La,
        }
        // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
        var boundsStr = bounds.toString(); 

        test(data)
        // check(data)
        // setMarker()
        });
      
        window.kakao.maps.event.addListener(map, 'zoom_changed', function() {        
    
          // 지도의 현재 레벨을 얻어옵니다
          var level = map.getLevel();

          var bounds = map.getBounds();
          var swLatLng = bounds.getSouthWest(); 
        
          // 영역의 북동쪽 좌표를 얻어옵니다 
          var neLatLng = bounds.getNorthEast(); 

          var boundsStr = bounds.toString(); 
          const data = {
            "swLat" : swLatLng.Ma,
            "swLng" : swLatLng.La,
            "neLat" : neLatLng.Ma,
            "neLng" : neLatLng.La,
          }
          console.log(storeArray)
          test(data)
      });
    });

    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <>
    <div id="map" style={{
      marginTop:'24px',
      width: "420px",
      height: "497px"
    }}>
   </div>
   <StoreCard storeInfo={store}></StoreCard>
   </>)
}


export default Map;