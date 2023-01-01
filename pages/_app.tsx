import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Arcorn, { ArcornProps } from '@components/Arcorn';
import BgScreen from '@public/images/bgScreen.png';
import Image from 'next/image';
import ArcornBackground from '@components/ArcornBackground';

declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
