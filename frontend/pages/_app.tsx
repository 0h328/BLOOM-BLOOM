import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
declare global {
  interface Window {
    kakao: any;
  }
}
function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default App;
