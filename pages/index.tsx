import ArcornBackground, { KindProps } from '@components/ArcornBackground';
import AskAge from '@components/AskAge';
import AskCouple from '@components/AskCouple';
import Question from '@components/Question';
import Result from '@components/Result';
import SplashScreen from '@components/SplashScreen';
import Retirement from '@libs/Retirement';
import { QUESTION_DATA, SERVICE_MESSAGE, SERVICE_NUMBER } from 'constant';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export interface FormProps {
  age: number;
}

export interface RetirementResultProps {
  seoulCost: string;
  metropolitanCost: string;
  doCost: string;
  koreanCategory: string;
  koreanDescription: string;
  imageSrc: {
    background: string;
    character: string;
    rectangle: string;
  };
}

export default function test() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>();
  const [curHeight, setCurHeight] = useState(0);
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
  const [result, setResult] = useState<RetirementResultProps | null>(null);
  const [categoryKind, setCategoryKind] = useState<KindProps>('NORMAL');

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

  const onCalculateScore = (answerScore: number, isRich: boolean) => {
    if (isRich) {
      setRichCount((prev) => (prev += 1));
    }
    setScore((prev) => prev + answerScore);
    setCurIndex((prev) => prev + 1);
  };

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

  const onResetClick = () => {
    setIsStart(true);
    setIsAskCouple(false);
    setIsAskAge(false);
    setIsQuetstion(false);
    setIsResult(false);

    setCategoryKind('NORMAL');
    setCurHeight(0);

    setResult(null);
    setTarget('');
    setAge(0);
    setRichCount(0);
    setScore(0);
    setCurIndex(0);

    router.replace('/');
    reset();
  };

  useEffect(() => {
    if (curIndex === SERVICE_NUMBER.maxIndex) {
      setIsQuetstion((prev) => !prev);

      const retirement = new Retirement(target, age, score, richCount);
      setResult(retirement.getRetirementResult());
      setCategoryKind(retirement.getCategory());
      const category = retirement.getCategory();
      router.replace('/', `/?target=${target}&age=${age}&category=${category}`);

      setIsResult((prev) => !prev);
    }
  }, [curIndex]);

  useEffect(() => {
    const height = document.documentElement.scrollHeight;
    setCurHeight(height);
  }, [categoryKind]);

  const KAKAO_KEY = '7fdda327ceac4a3a6a961e4192d57fab';

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_KEY);
    }
  }, []);

  return (
    <div className="mx-auto h-full max-w-xl ">
      <ArcornBackground
        curHeight={curHeight}
        kind={categoryKind}
      ></ArcornBackground>
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
      {isResult && result && (
        <Result
          kind={categoryKind}
          result={result}
          onResetClick={onResetClick}
          onCopyAndShareClick={onCopyAndShareClick}
        ></Result>
      )}
    </div>
  );
}
