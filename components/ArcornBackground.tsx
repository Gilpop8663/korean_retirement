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
    const result = [];

    for (let j = 0; j < 5; j++) {
      for (let i = 0; i < 5; i++) {
        const randomLeft =
          (document.documentElement.scrollWidth / 5) * i +
          (j % 2 === 0 ? document.documentElement.scrollWidth / 10 : 0);
        const randomTop = (document.documentElement.scrollHeight / 5) * j;
        const randomDeg = Math.random() * 360;
        result.push({ randomLeft, randomTop, randomDeg });
      }
    }

    return result;
  };

  useEffect(() => {
    // console.log(makeArcornImage());
    setRandomArray(makeArcornImage());
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
      {randomArray?.map((element, index) => (
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
