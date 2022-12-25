import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { cls } from '@libs/utils';
import { useForm } from 'react-hook-form';
import LoadingSpinner from '@components/LodingSpinner';
import Retirement from '@libs/Retirement';
import { CONSTANT } from '@libs/constant';
interface FormProps {
  target: string;
  age: number;
}

interface LocationProps {
  seoulCost: string;
  metropolitanCost: string;
  doCost: string;
}
interface ResultProps {
  minimum: LocationProps;
  proper: LocationProps;
}

export default function Index() {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<FormProps>();
  const [target, setTarget] = useState<string>('');
  const [isCalculate, setIsCalculate] = useState(false);
  const [result, setResult] = useState<ResultProps | null>(null);
  const [isResult, setIsResult] = useState(false);

  const onTargetClick = (content: string) => {
    setTarget(content);
  };

  const onValid = (value: FormProps) => {
    if (value.target === '') {
      setError('target', {
        type: 'custom',
        message: '개인 혹은 부부를 선택해주세요.',
      });
      return;
    }
    setIsCalculate((prev) => !prev);

    const retirement = new Retirement(value.target, value.age);
    console.log(retirement.getMinimumCost());
    console.log(retirement.getProperCost());
    setResult({
      minimum: retirement.getMinimumCost(),
      proper: retirement.getProperCost(),
    });
    setIsResult((prev) => !prev);
  };

  useEffect(() => {
    console.log(target);
    clearErrors('target');
    setValue('target', target);
  }, [target]);

  return (
    <div className="m-6">
      {/* <div className="h-full w-full">
        <Image
          className="relative object-cover"
          src="https://user-images.githubusercontent.com/80146176/209066243-d11d639f-2a9e-46f1-9399-0abfc9a4d8b2.jpg"
          alt="bg"
          layout="fill"></Image>
      </div> */}
      <div>
        <div className="mb-12 text-center text-2xl font-bold">
          내 은퇴 자금을 알아보자
        </div>

        <div className={cls(isCalculate ? 'hidden' : '')}>
          <div className="mb-12 text-xl font-semibold">
            당신은 개인인가요 부부인가요?
          </div>
          <div className="flex justify-between">
            <div
              onClick={() => onTargetClick(CONSTANT.alone)}
              className={cls(
                target === CONSTANT.alone ? 'ring-2' : '',
                'rounded-md border bg-orange-200 p-6 text-lg '
              )}
            >
              개인
            </div>
            <div
              onClick={() => onTargetClick(CONSTANT.couple)}
              className={cls(
                target === CONSTANT.couple ? 'ring-2' : '',
                'rounded-md border bg-orange-200 p-6 text-lg '
              )}
            >
              부부
            </div>
          </div>
          <div className="my-5 text-lg  text-red-500">
            {errors.target && `[ERROR] ${errors.target.message}`}
          </div>

          <form
            onSubmit={handleSubmit(onValid)}
            className="w-full items-center justify-center"
          >
            <div className="mt-12 mb-12 text-xl font-semibold">
              은퇴할 나이를 적어주세요
            </div>
            <input
              type="number"
              min={1}
              max={99}
              required
              {...register('age', {
                required: {
                  value: true,
                  message: '은퇴할 나이를 입력해주세요.',
                },
                min: {
                  value: 1,
                  message: '1살 이상으로 입력해야 합니다.',
                },
                max: {
                  value: 99,
                  message: '99살 이하로 입력해야 합니다.',
                },
              })}
              placeholder="나이를 적어주세요"
              className="w-full border p-3 focus:outline-none focus:ring-2"
            />
            <div className="my-5 text-lg  text-red-500">
              {errors.age && `[ERROR] ${errors.age.message}`}
            </div>

            <button className="mt-12 flex w-full items-center justify-center rounded-md border-2 p-2 ">
              계산하러 가기
            </button>
          </form>
        </div>

        {isCalculate && !isResult && (
          <div className="mt-36 flex items-center justify-center text-lg">
            <LoadingSpinner></LoadingSpinner>
            계산중입니다.
          </div>
        )}
        {isResult && (
          <div>
            <div className="py-8">
              <div>최소 노후 생활비</div>
              <div className="flex flex-col">
                <span>{`서울 : ${result?.minimum.seoulCost}`}</span>
                <span>{`광역시 : ${result?.minimum.metropolitanCost}`}</span>
                <span>{`도 : ${result?.minimum.doCost}`}</span>
              </div>
            </div>
            <div className="py-8">
              <div>적정 노후 생활비</div>
              <div className="flex flex-col">
                <span>{`서울 : ${result?.proper.seoulCost}`}</span>
                <span>{`광역시 : ${result?.proper.metropolitanCost}`}</span>
                <span>{`도 : ${result?.proper.doCost}`}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
