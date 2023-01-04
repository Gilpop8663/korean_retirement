import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>은퇴 자금 테스트!</title>
        <meta
          property="og:url"
          content="https://korean-retirement.vercel.app/"
        />
        <meta property="og:title" content="은퇴 자금 테스트!" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/80146176/210153300-4123582a-84bc-4833-8e27-581fe697df89.png"
        />
        <meta
          property="og:description"
          content="은퇴 이후, 얼마가 필요할까? 은퇴 자금 테스트 !"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/NanumBaReunHiPi.css"
          rel="stylesheet"></link>
        <meta
          name="naver-site-verification"
          content="0bd61b8e71d8f623cbd952c54997c1dc7077f83c"
        />
        <meta
          name="google-site-verification"
          content="bn2vsRbCicbyvCfYW0yjaW1maH6b4awLLq1pFlt2c1Y"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2859963355226699"
          crossOrigin="anonymous"></script>
        <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
          }}></script> */}
      </Head>
      <body>
        <Main />
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
