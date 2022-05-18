/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document{
    render() {
        return (
            <Html>
                <Head>
                    <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
                    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=%NEXT_PUBLIC_KAKAO_API_KEY%"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript/>
                </body>

            </Html>
        )
    }
}
export default MyDocument;