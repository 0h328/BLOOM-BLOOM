import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
    
  )
}

export default App;
