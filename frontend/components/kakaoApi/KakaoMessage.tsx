import React, { useEffect } from "react";
import Script from "next/script";
import { Box } from "@mui/material";

function KakaoMessage() {
  useEffect(() => {
    const script = document.createElement("script");

    script.async = true;
    script.src = `https://developers.kakao.com/sdk/js/kakao.js`;
    document.head.appendChild(script);

    const onLoadKakao = () => {
      window.kakao.init(process.env.NEXT_PUBLIC_APP_KEY);
      console.log(window.kakao.initialization());
    };
    onLoadKakao();
  }, []);

  return <Box></Box>;
}

export default KakaoMessage;
