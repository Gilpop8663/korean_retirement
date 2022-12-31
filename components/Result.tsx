import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import RegionalResult from './RegionalResult';
import kakao from '@public/images/kakao.png';
import { RetirementResultProps } from 'pages';
import KaKaoShareButton from './KaKaoShareButton';

interface ResultProps {
  curHeight: number;
  result: RetirementResultProps;
  onCopyAndShareClick: () => void;
  onResetClick: () => void;
}

export default function Result({
  curHeight,
  result,
  onCopyAndShareClick,
  onResetClick,
}: ResultProps) {
  return (
    <div className="relative flex max-w-lg justify-center">
      <div
        className={`absolute top-0 left-0 -z-10 w-full overflow-hidden`}
        style={{
          height: `${curHeight}px`,
        }}
      >
        <Image
          src={result.imageSrc.background}
          alt="background"
          layout="fill"
          className="object-contain"
        ></Image>
      </div>
      <div className="flex h-full  flex-col items-center  pt-7 font-bareunHipi ">
        <div className="relative h-96 w-96 ">
          <Image
            className="object-contain"
            src={result.imageSrc.character}
            alt="character"
            layout="fill"
          ></Image>
        </div>
        <div className="relative">
          <div className="relative  flex w-full items-center justify-center">
            <div className="relative h-24 w-80">
              <Image
                src={result.imageSrc.rectangle}
                alt="rectangle"
                layout="fill"
                className="object-contain"
              ></Image>
            </div>
            <span
              className="absolute top-3 stroke-waterBear text-[40px] font-extralight text-waterBear"
              style={{ WebkitTextStroke: `2px` }}
            >
              {result.koreanCategory}
            </span>
          </div>
          <div className="mt-6 flex w-96  flex-col rounded-3xl bg-white p-4">
            <span className="whitespace-pre-wrap text-center text-2xl">
              {result.koreanDescription}
            </span>
            <RegionalResult location="서울" retirement={result.seoulCost} />
            <RegionalResult
              location="광역시"
              retirement={result.metropolitanCost}
            />
            <RegionalResult location="도" retirement={result.doCost} />
          </div>
          <div
            onClick={() => onResetClick()}
            className="my-7 w-96 cursor-pointer rounded-3xl bg-retry p-3  text-center  font-jua text-2xl text-white"
          >
            다시하기
          </div>
          <div className="mb-24 flex flex-col items-center">
            <span className="mb-7 text-lg">결과 공유하기</span>
            <div className="flex w-48 justify-between">
              <KaKaoShareButton />
              <div
                onClick={() => onCopyAndShareClick()}
                className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-waterBear text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
