import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";
declare global {
  interface Window {
    Kakao: any;
  }
}
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta
          content="width=device-width,  minimum-scale=1"
          name="viewport"
        ></meta>
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default App;
