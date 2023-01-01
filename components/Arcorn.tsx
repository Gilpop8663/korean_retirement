import React from 'react';
import Image from 'next/image';
import { ARCORNS_IMAGE_SOURCE } from 'constant';
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
        src={ARCORNS_IMAGE_SOURCE[kind]}
        alt="arcorn Image"
        className="object-contain"
        layout="fill"
      ></Image>
    </div>
  );
}
