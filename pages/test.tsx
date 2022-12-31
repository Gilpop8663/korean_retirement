import AskAge from '@components/AskAge';
import AskCouple from '@components/AskCouple';
import Question from '@components/Question';
import Result from '@components/Result';
import SplashScreen from '@components/SplashScreen';
import Retirement from '@libs/Retirement';
import { QUESTION_DATA, SERVICE_NUMBER, SERVICE_STRING } from 'constant';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export interface FormProps {
  age: number;
}

interface LocationProps {
  seoulCost: string;
  metropolitanCost: string;
  doCost: string;
}

export default function test() {
  const router = useRouter();
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
  const [isStart, setIsStart] = useState(true);
  const [isAskCouple, setIsAskCouple] = useState(false);
  const [isAskAge, setIsAskAge] = useState(false);
  const [target, setTarget] = useState<string>('');
  const [age, setAge] = useState<number>(1);
  const [isQuestion, setIsQuetstion] = useState(false);
  const [curIndex, setCurIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [richCount, setRichCount] = useState(0);
  const [isResult, setIsResult] = useState(false);
  const [koreanCategory, setKoreanCategory] = useState('');
  const [result, setResult] = useState<LocationProps | null>(null);

  const onStartClick = () => {
    setIsStart((prev) => !prev);
    setIsAskCouple((prev) => !prev);
  };

  const onAskCoupleClick = (answer: string) => {
    setTarget(answer);
    setIsAskAge((prev) => !prev);
    setIsAskCouple((prev) => !prev);
  };

  const onAgeValid = (value: FormProps) => {
    setAge(value.age);
    setIsAskAge((prev) => !prev);
    setIsQuetstion((prev) => !prev);
  };

  const onCalculateResult = (retirement: Retirement, category: string) => {
    switch (category) {
      case SERVICE_STRING.minimum:
        setResult(retirement.getMinimumCost());
        break;
      case SERVICE_STRING.proper:
        setResult(retirement.getProperCost());
        break;
      case SERVICE_STRING.luxury:
        setResult(retirement.getLuxuryCost());
        break;
      default:
      // 이벤트
    }
  };

  const onCalculateScore = (answerScore: number, isRich: boolean) => {
    if (isRich) {
      setRichCount((prev) => (prev += 1));
    }
    setScore((prev) => prev + answerScore);
    setCurIndex((prev) => prev + 1);

    if (curIndex === SERVICE_NUMBER.maxIndex) {
      setIsQuetstion((prev) => !prev);

      // const retirement = new Retirement(target, age, score, richCount);
      // const category = retirement.getCategory();
      // console.log(category);
      // onCalculateResult(retirement, category);
      // setKoreanCategory(retirement.getKoreanCategory());
      // router.replace('/', `/?target=${target}&age=${age}&category=${category}`);
      setIsResult((prev) => !prev);
    }
  };

  return (
    <div className="mx-auto h-full max-w-xl ">
      {isStart && <SplashScreen onStartClick={onStartClick} />}
      {isAskCouple && <AskCouple onAskCoupleClick={onAskCoupleClick} />}
      {isAskAge && (
        <AskAge
          errors={errors}
          handleSubmit={handleSubmit}
          register={register}
          onAgeValid={onAgeValid}
        />
      )}
      {isQuestion &&
        QUESTION_DATA.map(
          (element, index) =>
            index === curIndex && (
              <Question
                key={index}
                answers={element.answers}
                question={element.question}
                page={index}
                onCalculateScore={onCalculateScore}
              ></Question>
            )
        )}
      {isResult && <Result></Result>}
    </div>
  );
}
