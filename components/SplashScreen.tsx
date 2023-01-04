import React from 'react';
import OutlineRectangle from '@public/images/outlineRectangle.png';
import Squirrel from '@public/images/squirrel.png';
import Image from 'next/image';
import GoogleAdsense from './GoogleAdsense';

interface SplashScreenProps {
  onStartClick: () => void;
  isInit: boolean;
}

export default function SplashScreen({
  onStartClick,
  isInit,
}: SplashScreenProps) {
  return (
    <div className="flex h-screen max-w-lg flex-col items-center justify-center">
      <div className="absolute left-0 right-0 z-20 mx-auto flex w-full max-w-lg flex-col items-center justify-center small:top-32 tall:top-40 long:top-60">
        <div className="relative flex w-full items-center justify-center">
          <div className="relative z-0 h-[93px] w-[281px] ">
            <span className="absolute left-4 -top-7 rounded-md bg-white px-1 font-bareunHipi text-base text-textColor">
              은퇴 이후, 얼마가 필요할까?
            </span>
            <div className="absolute -top-16 right-4 z-20 h-[84px] w-[84px]">
              <Image
                className="z-0"
                src={Squirrel}
                alt="Squirrel"
                layout="fill"></Image>
            </div>
            <Image
              className="z-0"
              src={OutlineRectangle}
              alt="rectangle"
              layout="fill"></Image>
          </div>
          <span className="absolute z-30 flex h-20 text-center font-bareunHipi text-[40px] font-semibold text-textColor">
            은퇴 자금 테스트
          </span>
        </div>
        <div className="mt-4 rounded-md bg-white p-1 text-center font-bareunHipi text-base">
          #은퇴자금 #미래준비 #파이어족
        </div>
        <div
          onClick={() => onStartClick()}
          className="mt-24 cursor-pointer rounded-3xl p-3 font-jua text-3xl text-textColor transition-colors hover:bg-ageColor hover:text-white tall:mb-12 long:mb-24">
          시작하기
        </div>
        {/* {isInit && <GoogleAdsense />} */}
      </div>
    </div>
  );
}
