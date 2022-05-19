import { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import { detectMobileDevice } from "../components/common/DetectMobileDevice";
import Inform from "../components/common/Inform";
declare global {
  interface Window {
    Kakao: any;
  }
}
function App({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const url = window.location.href;
    setIsMobile(detectMobileDevice(window.navigator.userAgent));
    setLoading(false);
    setIsAdmin(url.includes("admin"));
  }, []);
  return (
    <>
      <Head>
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="viewport" content="width=device-width, maximum-scale=1.0" />
      </Head>
      <RecoilRoot>
        {isMobile ? (
          loading ? (
            <div></div>
          ) : (
            <Component {...pageProps} />
          )
        ) : isAdmin ? (
          <Component {...pageProps} />
        ) : (
          <Inform />
        )}
      </RecoilRoot>
    </>
  );
}

export default App;
