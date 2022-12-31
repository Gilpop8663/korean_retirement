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
  return (
    <div className="h-fit">
      <div className="absolute left-0 right-0 -z-10 mx-auto h-screen max-w-lg">
        <Image
          src={BgScreen}
          alt="BgScreen"
          className="object-contain"
          layout="fill"
        ></Image>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
