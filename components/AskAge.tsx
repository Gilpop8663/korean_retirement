import React from 'react';
import inputAge from '@public/images/input_age.png';
import Image from 'next/image';
import {
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { ERROR_MESSAGE, SERVICE_NUMBER } from 'constant';
import { FormProps } from 'pages';

interface AskAgeProps {
  errors: Partial<
    FieldErrorsImpl<{
      age: number;
    }>
  >;
  handleSubmit: UseFormHandleSubmit<FormProps>;
  register: UseFormRegister<FormProps>;
  onAgeValid: (value: FormProps) => void;
}

export default function AskAge({
  handleSubmit,
  register,
  onAgeValid,
  errors,
}: AskAgeProps) {
  return (
    <form
      onSubmit={handleSubmit(onAgeValid)}
      className=" relative z-20  flex h-screen w-full  flex-col px-5 font-bareunHipi text-textColor"
    >
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
          {...register('age', {
            required: {
              value: true,
              message: ERROR_MESSAGE.requiredAge,
            },
            min: {
              value: SERVICE_NUMBER.minAge,
              message: ERROR_MESSAGE.minAge,
            },
            max: {
              value: SERVICE_NUMBER.maxAge,
              message: ERROR_MESSAGE.maxAge,
            },
          })}
          min={SERVICE_NUMBER.minAge}
          max={SERVICE_NUMBER.maxAge}
          type="number"
          className="relative -top-2 mx-36 w-full text-center text-2xl text-ageColor placeholder:text-ageColor focus:outline-none"
          placeholder="나이를 입력해 주세요"
        ></input>
      </div>
      <div className="my-5 text-center  text-lg text-red-500">
        {errors.age && `${errors.age.message}`}
      </div>
      <button className="mx-36 mt-24 cursor-pointer rounded-3xl p-3 text-center font-jua text-3xl text-textColor transition-colors hover:bg-ageColor hover:text-white">
        제출하기
      </button>
    </form>
  );
}
