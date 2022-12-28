import React from 'react';
import Image from 'next/image';
import Arcorns from '../public/images/Acorns.png';

export interface ArcornProps {
  randomLeft: number;
  randomTop: number;
  randomDeg: number;
}

export default function Arcorn({
  randomLeft,
  randomTop,
  randomDeg,
}: ArcornProps) {
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
        src={Arcorns}
        alt="arcorn Image"
        className="object-contain"
        layout="fill"
      ></Image>
    </div>
  );
}
