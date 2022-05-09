import React, { useEffect } from "react";

function KakaoMessage() {
  useEffect(() => {
    window.kakao.init(process.env.REACT_APP_KAKAO);
    console.log(window.kakao.isInitialized());
  }, []);
}

export default KakaoMessage;
