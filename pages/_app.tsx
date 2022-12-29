import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Arcorn, { ArcornProps } from '@components/Arcorn';
import BgScreen from '@public/images/bgScreen.png';
import Image from 'next/image';

function MyApp({ Component, pageProps }: AppProps) {
  const [randomArray, setRandomArray] = useState<ArcornProps[]>([]);
  const makeArcornImage = () => {
    const randomLeft = Math.random() * window.screen.width;
    const randomTop = Math.random() * window.screen.height;
    const randomDeg = Math.random() * 360;
    return { randomTop, randomLeft, randomDeg };
  };

  useEffect(() => {
    setRandomArray(
      Array.from({ length: 100 }, () => {
        return makeArcornImage();
      })
    );
  }, []);



  return (
    <div className="h-fit  ">
      <div className="absolute left-0 right-0 -z-10 mx-auto h-screen max-w-xl">
        <Image
          src={BgScreen}
          alt="BgScreen"
          className="object-contain"
          layout="fill"
        ></Image>
      </div>
      <div className="absolute left-0 top-0 -z-20 h-full  w-screen overflow-hidden bg-bgColor">
        {randomArray.map((element, index) => (
          <Arcorn
            key={index}
            randomTop={element.randomTop}
            randomLeft={element.randomLeft}
            randomDeg={element.randomDeg}
          ></Arcorn>
        ))}
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
