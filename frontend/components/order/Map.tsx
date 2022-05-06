import { useEffect, useState } from "react";
import { constSelector } from "recoil";
import StoreCard from "./StoreCard"

declare global {
  interface Window {
    kakao: any;
  }
}
// interface MapProps {
//   latitude: number;
//   longitude: number;
// }



function Map() {
  const [forMarker,SetForMarker] = useState([])
  const [store,SetStore] = useState({ storeName: '꽃집 이름', storeCall:'010-0000-0000', storeAddress:'서울특별시 역삼 어디에있어요', storeDomain:'www.naver.com', storeImage: "/test.png" })
  const store2 = { storeName: '마커 클릭', storeCall:'010-0000-0000', storeAddress:'서울특별시 역삼 어디에있어요', storeDomain:'www.naver.com', storeImage: "/test.png" };

  useEffect(() => {

    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=a72bcfeac31d42afb2702137336c4d9f&autoload=false`;

    document.head.appendChild(mapScript);
    

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {


        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), 
          level: 3 
        };
        const map = new window.kakao.maps.Map(container, options);
      //   if (navigator.geolocation) {
      
      //     // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      //     navigator.geolocation.getCurrentPosition(function(position) {
              
      //         var lat = position.coords.latitude, // 위도
      //             lon = position.coords.longitude; // 경도
              
      //         var locPosition = new window.kakao.maps.LatLng(lat, lon) // geolocation으로 얻어온 좌표
      //         var presentPosition=locPosition;
      
      //         map.setCenter(locPosition);   
                  
      //       });
          
      // } else { // HTML5의 GeoLocation을 사용할 수 없을때 
          
      //     var locPosition = new window.kakao.maps.LatLng(37.566826, 126.9786567)
      //     alert('현재 위치를 찾을 수 없습니다!');
      // }
      var markerPosition  = new window.kakao.maps.LatLng(33.450701, 126.570667); 

      // // 마커를 생성합니다
      // var marker = new window.kakao.maps.Marker({
      //     position: markerPosition
      // });
      // marker.setMap(map);
      var positions = [
        {
            title: '카카오', 
            latlng: new window.kakao.maps.LatLng(33.450705, 126.570677)
        },
        {
            title: '생태연못', 
            latlng: new window.kakao.maps.LatLng(33.450936, 126.569477)
        },
        {
            title: '텃밭', 
            latlng: new window.kakao.maps.LatLng(33.450879, 126.569940)
        },
        {
            title: '근린공원',
            latlng: new window.kakao.maps.LatLng(33.451393, 126.570738)
        }
        ];

      const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
      for (var i = 0; i < positions.length; i ++) {

        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new window.kakao.maps.Size(24, 35); 
        // 마커 이미지를 생성합니다    
        var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
              position: positions[i].latlng,
              title : positions[i].title, 
              image : markerImage,
              forcheck : '1'
          });
        marker.setMap(map);
        window.kakao.maps.event.addListener(marker, 'click', function() {
          alert(`${marker}`);
          SetStore(store2)
      });
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
        
        // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
        var boundsStr = bounds.toString(); 

        console.log(boundsStr)
        
        });
      
        window.kakao.maps.event.addListener(map, 'zoom_changed', function() {        
    
          // 지도의 현재 레벨을 얻어옵니다
          var level = map.getLevel();

          var bounds = map.getBounds();

          var boundsStr = bounds.toString(); 
          
          var message = '현재 지도 레벨은 ' + level + ' 입니다';
          console.log(message)
  

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