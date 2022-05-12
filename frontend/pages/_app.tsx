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
          // httpEquiv="Content-Security-Policy"
          content="width=device-width, initial-scale=1, minimum-scale=1"
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
