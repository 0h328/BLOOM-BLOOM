import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document{
    render() {
        return (
            <Html>
                <Head>
                    <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
                    <meta charset="utf-8" />
                    <meta property="og:title" content="test"/>
                    <meta property="og:type" content="article"/>
                    <meta property="og:description" content="This is a description."/>
                    <meta property="og:image" content="/img/insta.png"/>
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="627" />
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