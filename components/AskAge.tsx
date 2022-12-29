import React from 'react';
import inputAge from '@public/images/input_age.png';
import Image from 'next/image';

export default function AskAge() {
  return (
    <div className=" relative z-20  flex h-screen w-full  flex-col px-5 font-bareunHipi text-textColor">
      <div className="z-10 mt-28 flex w-full items-center justify-center whitespace-pre-wrap rounded-full bg-white p-2 py-6 text-center text-2xl">
        {`은퇴는 몇살에 하는게 좋을까?`}
      </div>
      <div className="relative mt-20 flex h-24 items-center justify-center">
        <div className="absolute h-24 w-full px-4">
          <Image
            src={inputAge}
            alt="inputAge"
            className="object-contain"
            layout="fill"
          ></Image>
        </div>
        <input
          type="number"
          className="relative -top-2  text-center text-2xl text-ageColor placeholder:text-ageColor focus:outline-none"
          placeholder="나이를 입력해 주세요"
        ></input>
      </div>
    </div>
  );
}
