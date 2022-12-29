import React from 'react';

interface RegionalResultProps {
  location: '서울' | '광역시' | '도';
  retirement: string;
}

export default function RegionalResult({
  location,
  retirement,
}: RegionalResultProps) {
  return (
    <div className="relative">
      <div className="relative top-3 left-3 -z-0 w-fit rounded-full bg-softWaterBear p-1 text-xs text-softWaterBear">
        여기에서 산다면
      </div>
      <span className="absolute top-3 left-4 z-10 text-xs text-white">
        여기에서 산다면
      </span>
      <div className="relative flex items-center justify-between rounded-full bg-softWaterBear p-1 pr-3 text-2xl">
        <span className="relative flex items-center justify-center rounded-full bg-white px-3 text-center font-semibold text-waterBear">
          <span className="relative bottom-[2px] right-[2px]">{location}</span>
        </span>
        <span>{retirement}원</span>
      </div>
    </div>
  );
}
