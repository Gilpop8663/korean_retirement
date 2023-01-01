import Image from 'next/image';
import React from 'react';

interface QuestionProps {
  question: string;
  answers: AnswerProps[];
  page: number;
  // onCalculateScore?: any;
  onCalculateScore: (score: number, isRich: boolean) => void;
}

interface AnswerProps {
  message: string;
  score: number;
  rich: boolean;
}

export default function Question({
  question,
  answers,
  page,
  onCalculateScore,
}: QuestionProps) {
  return (
    <div className=" relative z-20  flex h-screen flex-col  px-5 font-bareunHipi text-textColor">
      <div className="z-10 mt-28 flex w-full items-center justify-center whitespace-pre-wrap rounded-full bg-white p-2 text-center text-2xl">
        {question}
      </div>
      <div className="mt-20 flex flex-col items-center space-y-6">
        {answers.map((answer, index) => (
          <span
            onClick={() => onCalculateScore(answer.score, answer.rich)}
            className="w-full cursor-pointer rounded-2xl bg-white p-2 px-2 text-center text-2xl text-textColor outline-dashed outline-4 outline-ageColor"
            key={index}
          >
            {answer.message}
          </span>
        ))}
      </div>
    </div>
  );
}
