import React, { useEffect, useState } from 'react';
import { cls } from '@libs/utils';
import { useForm } from 'react-hook-form';
import Retirement from '@libs/Retirement';
import { useRouter } from 'next/router';
import Question from '@components/Question';
import {
  ERROR_MESSAGE,
  QUESTION_DATA,
  SERVICE_MESSAGE,
  SERVICE_NUMBER,
  SERVICE_STRING,
} from 'constant';
interface FormProps {
  target: string;
  age: number;
}

interface LocationProps {
  seoulCost: string;
  metropolitanCost: string;
  doCost: string;
}

export interface CalculateScoreProps {
  score: number;
  isRich: boolean;
}

export default function Index() {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<FormProps>();
  const [target, setTarget] = useState<string>('');
  const [isCalculate, setIsCalculate] = useState(false);
  const [isSurvey, setIsSurvey] = useState(false);
  const [result, setResult] = useState<LocationProps | null>(null);
  const [isResult, setIsResult] = useState(false);
  const [score, setScore] = useState(0);
  const [richCount, setRichCount] = useState(0);
  const [curIndex, setCurIndex] = useState(0);
  const router = useRouter();

  const onTargetClick = (content: string) => {
    setTarget(content);
  };

  const onValid = (value: FormProps) => {
    if (value.target === '') {
      setError('target', {
        type: 'custom',
        message: ERROR_MESSAGE.requiredTarget,
      });
      return;
    }
    setIsSurvey((prev) => !prev);
  };

  const onResetClick = () => {
    setResult(null);
    setIsResult(false);
    setIsCalculate(false);
    setTarget('');
    setIsSurvey(false);
    setRichCount(0);
    setScore(0);
    setCurIndex(0);
    router.replace('/');
    reset();
  };

  const ageValue = watch('age');

  const onCopyAndShareClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          alert(SERVICE_MESSAGE.successCopy);
        })
        .catch(() => {
          alert(SERVICE_MESSAGE.retryCopy);
        });
      return;
    }
    alert(SERVICE_MESSAGE.notAbleCopy);
  };

  const onCalculateScore = (score: number, isRich: boolean) => {
    if (isRich) {
      setRichCount((prev) => prev + 1);
    }
    setScore((prev) => prev + score);
    setCurIndex((prev) => prev + 1);

    if (curIndex === SERVICE_NUMBER.maxIndex) {
      setIsCalculate((prev) => !prev);
      const retirement = new Retirement(target, ageValue, score, richCount);
      
      setResult(retirement.getLuxuryCost());
      router.replace('/', `/?target=${target}&age=${ageValue}`);
      setIsResult((prev) => !prev);
    }
  };

  useEffect(() => {
    if (router.query.target && router.query.age) {
      const query = router.query;
      const queryTarget = query.target ? query.target.toString() : '';
      const queryAge = Number(query.age);
      setTarget(queryTarget);
      setValue('age', queryAge);
      setIsCalculate(true);
      const retirement = new Retirement(queryTarget, queryAge, 4, 4);
      setResult(retirement.getLuxuryCost());
      setIsResult(true);
    }
  }, [router.query]);

  useEffect(() => {
    clearErrors('target');
    setValue('target', target);
  }, [target]);

  useEffect(() => {
    console.log(score, richCount);
  }, [score, richCount]);

  return (
    <>
      <div className="">
        {/* <div className="h-full w-full">
        <Image
          className="relative object-cover"
          src="https://user-images.githubusercontent.com/80146176/209066243-d11d639f-2a9e-46f1-9399-0abfc9a4d8b2.jpg"
          alt="bg"
          layout="fill"></Image>
      </div> */}
        <div>
          <div className={cls(isSurvey || isResult ? 'hidden' : '')}>
            <div className="mb-12 text-center text-2xl font-bold">
              내 은퇴 자금을 알아보자
            </div>
            <div className="mb-12 text-xl font-semibold">
              당신은 개인인가요 부부인가요?
            </div>
            <div className="flex justify-between">
              <div
                onClick={() => onTargetClick(SERVICE_STRING.alone)}
                className={cls(
                  target === SERVICE_STRING.alone ? 'ring-2' : '',
                  'rounded-md border bg-orange-200 p-6 text-lg '
                )}
              >
                개인
              </div>
              <div
                onClick={() => onTargetClick(SERVICE_STRING.couple)}
                className={cls(
                  target === SERVICE_STRING.couple ? 'ring-2' : '',
                  'rounded-md border bg-orange-200 p-6 text-lg '
                )}
              >
                부부
              </div>
            </div>
            <div className="my-5 text-lg  text-red-500">
              {errors.target && `${errors.target.message}`}
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
                placeholder="나이를 적어주세요"
                className="w-full border p-3 focus:outline-none focus:ring-2"
              />
              <div className="my-5 text-lg  text-red-500">
                {errors.age && `${errors.age.message}`}
              </div>

              <button className="mt-12 flex w-full items-center justify-center rounded-md border-2 p-2 ">
                계산하러 가기
              </button>
            </form>
          </div>
          {/* {isCalculate && !isResult && (
          <div className="mt-36 flex items-center justify-center text-lg">
            <LoadingSpinner></LoadingSpinner>
            계산중입니다.
          </div>
        )} */}
          {isResult && (
            <div>
              <h2>{`${
                target === SERVICE_STRING.alone ? '개인' : '부부'
              } 의 경우 나이 ${ageValue} 살에 은퇴한다면`}</h2>
              <div className="py-8">
                <div>최소 노후 생활비</div>
                <div className="flex flex-col">
                  <span>{`서울 : ${result?.seoulCost}`}</span>
                  <span>{`광역시 : ${result?.metropolitanCost}`}</span>
                  <span>{`도 : ${result?.doCost}`}</span>
                </div>
              </div>
              <div
                onClick={() => onCopyAndShareClick()}
                className=" my-6 cursor-pointer rounded-full bg-orange-50 p-8 hover:bg-orange-200"
              >
                공유하기
              </div>
              <div
                onClick={() => onResetClick()}
                className=" my-6 cursor-pointer rounded-full bg-green-50 p-8 hover:bg-green-200"
              >
                다시 해보기
              </div>
            </div>
          )}
        </div>
      </div>
      {isSurvey &&
        QUESTION_DATA.map(
          (element, index) =>
            curIndex === index && (
              <Question
                key={index}
                question={element.question}
                imageSrc={element.imageSrc}
                answers={element.answers}
                page={index + 1}
                onCalculateScore={onCalculateScore}
              ></Question>
            )
        )}
    </>
  );
}
