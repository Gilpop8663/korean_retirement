import ArcornBackground, { KindProps } from '@components/ArcornBackground';
import AskAge from '@components/AskAge';
import AskCouple from '@components/AskCouple';
import Copyright from '@components/Copyright';
import GoogleAdsense from '@components/GoogleAdsense';
import Question from '@components/Question';
import ResultScreen from '@components/ResultScreen';
import SplashScreen from '@components/SplashScreen';
import Retirement from '@libs/Retirement';
import {
  QUESTION_DATA,
  SERVICE_MESSAGE,
  SERVICE_NUMBER,
  SERVICE_STRING,
} from 'constant';
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

export default function Index() {
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
  const [isRich, setIsRich] = useState(false);
  const [isInit, setIsInit] = useState(false);

  const onStartClick = () => {
    setIsStart(prev => !prev);
    setIsAskCouple(prev => !prev);
  };

  const onAskCoupleClick = (answer: string) => {
    setTarget(answer);
    setIsAskAge(prev => !prev);
    setIsAskCouple(prev => !prev);
  };

  const onAgeValid = (value: FormProps) => {
    setAge(value.age);
    setIsAskAge(prev => !prev);
    setIsQuetstion(prev => !prev);
  };

  const onCalculateScore = (answerScore: number, isRich: boolean) => {
    if (isRich) {
      setRichCount(prev => {
        const number = prev + 1;
        return number;
      });
    }
    setScore(prev => prev + answerScore);
    setCurIndex(prev => prev + 1);
  };

  const getDummyTextarea = () => {
    const textarea = document.createElement('textarea') as HTMLTextAreaElement;
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.display = 'fixed';

    return textarea;
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

    const rootElement = document.body;
    const textarea = getDummyTextarea();
    textarea.value = window.location.href;

    rootElement.appendChild(textarea);

    textarea.focus();
    textarea.select();

    const successChk = document.execCommand('copy');
    rootElement.removeChild(textarea);

    if (!successChk) {
      alert(SERVICE_MESSAGE.notAbleCopy);
    } else {
      alert(SERVICE_MESSAGE.successCopy);
    }
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
    setIsRich(false);

    router.replace('/');
    reset();
  };

  useEffect(() => {
    if (curIndex === SERVICE_NUMBER.maxIndex) {
      setIsQuetstion(prev => !prev);

      const retirement = new Retirement(target, age, score, richCount);
      setResult(retirement.getRetirementResult());
      const category = retirement.getCategory();
      setCategoryKind(category);
      setIsRich(retirement.getIsRich());
      router.replace('/', `/?target=${target}&age=${age}&category=${category}`);

      setIsResult(prev => !prev);
    }
  }, [curIndex]);

  useEffect(() => {
    const height = document.documentElement.scrollHeight;
    setCurHeight(height);
  }, [categoryKind]);

  const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY as string;

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_KEY);
    }
    setIsInit(true);
  }, []);

  // 결과 공유
  useEffect(() => {
    if (
      !router.query ||
      !router.query.target ||
      !router.query.age ||
      !router.query.category
    ) {
      return;
    }
    const { target: targetValue, age: ageValue, category } = router.query;
    const retirement = new Retirement(
      targetValue.toString(),
      Number(ageValue.toString()),
      0,
      0
    );

    retirement.setCategory(category.toString());
    const categoryName = retirement.getCategory();
    setCategoryKind(categoryName);
    setResult(retirement.getRetirementResult());
    setIsRich(retirement.getIsRich());

    setIsStart(false);
    setIsAskCouple(false);
    setIsAskAge(false);
    setIsQuetstion(false);
    setIsResult(prev => !prev);
  }, [router]);

  useEffect(() => {
    if (
      categoryKind === SERVICE_STRING.stock ||
      categoryKind === SERVICE_STRING.business ||
      categoryKind === SERVICE_STRING.realEstate
    ) {
      setIsRich(true);
    }
  }, [categoryKind]);

  return (
    <div className="mx-auto h-full max-w-xl">
      <ArcornBackground curHeight={curHeight} kind={categoryKind} />
      {isStart && <SplashScreen isInit={isInit} onStartClick={onStartClick} />}
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
                key={element.question}
                answers={element.answers}
                question={element.question}
                page={index}
                onCalculateScore={onCalculateScore}
              />
            )
        )}
      {isResult && result && (
        <ResultScreen
          kind={categoryKind}
          result={result}
          isRich={isRich}
          onResetClick={onResetClick}
          onCopyAndShareClick={onCopyAndShareClick}
        />
      )}
      {!isResult && !result && (
        <>
          {isInit && <GoogleAdsense />}
          <Copyright textColor="black" />
        </>
      )}
    </div>
  );
}
