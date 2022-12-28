import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Black+Ops+One&family=Nanum+Gothic&family=Nanum+Pen+Script&family=Noto+Sans+KR:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/NanumBaReunHiPi.css"
          rel="stylesheet"
        >
          
        </link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
