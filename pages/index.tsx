import type { NextPage } from "next";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useRouter } from "next/router";
// @ts-ignore
import { FullPage, Slide } from "react-full-page";

interface SectionProps {
  onClick: () => void;
}

function FirstSection({ onClick }: SectionProps) {
  return (
    <section className=" relative flex h-screen  flex-col justify-between bg-[#6E39E0] p-12 pb-24 text-white  sm:items-center  sm:p-12 sm:pt-20">
      <div className="flex w-full flex-col sm:pl-12 sm:pr-6 md:pl-24 md:pr-10 lg:pl-48 lg:pr-12 xl:pl-64  2xl:pl-96 ">
        <div className="pb-[50px]  font-blackHan text-2xl text-white sm:pb-12 sm:text-[40px]">
          취미 집사
        </div>
        <div className="flex items-start justify-between sm:items-center">
          <div className="flex flex-col items-start">
            <span className="whitespace-pre-wrap font-blackHan text-[70px] sm:text-[50px] lg:text-[70px] small:text-[32px] tall:text-[43px] ">
              {"다양한\n취미생활을\n즐기고 싶은\n당신에게"}
            </span>
            <span className="mt-2 whitespace-pre-wrap font-blackOps text-sm  sm:text-lg">
              {
                "반복적인 일상에 지쳐 버린 당신에게\n새로운 취미를 선사하는 취미집사 !"
              }
            </span>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="h-5 w-5 rounded-full border bg-white"></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
          </div>
        </div>
        <div
          className="mt-12 flex h-24 w-2/3 cursor-pointer items-center justify-center self-center rounded-full bg-white font-blackHan text-3xl text-[#6E39E0] sm:h-[89px] sm:w-[255px]  sm:self-start"
          onClick={onClick}
        >
          <span>사 전 예 약</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative ml-3 h-7 w-7"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </div>
      </div>
      <div className="flex items-center">
        <svg
          viewBox="0 0 35 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative ml-2 h-16 w-12 text-white"
        >
          <path
            d="M20.2027 0.292893C19.8122 -0.097631 19.179 -0.097631 18.7885 0.292893C18.398 0.683418 18.398 1.31658 18.7885 1.70711L20.2027 0.292893ZM19.4956 40.5913L18.9566 39.749L19.4956 40.5913ZM8.64881 23.0493L8.38011 22.086L8.64881 23.0493ZM25.6391 39.2261L26.612 38.9948L25.6391 39.2261ZM26.2591 80.1668C26.6273 80.5784 27.2595 80.6135 27.6711 80.2452L34.3783 74.2441C34.7899 73.8758 34.825 73.2436 34.4567 72.8321C34.0885 72.4205 33.4563 72.3853 33.0447 72.7536L27.0828 78.088L21.7484 72.126C21.3801 71.7145 20.7479 71.6793 20.3364 72.0476C19.9248 72.4159 19.8897 73.048 20.2579 73.4596L26.2591 80.1668ZM18.7885 1.70711C24.4903 7.4089 27.1705 15.2681 27.0771 22.5654C26.9834 29.8839 24.1132 36.4495 18.9566 39.749L20.0346 41.4336C25.9339 37.6589 28.9777 30.3427 29.0769 22.591C29.1765 14.8182 26.3287 6.41889 20.2027 0.292893L18.7885 1.70711ZM18.9566 39.749C14.5982 42.5378 10.8079 42.4059 8.04491 41.1328C5.21227 39.8276 3.41737 37.3154 3.07571 35.2696L1.10303 35.599C1.56703 38.3774 3.85101 41.4025 7.20797 42.9492C10.6345 44.5281 15.1446 44.5626 20.0346 41.4336L18.9566 39.749ZM3.07571 35.2696C2.6951 32.9905 2.82323 30.5223 3.70944 28.463C4.5795 26.4412 6.19249 24.7727 8.91752 24.0125L8.38011 22.086C5.03556 23.019 2.96601 25.131 1.87233 27.6724C0.794799 30.1763 0.677998 33.054 1.10303 35.599L3.07571 35.2696ZM8.91752 24.0125C11.6664 23.2456 13.8495 23.3801 15.6128 24.0519C17.3839 24.7267 18.8274 25.9804 20.0259 27.6127C22.4506 30.9152 23.7456 35.5844 24.6662 39.4573L26.612 38.9948C25.6969 35.1451 24.3319 30.0982 21.638 26.429C20.2772 24.5755 18.5467 23.0295 16.3249 22.183C14.0952 21.3335 11.4664 21.2251 8.38011 22.086L8.91752 24.0125ZM24.6662 39.4573C25.3568 42.3629 25.8691 49.2549 26.1169 57.0534C26.3634 64.8127 26.345 73.3394 26.0059 79.4445L28.0028 79.5555C28.3462 73.3736 28.3635 64.785 28.1159 56.9899C27.8695 49.234 27.3578 42.1326 26.612 38.9948L24.6662 39.4573Z"
            fill="white"
          />
        </svg>
        <span className="font-nanumPen text-2xl lg:text-3xl">scroll</span>
      </div>
    </section>
  );
}

function SecondSection({ onClick }: SectionProps) {
  return (
    <section className="relative flex h-screen  flex-col justify-between bg-[#6E39E0] p-6 pt-24 pb-24 text-white sm:items-center sm:p-12 sm:pt-20">
      <div className="flex w-full flex-col sm:pl-12 sm:pr-6 md:pl-24 md:pr-10 lg:pl-48 lg:pr-12 xl:pl-64  2xl:pl-96">
        <div className="flex items-start justify-between pb-[50px] sm:pb-12">
          <div className="font-blackHan text-2xl text-white sm:text-[40px]">
            취미 집사
          </div>
          <div
            className="flex h-14 w-32 cursor-pointer items-center  justify-center self-center rounded-full bg-white font-blackHan text-base text-[#6E39E0] sm:h-16 sm:w-48 sm:text-2xl"
            onClick={onClick}
          >
            <span>사 전 예 약</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="relative ml-2 h-4 w-4"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </div>
        </div>
        <div className="flex items-start justify-between sm:items-center">
          <div className="flex flex-col items-start">
            <span className="whitespace-pre-wrap font-blackHan text-[70px] sm:text-[50px] lg:text-[70px] small:text-[32px] tall:text-[43px]">
              {"장소찾고\n예약하고\n비교하고\n취미생활은 언제해..?"}
            </span>
            <span className="mt-2 whitespace-pre-wrap font-blackOps text-sm sm:text-lg">
              {
                "현생이 바쁜 주인님을 위해 찾고, 예약하고, 비교합니다.\n주인님이 준비할 건 오직 시간!\n새로운 취미를 경험할 설레는 마음만 준비하세요!"
              }
            </span>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border bg-white"></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <svg
          viewBox="0 0 35 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative ml-2 h-16 w-12 text-white"
        >
          <path
            d="M20.2027 0.292893C19.8122 -0.097631 19.179 -0.097631 18.7885 0.292893C18.398 0.683418 18.398 1.31658 18.7885 1.70711L20.2027 0.292893ZM19.4956 40.5913L18.9566 39.749L19.4956 40.5913ZM8.64881 23.0493L8.38011 22.086L8.64881 23.0493ZM25.6391 39.2261L26.612 38.9948L25.6391 39.2261ZM26.2591 80.1668C26.6273 80.5784 27.2595 80.6135 27.6711 80.2452L34.3783 74.2441C34.7899 73.8758 34.825 73.2436 34.4567 72.8321C34.0885 72.4205 33.4563 72.3853 33.0447 72.7536L27.0828 78.088L21.7484 72.126C21.3801 71.7145 20.7479 71.6793 20.3364 72.0476C19.9248 72.4159 19.8897 73.048 20.2579 73.4596L26.2591 80.1668ZM18.7885 1.70711C24.4903 7.4089 27.1705 15.2681 27.0771 22.5654C26.9834 29.8839 24.1132 36.4495 18.9566 39.749L20.0346 41.4336C25.9339 37.6589 28.9777 30.3427 29.0769 22.591C29.1765 14.8182 26.3287 6.41889 20.2027 0.292893L18.7885 1.70711ZM18.9566 39.749C14.5982 42.5378 10.8079 42.4059 8.04491 41.1328C5.21227 39.8276 3.41737 37.3154 3.07571 35.2696L1.10303 35.599C1.56703 38.3774 3.85101 41.4025 7.20797 42.9492C10.6345 44.5281 15.1446 44.5626 20.0346 41.4336L18.9566 39.749ZM3.07571 35.2696C2.6951 32.9905 2.82323 30.5223 3.70944 28.463C4.5795 26.4412 6.19249 24.7727 8.91752 24.0125L8.38011 22.086C5.03556 23.019 2.96601 25.131 1.87233 27.6724C0.794799 30.1763 0.677998 33.054 1.10303 35.599L3.07571 35.2696ZM8.91752 24.0125C11.6664 23.2456 13.8495 23.3801 15.6128 24.0519C17.3839 24.7267 18.8274 25.9804 20.0259 27.6127C22.4506 30.9152 23.7456 35.5844 24.6662 39.4573L26.612 38.9948C25.6969 35.1451 24.3319 30.0982 21.638 26.429C20.2772 24.5755 18.5467 23.0295 16.3249 22.183C14.0952 21.3335 11.4664 21.2251 8.38011 22.086L8.91752 24.0125ZM24.6662 39.4573C25.3568 42.3629 25.8691 49.2549 26.1169 57.0534C26.3634 64.8127 26.345 73.3394 26.0059 79.4445L28.0028 79.5555C28.3462 73.3736 28.3635 64.785 28.1159 56.9899C27.8695 49.234 27.3578 42.1326 26.612 38.9948L24.6662 39.4573Z"
            fill="white"
          />
        </svg>
        <span className="font-nanumPen text-2xl lg:text-3xl">scroll</span>
      </div>
    </section>
  );
}

function ThirdSection({ onClick }: SectionProps) {
  return (
    <section className="relative flex h-screen  flex-col justify-between bg-[#6E39E0] p-6 pt-24 pb-24 text-white sm:items-center sm:p-12 sm:pt-20">
      <div className="flex w-full flex-col sm:pl-12 sm:pr-6 md:pl-24 md:pr-10 lg:pl-48 lg:pr-12 xl:pl-64  2xl:pl-96">
        <div className="flex items-start justify-between pb-[50px] sm:pb-12">
          <div className="font-blackHan text-2xl text-white sm:text-[40px]">
            취미 집사
          </div>
          <div
            className="flex h-14 w-32 cursor-pointer items-center  justify-center self-center rounded-full bg-white font-blackHan text-base text-[#6E39E0] sm:h-16 sm:w-48 sm:text-2xl"
            onClick={onClick}
          >
            <span>사 전 예 약</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="relative ml-2 h-4 w-4"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </div>
        </div>
        <div className="flex items-start justify-between sm:items-center">
          <div className="flex flex-col items-start">
            <span className="whitespace-pre-wrap font-blackHan text-[70px] sm:text-[50px] lg:text-[70px] small:text-[32px] tall:text-[43px]">
              {"당신의\n취미생활을\n관리하는\n취미 집사 !"}
            </span>
            <span className="mt-2 whitespace-pre-wrap font-blackOps text-sm sm:text-lg">
              {
                "취미 생활에 대한 모든것을 한눈에 관리합니다.\n취미집사와 함께 갓생시작!"
              }
            </span>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border bg-white"></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <svg
          viewBox="0 0 35 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative ml-2 h-16 w-12 text-white"
        >
          <path
            d="M20.2027 0.292893C19.8122 -0.097631 19.179 -0.097631 18.7885 0.292893C18.398 0.683418 18.398 1.31658 18.7885 1.70711L20.2027 0.292893ZM19.4956 40.5913L18.9566 39.749L19.4956 40.5913ZM8.64881 23.0493L8.38011 22.086L8.64881 23.0493ZM25.6391 39.2261L26.612 38.9948L25.6391 39.2261ZM26.2591 80.1668C26.6273 80.5784 27.2595 80.6135 27.6711 80.2452L34.3783 74.2441C34.7899 73.8758 34.825 73.2436 34.4567 72.8321C34.0885 72.4205 33.4563 72.3853 33.0447 72.7536L27.0828 78.088L21.7484 72.126C21.3801 71.7145 20.7479 71.6793 20.3364 72.0476C19.9248 72.4159 19.8897 73.048 20.2579 73.4596L26.2591 80.1668ZM18.7885 1.70711C24.4903 7.4089 27.1705 15.2681 27.0771 22.5654C26.9834 29.8839 24.1132 36.4495 18.9566 39.749L20.0346 41.4336C25.9339 37.6589 28.9777 30.3427 29.0769 22.591C29.1765 14.8182 26.3287 6.41889 20.2027 0.292893L18.7885 1.70711ZM18.9566 39.749C14.5982 42.5378 10.8079 42.4059 8.04491 41.1328C5.21227 39.8276 3.41737 37.3154 3.07571 35.2696L1.10303 35.599C1.56703 38.3774 3.85101 41.4025 7.20797 42.9492C10.6345 44.5281 15.1446 44.5626 20.0346 41.4336L18.9566 39.749ZM3.07571 35.2696C2.6951 32.9905 2.82323 30.5223 3.70944 28.463C4.5795 26.4412 6.19249 24.7727 8.91752 24.0125L8.38011 22.086C5.03556 23.019 2.96601 25.131 1.87233 27.6724C0.794799 30.1763 0.677998 33.054 1.10303 35.599L3.07571 35.2696ZM8.91752 24.0125C11.6664 23.2456 13.8495 23.3801 15.6128 24.0519C17.3839 24.7267 18.8274 25.9804 20.0259 27.6127C22.4506 30.9152 23.7456 35.5844 24.6662 39.4573L26.612 38.9948C25.6969 35.1451 24.3319 30.0982 21.638 26.429C20.2772 24.5755 18.5467 23.0295 16.3249 22.183C14.0952 21.3335 11.4664 21.2251 8.38011 22.086L8.91752 24.0125ZM24.6662 39.4573C25.3568 42.3629 25.8691 49.2549 26.1169 57.0534C26.3634 64.8127 26.345 73.3394 26.0059 79.4445L28.0028 79.5555C28.3462 73.3736 28.3635 64.785 28.1159 56.9899C27.8695 49.234 27.3578 42.1326 26.612 38.9948L24.6662 39.4573Z"
            fill="white"
          />
        </svg>
        <span className="font-nanumPen text-2xl lg:text-3xl">scroll</span>
      </div>
    </section>
  );
}

function FourthSection({ onClick }: SectionProps) {
  return (
    <section className="relative flex h-screen  flex-col justify-between bg-[#6E39E0] p-6 pt-24 pb-24 text-white sm:items-center sm:p-12 sm:pt-20">
      <div className="flex w-full flex-col sm:pl-12 sm:pr-6 md:pl-24 md:pr-10 lg:pl-48 lg:pr-12 xl:pl-64  2xl:pl-96">
        <div className="flex items-start justify-between pb-[50px] sm:pb-12">
          <div className="font-blackHan text-2xl text-white sm:text-[40px]">
            취미 집사
          </div>
          <div
            className="flex h-14 w-32 cursor-pointer items-center  justify-center self-center rounded-full bg-white font-blackHan text-base text-[#6E39E0] sm:h-16 sm:w-48 sm:text-2xl"
            onClick={onClick}
          >
            <span>사 전 예 약</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="relative ml-2 h-4 w-4"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </div>
        </div>
        <div className="flex items-start justify-between sm:items-center">
          <div className="flex flex-col items-start">
            <span className="whitespace-pre-wrap font-blackHan text-[70px] sm:text-[50px] lg:text-[70px] small:text-[32px] tall:text-[43px]">
              {"나 몰랐는데..\n000 좋아하네 ?\n일상 타파 !\n취미 집사 !"}
            </span>
            <span className="mt-2 whitespace-pre-wrap font-blackOps text-sm sm:text-lg">
              {
                "내가 해보지 못한 새로운 경험이 필요할 때\n새로운 경험에 대한 용기을 챙겨 주세요!\n새로운 경험을 위한 준비는 취미 집사가 할께요!"
              }
            </span>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border bg-white"></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <svg
          viewBox="0 0 35 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative ml-2 h-16 w-12 text-white"
        >
          <path
            d="M20.2027 0.292893C19.8122 -0.097631 19.179 -0.097631 18.7885 0.292893C18.398 0.683418 18.398 1.31658 18.7885 1.70711L20.2027 0.292893ZM19.4956 40.5913L18.9566 39.749L19.4956 40.5913ZM8.64881 23.0493L8.38011 22.086L8.64881 23.0493ZM25.6391 39.2261L26.612 38.9948L25.6391 39.2261ZM26.2591 80.1668C26.6273 80.5784 27.2595 80.6135 27.6711 80.2452L34.3783 74.2441C34.7899 73.8758 34.825 73.2436 34.4567 72.8321C34.0885 72.4205 33.4563 72.3853 33.0447 72.7536L27.0828 78.088L21.7484 72.126C21.3801 71.7145 20.7479 71.6793 20.3364 72.0476C19.9248 72.4159 19.8897 73.048 20.2579 73.4596L26.2591 80.1668ZM18.7885 1.70711C24.4903 7.4089 27.1705 15.2681 27.0771 22.5654C26.9834 29.8839 24.1132 36.4495 18.9566 39.749L20.0346 41.4336C25.9339 37.6589 28.9777 30.3427 29.0769 22.591C29.1765 14.8182 26.3287 6.41889 20.2027 0.292893L18.7885 1.70711ZM18.9566 39.749C14.5982 42.5378 10.8079 42.4059 8.04491 41.1328C5.21227 39.8276 3.41737 37.3154 3.07571 35.2696L1.10303 35.599C1.56703 38.3774 3.85101 41.4025 7.20797 42.9492C10.6345 44.5281 15.1446 44.5626 20.0346 41.4336L18.9566 39.749ZM3.07571 35.2696C2.6951 32.9905 2.82323 30.5223 3.70944 28.463C4.5795 26.4412 6.19249 24.7727 8.91752 24.0125L8.38011 22.086C5.03556 23.019 2.96601 25.131 1.87233 27.6724C0.794799 30.1763 0.677998 33.054 1.10303 35.599L3.07571 35.2696ZM8.91752 24.0125C11.6664 23.2456 13.8495 23.3801 15.6128 24.0519C17.3839 24.7267 18.8274 25.9804 20.0259 27.6127C22.4506 30.9152 23.7456 35.5844 24.6662 39.4573L26.612 38.9948C25.6969 35.1451 24.3319 30.0982 21.638 26.429C20.2772 24.5755 18.5467 23.0295 16.3249 22.183C14.0952 21.3335 11.4664 21.2251 8.38011 22.086L8.91752 24.0125ZM24.6662 39.4573C25.3568 42.3629 25.8691 49.2549 26.1169 57.0534C26.3634 64.8127 26.345 73.3394 26.0059 79.4445L28.0028 79.5555C28.3462 73.3736 28.3635 64.785 28.1159 56.9899C27.8695 49.234 27.3578 42.1326 26.612 38.9948L24.6662 39.4573Z"
            fill="white"
          />
        </svg>
        <span className="font-nanumPen text-2xl lg:text-3xl">scroll</span>
      </div>
    </section>
  );
}

function FifthSection() {
  const handleCopyText = (text: string) => {
    try {
      // if (navigator.clipboard) {
      //   navigator.clipboard
      //     .writeText(text)
      //     .then(() => {
      //       alert("클립보드에 복사되었습니다.");
      //     })
      //     .catch(() => {
      //       alert("복사를 다시 시도해주세요.");
      //     });
      // } else {
      if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      }

      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.top = "0";
      textarea.style.left = "0";
      textarea.style.display = "fixed";

      document.body.appendChild(textarea);
      // focus() -> 사파리 브라우저 서포팅
      textarea.focus();
      // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
      textarea.select();
      // 흐름 5.
      document.execCommand("copy");
      // 흐름 6.
      document.body.removeChild(textarea);
      alert("클립보드에 복사되었습니다.");
      // }
    } catch (error) {
      alert("복사가 실패하였습니다.");
    }
  };

  useEffect(() => {}, []);

  return (
    <section className="relative flex h-screen  flex-col justify-between bg-[#6E39E0] p-6 pt-24 pb-24 text-white sm:items-center sm:p-12 sm:pt-20">
      <div className="flex w-full flex-col sm:pl-12 sm:pr-6 md:pl-24 md:pr-10 lg:pl-48 lg:pr-12 xl:pl-64  2xl:pl-96">
        <div className="flex items-start justify-between pb-[50px] sm:pb-12">
          <div className="font-blackHan text-2xl text-white sm:text-[40px]">
            취미 집사
          </div>
          <div
            className="flex h-14 w-32 cursor-pointer items-center  justify-center self-center rounded-full bg-white font-blackHan text-base text-[#6E39E0] sm:h-16 sm:w-48 sm:text-2xl"
            onClick={() => handleCopyText("https://hobby-butler.vercel.app/")}
          >
            <span>공 유 하 기</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="relative ml-2 h-4 w-4"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </div>
        </div>
        <div className="flex items-start justify-between sm:items-center">
          <div className="flex flex-col items-start">
            <span className="whitespace-pre-wrap font-blackHan text-[70px] sm:text-[50px] lg:text-[70px] small:text-[32px] tall:text-[43px]">
              {"같이 하면\n더 재밌는\n너랑 나랑\n취미 집사"}
            </span>
            <span className="mt-2 whitespace-pre-wrap font-blackOps text-sm sm:text-lg">
              {
                "재밌는 건 같이 해야 제 맛이지 !\n공유해서 같이 하자 취미 집사 !"
              }
            </span>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border-2 "></div>
            <div className="h-5 w-5 rounded-full border bg-white"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <svg
          viewBox="0 0 33 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative ml-2 h-16 w-12 text-white"
        >
          <path
            d="M20.2027 0.292893C19.8122 -0.097631 19.179 -0.097631 18.7885 0.292893C18.398 0.683418 18.398 1.31658 18.7885 1.70711L20.2027 0.292893ZM19.4956 40.5913L18.9566 39.749L19.4956 40.5913ZM8.64881 23.0493L8.38011 22.086L8.64881 23.0493ZM25.6391 39.2261L26.612 38.9948L25.6391 39.2261ZM23.2331 75.7288C21.1503 77.8116 21.1503 81.1884 23.2331 83.2712C25.3159 85.354 28.6927 85.354 30.7755 83.2712C32.8583 81.1884 32.8583 77.8116 30.7755 75.7288C28.6928 73.646 25.3159 73.646 23.2331 75.7288ZM18.7885 1.70711C24.4903 7.4089 27.1705 15.2681 27.0771 22.5654C26.9834 29.8839 24.1132 36.4495 18.9566 39.749L20.0346 41.4336C25.9339 37.6589 28.9777 30.3427 29.0769 22.591C29.1765 14.8182 26.3287 6.41889 20.2027 0.292893L18.7885 1.70711ZM18.9566 39.749C14.5982 42.5378 10.8079 42.4059 8.04491 41.1328C5.21227 39.8276 3.41737 37.3154 3.07571 35.2696L1.10303 35.599C1.56703 38.3774 3.85101 41.4025 7.20797 42.9492C10.6345 44.5281 15.1446 44.5626 20.0346 41.4336L18.9566 39.749ZM3.07571 35.2696C2.6951 32.9905 2.82323 30.5223 3.70944 28.463C4.5795 26.4412 6.19249 24.7727 8.91752 24.0125L8.38011 22.086C5.03556 23.019 2.96601 25.131 1.87233 27.6724C0.794799 30.1763 0.677998 33.054 1.10303 35.599L3.07571 35.2696ZM8.91752 24.0125C11.6664 23.2456 13.8495 23.3801 15.6128 24.0519C17.3839 24.7267 18.8274 25.9804 20.0259 27.6127C22.4506 30.9152 23.7456 35.5844 24.6662 39.4573L26.612 38.9948C25.6969 35.1451 24.3319 30.0982 21.638 26.429C20.2772 24.5755 18.5467 23.0295 16.3249 22.183C14.0952 21.3335 11.4664 21.2251 8.38011 22.086L8.91752 24.0125ZM24.6662 39.4573C25.3568 42.3629 25.8691 49.2549 26.1169 57.0534C26.3634 64.8127 26.345 73.3394 26.0059 79.4445L28.0028 79.5555C28.3462 73.3736 28.3635 64.785 28.1159 56.9899C27.8695 49.234 27.3578 42.1326 26.612 38.9948L24.6662 39.4573Z"
            fill="white"
          />
        </svg>

        <span className="font-nanumPen text-2xl lg:text-3xl">end...</span>
      </div>
    </section>
  );
}

function cls(...classnames: string[]) {
  return classnames.join(" ");
}

interface FormProps {
  email: string;
  phone1?: string;
  phone2?: string;
  phone3?: string;
}

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();
  const [isModal, setIsModal] = useState(false);
  const [reservation] = useMutation("/api/reservation");

  const onValid = (value: FormProps) => {
    alert("사전 예약이 완료되었습니다.");
    setIsModal(false);
    reservation(value);
  };
  const onModalClick = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <FullPage>
      {isModal && (
        <div className=" fixed top-0 left-0 right-0 z-50 flex h-screen items-center  justify-center overflow-hidden bg-black/20">
          <form
            onSubmit={handleSubmit(onValid)}
            className="max-w-sm rounded-sm bg-white p-4 sm:max-w-lg sm:p-12  small:w-4/5 tall:w-full"
          >
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/3 ">
                <label
                  className="mb-1 block pr-4 font-blackHan text-gray-500 md:mb-0 md:text-right"
                  htmlFor="inline-full-name"
                >
                  이메일 주소 (필수)
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  {...register("email", {
                    required: "이메일은 필수로 입력해야 합니다.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "올바른 이메일이 아닙니다.",
                    },
                  })}
                  required
                  className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-[#6E39E0] focus:bg-white focus:outline-none"
                  id="inline-full-name"
                  type="text"
                  placeholder="hobby@asdbcd.com"
                />
                {errors.email && (
                  <div
                    className="relative rounded border border-red-400 bg-red-100 px-4 py-3 font-blackOps text-red-700"
                    role="alert"
                  >
                    <strong className="font-bold">에러 !</strong>
                    <span className="block sm:inline">
                      {errors.email.message}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="mb-1 block pr-4 font-blackHan text-gray-500 md:mb-0 md:text-right"
                  htmlFor="inline-password"
                >
                  휴대폰 번호 (선택)
                </label>
              </div>
              <div className="flex space-x-2 md:w-2/3">
                <input
                  className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-[#6E39E0] focus:bg-white focus:outline-none"
                  id="inline-password"
                  type="text"
                  maxLength={3}
                  {...register("phone1", { maxLength: 3 })}
                  placeholder="010"
                />
                <input
                  className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-[#6E39E0] focus:bg-white focus:outline-none"
                  type="text"
                  maxLength={4}
                  {...register("phone2", { maxLength: 4 })}
                  placeholder="1234"
                />
                <input
                  className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-[#6E39E0] focus:bg-white focus:outline-none"
                  type="text"
                  maxLength={4}
                  placeholder="5678"
                  {...register("phone3", { maxLength: 4 })}
                />
              </div>
            </div>
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <label className="block font-bold text-gray-500 md:w-2/3">
                <span className="font-blackOps text-sm">
                  사전예약 하시면 꼭 연락드릴게요!
                </span>
              </label>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="flex justify-between md:w-2/3">
                <button
                  className="focus:shadow-outline rounded bg-[#F56565] py-2 px-4 font-bold text-white shadow hover:bg-[#9640ff] focus:outline-none"
                  type="button"
                  onClick={onModalClick}
                >
                  닫기
                </button>
                <button
                  className="focus:shadow-outline rounded bg-[#6E39E0] py-2 px-4 font-bold text-white shadow hover:bg-[#9640ff] focus:outline-none"
                  type="submit"
                >
                  사전예약
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <Slide>
        <FirstSection onClick={() => onModalClick()}></FirstSection>
      </Slide>
      <Slide>
        <SecondSection onClick={() => onModalClick()}></SecondSection>
      </Slide>
      <Slide>
        <ThirdSection onClick={() => onModalClick()}></ThirdSection>
      </Slide>
      <Slide>
        <FourthSection onClick={() => onModalClick()}></FourthSection>
      </Slide>
      <Slide>
        <FifthSection></FifthSection>
      </Slide>
    </FullPage>
  );
};

export default Home;
