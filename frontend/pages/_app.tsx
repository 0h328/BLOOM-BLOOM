import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import Script from "next/script";
declare global {
  interface Window {
    kakao: any;
  }
}
function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default App;
