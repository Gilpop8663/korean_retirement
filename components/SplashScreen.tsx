import React, { useEffect, useState } from 'react';
import OutlineRectangle from '@public/images/outlineRectangle.png';
import Squirrel from '@public/images/squirrel.png';
import Image from 'next/image';

export default function SplashScreen() {
  return (
    <div className="justify-cente  flex h-screen max-w-lg flex-col items-center bg-bgColor">
      <div className="absolute top-72  z-20 flex w-full max-w-lg flex-col items-center justify-center">
        <div className="relative flex w-full items-center justify-center">
          <span className="absolute -top-9 left-32 font-bareunHipi text-base text-textColor">
            은퇴 이후, 얼마가 필요할까?
          </span>
          <div className="absolute z-0 h-[93px] w-[281px] ">
            <Image
              className="z-0"
              src={OutlineRectangle}
              alt="rectangle"
              layout="fill"
            ></Image>
          </div>
          <div className="absolute -top-16 right-32 z-0 h-[84px] w-[84px]">
            <Image
              className="z-0"
              src={Squirrel}
              alt="Squirrel"
              layout="fill"
            ></Image>
          </div>
          <span className="z-30 flex h-20 text-center font-bareunHipi text-[40px] font-semibold text-textColor">
            은퇴 자금 테스트
          </span>
        </div>
        <div className="mt-4 rounded-md bg-white p-1 text-center font-bareunHipi text-base">
          #은퇴자금 #미래준비 #파이어족
        </div>
      </div>
    </div>
  );
}
