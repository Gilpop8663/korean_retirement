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

    const screenWidth = 1920;
    const repeatNumber = 5;

    for (let j = 0; j < repeatNumber; j++) {
      for (let i = 0; i < repeatNumber; i++) {
        const randomLeft =
          (screenWidth / repeatNumber) * i +
          (j % 2 === 0 ? screenWidth / (repeatNumber * 2) : 0);
        const randomTop =
          (document.documentElement.scrollHeight / repeatNumber) * j;
        const randomDeg = Math.random() * 360;
        result.push({ randomLeft, randomTop, randomDeg });
      }
    }

    return result;
  };

  useEffect(() => {
    setRandomArray(makeArcornImage());
  }, []);

  return (
    <div
      className={cls(
        bgColor === SERVICE_STRING.normal ? 'bg-bgColor' : '',
        bgColor === SERVICE_STRING.minimum ? 'bg-waterBearBackground' : '',
        'absolute left-0 top-0 -z-20 w-full overflow-hidden'
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
