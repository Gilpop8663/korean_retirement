import React from 'react';
import Image from 'next/image';
import { RetirementResultProps } from 'pages';
import KaKaoShareButton from './KaKaoShareButton';
import { KindProps } from './ArcornBackground';
import { cls } from '@libs/utils';
import { SERVICE_MESSAGE, SERVICE_STRING } from 'constant';
import RegionalResult from './RegionalResult';
import Copyright from './Copyright';

interface ResultProps {
  result: RetirementResultProps;
  kind: KindProps;
  onCopyAndShareClick: () => void;
  onResetClick: () => void;
  isRich: boolean;
}

export default function ResultScreen({
  result,
  kind,
  isRich,
  onCopyAndShareClick,
  onResetClick,
}: ResultProps) {
  return (
    <div className="relative mx-auto flex max-w-lg justify-center">
      <div className="flex h-full  max-w-lg flex-col items-center  pt-7 font-bareunHipi ">
        <div className="relative mx-auto h-96 w-96 small:w-80 tall:w-80 long:w-96">
          <Image
            className="object-contain"
            src={result.imageSrc.character}
            alt="character"
            layout="fill"></Image>
        </div>
        <div className="relative">
          <div className="relative  flex w-full items-center justify-center">
            <div className="relative h-24 w-80">
              <Image
                src={result.imageSrc.rectangle}
                alt="rectangle"
                layout="fill"
                className="object-contain"></Image>
            </div>
            <span
              className={cls(
                kind === SERVICE_STRING.minimum
                  ? 'stroke-minimumText text-minimumText'
                  : '',
                kind === SERVICE_STRING.proper
                  ? 'stroke-properText text-properText'
                  : '',
                kind === SERVICE_STRING.luxury
                  ? 'stroke-luxuryText text-luxuryText'
                  : '',
                kind === SERVICE_STRING.stock
                  ? 'stroke-stockText text-stockText'
                  : '',
                kind === SERVICE_STRING.realEstate
                  ? 'stroke-estateText text-estateText'
                  : '',
                kind === SERVICE_STRING.business
                  ? 'stroke-businessText text-businessText'
                  : '',
                'absolute top-3 text-[40px] font-extralight'
              )}
              style={{ WebkitTextStroke: `2px` }}>
              {result.koreanCategory}
            </span>
          </div>
          <div className="mx-auto mt-6 flex  w-96 flex-col rounded-3xl bg-white p-4 small:w-80 tall:w-80 long:w-96">
            <span className="whitespace-pre-wrap text-center text-2xl text-describtionText">
              {result.koreanDescription}
            </span>
            {!isRich && (
              <>
                <RegionalResult
                  kind={kind}
                  location="??????"
                  retirement={result.seoulCost}
                  isRich={isRich}
                />
                <RegionalResult
                  kind={kind}
                  location="?????????"
                  retirement={result.metropolitanCost}
                  isRich={isRich}
                />
                <RegionalResult
                  kind={kind}
                  location="???"
                  retirement={result.doCost}
                  isRich={isRich}
                />
              </>
            )}
          </div>
          <div
            onClick={() => onResetClick()}
            className={cls(
              kind === SERVICE_STRING.minimum ? 'bg-minimumRetry' : '',
              kind === SERVICE_STRING.proper ? 'bg-properSoft' : '',
              kind === SERVICE_STRING.luxury ? 'bg-luxuryRetry' : '',
              kind === SERVICE_STRING.stock ? 'bg-stockRetry' : '',
              kind === SERVICE_STRING.realEstate ? 'bg-estateRetry' : '',
              kind === SERVICE_STRING.business ? 'bg-businessRetry' : '',
              'bg-retry my-7 w-96 cursor-pointer rounded-3xl p-3  text-center  font-jua text-2xl text-white small:w-80 tall:w-80 long:w-96'
            )}>
            ????????????
          </div>
          <div className="mb-24 flex flex-col items-center">
            <span
              className={cls(
                kind === SERVICE_STRING.stock ? 'text-white' : '',
                kind === SERVICE_STRING.realEstate ? 'text-white' : '',
                kind === SERVICE_STRING.business ? 'text-white' : '',
                'mb-7 text-lg'
              )}>
              ?????? ????????????
            </span>
            <div className="flex w-48 justify-between">
              <KaKaoShareButton />
              <div
                onClick={() => onCopyAndShareClick()}
                className={cls(
                  kind === SERVICE_STRING.minimum ? 'bg-minimumText' : '',
                  kind === SERVICE_STRING.proper ? 'bg-properText' : '',
                  kind === SERVICE_STRING.luxury ? 'bg-luxuryText' : '',
                  kind === SERVICE_STRING.stock ? 'bg-stockText' : '',
                  kind === SERVICE_STRING.realEstate ? 'bg-estateText' : '',
                  kind === SERVICE_STRING.business ? 'bg-businessText' : '',
                  'flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-white'
                )}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </div>
            </div>
            {/* <div className="relative mt-7  h-96 w-full ">
              <ins
                className=" adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-2859963355226699"
                data-ad-slot="8186432034"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            </div> */}
          </div>
        </div>
      </div>
      <Copyright textColor={isRich ? 'white' : 'black'} />
    </div>
  );
}
