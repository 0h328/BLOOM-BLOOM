import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";
declare global {
  interface Window {
    kakao: any;
  }
}
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests width=device-width, initial-scale=1, minimum-scale=1"
          name="viewport"
        ></meta>
      </Head>
      <RecoilRoot>
        <Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default App;
