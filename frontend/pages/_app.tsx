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
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default App;
