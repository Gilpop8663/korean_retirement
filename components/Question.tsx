import Image from 'next/image';
import React from 'react';

interface QuestionProps {
  question: string;
  answers: AnswerProps[];
  page: number;
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
    <div className="grid h-screen grid-rows-2">
      <div className="relative">
        <Image
          className="aspect-auto object-cover"
          src="https://user-images.githubusercontent.com/80146176/209801852-816199db-6d59-463d-b1c9-4d74825f2384.png"
          alt="questionImage"
          layout="fill"
        ></Image>
      </div>
      <div className="grid grid-rows-5">
        <div className="relative row-span-1 mx-8 my-3 flex items-center justify-center">
          <div className="absolute right-0 top-0 text-xs">{page}/4</div>
          <h2 className="text-lg">{question}</h2>
        </div>
        <div className="row-span-4 mx-8 flex flex-col items-center justify-between py-6">
          {answers.map((answer, index) => (
            <div
              key={index}
              onClick={() => onCalculateScore(answer.score, answer.rich)}
              className="w-full cursor-pointer rounded-md bg-answer py-4 text-center text-white transition-colors hover:bg-answerHover"
            >
              {answer.message}
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}
