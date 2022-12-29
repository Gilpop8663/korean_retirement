import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import waterBear from '@public/images/water_bear.png';
import blueRectangle from '@public/images/blue_rectangle.png';
import RegionalResult from './RegionalResult';
import kakao from '@public/images/kakao.png';
import waterBearBackground from '@public/images/water_bear_background.png';

export default function Result() {
  const [curHeight, setCurHeight] = useState(0);
  useEffect(() => {
    const height = document.documentElement.scrollHeight;
    console.log(height);
    setCurHeight(height);
  }, []);
  return (
    <>
      <div
        className={`absolute top-0 left-0 -z-10 w-full overflow-hidden`}
        style={{
          height: `${curHeight}px`,
        }}
      >
        <Image
          src={waterBearBackground}
          alt="waterBearBackground"
          layout="fill"
          className="object-cover"
        ></Image>
      </div>
      <div className="flex h-full max-w-lg flex-col  items-center font-bareunHipi ">
        <div className="relative h-96 w-96">
          <Image
            className="object-contain"
            src={waterBear}
            alt="waterBear"
            layout="fill"
          ></Image>
        </div>
        <div className="flex w-full items-center justify-center ">
          <div className="relative h-24 w-full">
            <Image
              src={blueRectangle}
              alt="blueRectangle"
              layout="fill"
              className="object-contain"
            ></Image>
          </div>
          <span className="absolute text-[40px] font-bold text-waterBear ">
            극강의 효율 물곰형
          </span>
        </div>
        <div className="mt-9 flex  flex-col rounded-3xl bg-white p-4">
          <span className="whitespace-pre-wrap text-center text-2xl">
            {`극강의 효율을 자랑하는 물곰은\n생명체가 살수없는 우주에서도,\n생존할 수 있다고 합니다!\n\n최소한의 지출로 최고의 효율을 자랑하는\n물곰형의 최소 은퇴 자금은!`}
          </span>
          <RegionalResult location="서울" retirement="9,999,999,999" />
          <RegionalResult location="광역시" retirement="9,999,999,999" />
          <RegionalResult location="도" retirement="9,999,999,999" />
        </div>
        <div className="my-10 w-3/5 cursor-pointer rounded-3xl bg-retry p-3  text-center  font-jua text-2xl text-white">
          다시하기
        </div>
        <div className="mb-32 flex flex-col items-center">
          <span className="mb-8 text-lg">결과 공유하기</span>
          <div className="flex w-48 justify-between">
            <div className="relative h-14 w-14 cursor-pointer">
              <Image
                src={kakao}
                alt="kakao"
                layout="fill"
                className="object-contain"
              ></Image>
            </div>
            <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-waterBear text-white">
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
    </>
  );
}
