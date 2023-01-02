import React from 'react';
import Image from 'next/image';
import { getArcornsImageSrc } from 'constant';
import { KindProps } from './ArcornBackground';

export interface ArcornProps {
  randomLeft: number;
  randomTop: number;
  randomDeg: number;
}

interface ArcornKindProps {
  randomLeft: number;
  randomTop: number;
  randomDeg: number;
  kind: KindProps;
}

export default function Arcorn({
  randomLeft,
  randomTop,
  randomDeg,
  kind,
}: ArcornKindProps) {
  return (
    <div
      className={`absolute h-10 w-10 `}
      style={{
        left: `${randomLeft}px`,
        top: `${randomTop}px`,
        rotate: `${randomDeg}deg`,
      }}
    >
      <Image
        src={getArcornsImageSrc(kind)}
        alt="arcorn Image"
        className="object-contain"
        layout="fill"
      ></Image>
    </div>
  );
}
