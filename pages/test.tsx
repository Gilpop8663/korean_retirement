import AskAge from '@components/AskAge';
import AskCouple from '@components/AskCouple';
import Question from '@components/Question';
import Result from '@components/Result';
import SplashScreen from '@components/SplashScreen';
import { QUESTION_DATA, SERVICE_STRING } from 'constant';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export interface FormProps {
  age: number;
}

export default function test() {
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
  const [age, setAge] = useState<number | null>(null);

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
    console.log(value);
  };
  return (
    <div className="mx-auto h-full max-w-xl ">
      {/* <Question
        answers={QUESTION_DATA[0].answers}
        question={QUESTION_DATA[0].question}
        page={1}
      ></Question> */}
      {/* <Result></Result> */}
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
    </div>
  );
}
