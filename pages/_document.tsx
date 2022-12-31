import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/NanumBaReunHiPi.css"
          rel="stylesheet"
        ></link>
        <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
