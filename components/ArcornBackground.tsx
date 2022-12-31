import { cls } from '@libs/utils';
import { SERVICE_STRING } from 'constant';
import React, { useEffect, useState } from 'react';
import Arcorn, { ArcornProps } from './Arcorn';

interface ArcornBackgroundProps {
  bgColor: KindProps;
  curHeight: number;
  kind: KindProps;
}

export type KindProps =
  | 'NORMAL'
  | 'MINIMUM'
  | 'PROPER'
  | 'LUXURY'
  | 'STOCK'
  | 'ESTATE'
  | 'BUSINESS'
  | 'VIRTUAL';

export default function ArcornBackground({
  bgColor,
  curHeight,
  kind,
}: ArcornBackgroundProps) {
  const [randomArray, setRandomArray] = useState<ArcornProps[]>([]);
  const makeArcornImage = () => {
    const randomLeft = Math.random() * document.documentElement.scrollWidth;
    const randomTop = Math.random() * document.documentElement.scrollHeight;
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

  useEffect(() => {}, []);

  return (
    <div
      className={cls(
        bgColor === SERVICE_STRING.normal ? 'bg-bgColor' : '',
        bgColor === SERVICE_STRING.minimum ? 'bg-waterBearBackground' : '',
        'absolute left-0 top-0 -z-20   w-screen overflow-hidden'
      )}
      style={{
        height: `${curHeight}px`,
      }}
    >
      {randomArray.map((element, index) => (
        <Arcorn
          key={index}
          kind={kind}
          randomTop={element.randomTop}
          randomLeft={element.randomLeft}
          randomDeg={element.randomDeg}
        ></Arcorn>
      ))}
    </div>
  );
}
