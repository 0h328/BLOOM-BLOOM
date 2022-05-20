/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            defer
            src="https://developers.kakao.com/sdk/js/kakao.min.js"
          ></script>
          <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=682d057f339c72447d6633e53e098d0c&libraries=services"></script>
          <meta property="og:title" content="BLOOM BLOOM" />
          <meta property="og:type" content="article" />
          <meta
            property="og:description"
            content="BLOOM BLOOM에서 당신에게 꽃배달이 왔습니다🌸"
          />
          <meta property="og:image" content="/img/mainimage.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="900" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
