import { cls } from '@libs/utils';
import { SERVICE_STRING } from 'constant';
import React, { useEffect, useState } from 'react';
import Arcorn, { ArcornProps } from './Arcorn';

interface ArcornBackgroundProps {
  curHeight: number;
  kind: KindProps;
}

export type KindProps =
  | string
  | 'NORMAL'
  | 'MINIMUM'
  | 'PROPER'
  | 'LUXURY'
  | 'STOCK'
  | 'ESTATE'
  | 'BUSINESS';

export default function ArcornBackground({
  curHeight,
  kind,
}: ArcornBackgroundProps) {
  const [randomArray, setRandomArray] = useState<ArcornProps[]>([]);
  const makeArcornImage = () => {
    const result = [];

    const screenWidth = 1920;
    const repeatNumber = 5;
    const margin = 100;

    for (let j = 0; j < repeatNumber; j++) {
      for (let i = 0; i < repeatNumber; i++) {
        const randomLeft =
          (screenWidth / repeatNumber) * i +
          (j % 2 === 0 ? screenWidth / (repeatNumber * 2) : 0) +
          margin;
        const randomTop =
          (document.documentElement.scrollHeight / repeatNumber) * j + margin;
        const randomDeg = Math.random() * 360;
        result.push({ randomLeft, randomTop, randomDeg });
      }
    }

    return result;
  };

  useEffect(() => {
    setRandomArray(makeArcornImage());
  }, [curHeight]);

  return (
    <div
      className={cls(
        kind === SERVICE_STRING.normal ? 'bg-normalBg' : '',
        kind === SERVICE_STRING.minimum ? 'bg-minimumBg' : '',
        kind === SERVICE_STRING.proper ? 'bg-properBg' : '',
        kind === SERVICE_STRING.luxury ? 'bg-luxuryBg' : '',
        kind === SERVICE_STRING.stock ? 'bg-stockBg' : '',
        kind === SERVICE_STRING.realEstate ? 'bg-estateBg' : '',
        kind === SERVICE_STRING.business ? 'bg-businessBg' : '',
        'absolute left-0 -z-20 w-full overflow-hidden'
      )}
      style={{
        height: `${curHeight}px`,
      }}>
      {randomArray?.map((element, index) => (
        <Arcorn
          key={index}
          kind={kind}
          randomTop={element.randomTop}
          randomLeft={element.randomLeft}
          randomDeg={element.randomDeg}></Arcorn>
      ))}
    </div>
  );
}
