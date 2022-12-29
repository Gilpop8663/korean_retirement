import AskAge from '@components/AskAge';
import AskCouple from '@components/AskCouple';
import Question from '@components/Question';
import Result from '@components/Result';
import SplashScreen from '@components/SplashScreen';
import { QUESTION_DATA } from 'constant';
import React from 'react';

export default function test() {
  return (
    <div className="mx-auto h-full max-w-xl ">
      {/* <Question
        answers={QUESTION_DATA[0].answers}
        question={QUESTION_DATA[0].question}
        page={1}
      ></Question> */}
      <Result></Result>
    </div>
  );
}
