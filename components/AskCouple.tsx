import Image from 'next/image';
import React from 'react';
import OX from '@public/images/ox_rectangle.png';
import { SERVICE_STRING } from 'constant';

interface AskCoupleProps {
  onAskCoupleClick: (answer: string) => void;
}

export default function AskCouple({ onAskCoupleClick }: AskCoupleProps) {
  return (
    <div className=" relative z-20  flex h-screen flex-col  px-5 font-bareunHipi text-textColor">
      <div className="z-10 mt-28 flex w-full items-center justify-center whitespace-pre-wrap rounded-full bg-white p-2 text-center text-2xl">
        {`은퇴 후,\n당신의 노년엔 함께하는 이가 있나요?`}
      </div>
      <div className="mt-32 flex justify-between px-16">
        <div
          onClick={() => onAskCoupleClick(SERVICE_STRING.couple)}
          className="relative flex h-28 w-28 cursor-pointer items-center justify-center"
        >
          <div className="relative h-28 w-28">
            <Image src={OX} className="z-10" alt="ox" layout="fill"></Image>
          </div>
          <span className="absolute z-20 text-[50px] font-bold ">O</span>
        </div>
        <div className="relative flex h-28 w-28 cursor-pointer items-center justify-center">
          <div
            onClick={() => onAskCoupleClick(SERVICE_STRING.alone)}
            className="relative h-28 w-28"
          >
            <Image src={OX} className="z-10" alt="ox" layout="fill"></Image>
          </div>
          <span className="absolute z-20 text-[50px] font-bold ">X</span>
        </div>
      </div>
    </div>
  );
}
