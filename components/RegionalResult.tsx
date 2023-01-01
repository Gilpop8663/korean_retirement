import { cls } from '@libs/utils';
import { SERVICE_STRING } from 'constant';
import React from 'react';
import { KindProps } from './ArcornBackground';

interface RegionalResultProps {
  location: '서울' | '광역시' | '도';
  retirement: string;
  kind: KindProps;
}

export default function RegionalResult({
  kind,
  location,
  retirement,
}: RegionalResultProps) {
  return (
    <div className="relative">
      <div
        className={cls(
          kind === SERVICE_STRING.minimum
            ? 'bg-minimumSoft text-minimumSoft'
            : '',
          kind === SERVICE_STRING.proper ? 'bg-properSoft text-properSoft' : '',
          kind === SERVICE_STRING.luxury ? 'bg-luxurySoft text-luxurySoft' : '',
          kind === SERVICE_STRING.stock ? 'bg-stockText text-stockText' : '',
          'relative top-3 left-3 -z-0 w-fit rounded-full p-1 text-xs'
        )}
      >
        여기에서 산다면
      </div>
      <span className="absolute top-3 left-4 z-10 text-xs text-white">
        여기에서 산다면
      </span>
      <div
        className={cls(
          kind === SERVICE_STRING.minimum ? 'bg-minimumSoft' : '',
          kind === SERVICE_STRING.proper ? 'bg-properSoft' : '',
          kind === SERVICE_STRING.luxury ? 'bg-luxurySoft' : '',
          kind === SERVICE_STRING.stock ? 'bg-stockText' : '',
          'relative flex items-center justify-between rounded-full p-1 pr-3 text-2xl'
        )}
      >
        <span
          className={cls(
            kind === SERVICE_STRING.minimum ? 'text-minimumText' : '',
            kind === SERVICE_STRING.proper ? 'text-properText' : '',
            kind === SERVICE_STRING.luxury ? 'text-luxuryText' : '',
            kind === SERVICE_STRING.stock ? 'text-stockText' : '',
            ' relative flex items-center justify-center rounded-full bg-white px-3 text-center font-semibold'
          )}
        >
          <span className="relative bottom-[2px] right-[2px]">{location}</span>
        </span>
        <span className="text-black">{retirement}원</span>
      </div>
    </div>
  );
}
