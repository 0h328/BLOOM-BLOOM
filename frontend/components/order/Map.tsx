import { useEffect } from "react";

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
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=a72bcfeac31d42afb2702137336c4d9f&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567), 
          level: 3 
        };
        const map = new window.kakao.maps.Map(container, options);
        // const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
        // const marker = new window.kakao.maps.Marker({
        //   position: markerPosition,
        // });
        // marker.setMap(map);
        if (navigator.geolocation) {
      
          // GeoLocation을 이용해서 접속 위치를 얻어옵니다
          navigator.geolocation.getCurrentPosition(function(position) {
              
              var lat = position.coords.latitude, // 위도
                  lon = position.coords.longitude; // 경도
              
              var locPosition = new window.kakao.maps.LatLng(lat, lon) // geolocation으로 얻어온 좌표
              var presentPosition=locPosition;
      
              map.setCenter(locPosition);   
                  
            });
          
      } else { // HTML5의 GeoLocation을 사용할 수 없을때 
          
          var locPosition = new window.kakao.maps.LatLng(37.566826, 126.9786567)
          alert('현재 위치를 찾을 수 없습니다!');
      }

      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <div id="map" style={{
      marginTop:'24px',
      width: "420px",
      height: "497px"
    }}>
   </div>)
}


export default Map;