import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ga from '@libs/useGoogleAnalytic';
import Head from 'next/head';

declare global {
  interface Window {
    Kakao: any;
    adsbygoogle: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
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
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
