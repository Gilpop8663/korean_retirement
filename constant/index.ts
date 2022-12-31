const QUESTION_DATA = [
  {
    question: '오늘은 월급날!\n어떤 하루를 보내 실 건가요?',
    imageSrc:
      'https://user-images.githubusercontent.com/80146176/209801852-816199db-6d59-463d-b1c9-4d74825f2384.png',
    answers: [
      {
        message: '월급날이 특별한가?... 빨리 집에 가야겠다...',
        score: 1,
        rich: false,
      },
      {
        message: '친구랑 약속 잡고~ 가볍게 한잔 마셔야지!',
        score: 2,
        rich: false,
      },
      {
        message: '오늘은 나에 대한 보상! 갖고 싶었던 물던 구입!',
        score: 3,
        rich: false,
      },
      {
        message: '하... 이 월급으론 안되겠어 재태크 공부다!',
        score: 1,
        rich: true,
      },
    ],
  },
  {
    question: '여행을 갑니다!\n숙박 시설을 예약하세요!',
    imageSrc:
      'https://user-images.githubusercontent.com/80146176/209801852-816199db-6d59-463d-b1c9-4d74825f2384.png',
    answers: [
      {
        message: '추억과 낭만이 가득한 게스트 하우스 !',
        score: 1,
        rich: false,
      },
      {
        message: '당일 이벤트로 나온 가성비 뿜뿜 호텔 겟!',
        score: 2,
        rich: false,
      },
      {
        message: '여행은 Flex! 별다섯개 스위트룸! 조식포함!',
        score: 3,
        rich: false,
      },
      {
        message: '여행은 너튜브로! 이번주는 부동산 공부다!',
        score: 1,
        rich: true,
      },
    ],
  },
  {
    question: '오늘은 편안한 주말\n주말엔 뭐 먹지?',
    imageSrc:
      'https://user-images.githubusercontent.com/80146176/209801852-816199db-6d59-463d-b1c9-4d74825f2384.png',
    answers: [
      {
        message: '냉장고를 열어본다. 반찬과 함께 한 끼 뚝딱',
        score: 1,
        rich: false,
      },
      {
        message: '주말엔 먹기도 귀찮다... 배달 시키기 ~ !',
        score: 2,
        rich: false,
      },
      {
        message: '시간도 많은 주말, 가고 싶었던 고급 식당 가기',
        score: 3,
        rich: false,
      },
      {
        message: '무조건 간단하고 빠르게! 자기계발 time',
        score: 1,
        rich: true,
      },
    ],
  },
  {
    question: '계절이 바뀌었네요?\n계절 옷을 사러 가볼까요?',
    imageSrc:
      'https://user-images.githubusercontent.com/80146176/209801852-816199db-6d59-463d-b1c9-4d74825f2384.png',
    answers: [
      {
        message: '유행은 돌고 돈다... 옷장 템 꺼내보기 !',
        score: 1,
        rich: false,
      },
      {
        message: '기분은 내야지 인터넷으로 유행 템 골라 보기!',
        score: 2,
        rich: false,
      },
      {
        message: '백화점으로 돌진! 한 벌을 사도 고급지게~',
        score: 3,
        rich: false,
      },
      {
        message: '계절이 바뀌어도 내 통장은 그대로! 투잡 뛰기!',
        score: 1,
        rich: true,
      },
    ],
  },
];
const ERROR_SUBJECT = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  requiredTarget: `${ERROR_SUBJECT} 개인 혹은 부부를 선택해주세요.`,
  requiredAge: `${ERROR_SUBJECT} 은퇴할 나이를 입력해주세요.`,
  minAge: `${ERROR_SUBJECT} 1살 이상으로 입력해야 합니다.`,
  maxAge: `${ERROR_SUBJECT} 99살 이하로 입력해야 합니다.`,
});

const CATEGORY_MESSAGE = Object.freeze({
  koreanStock: '주식왕',
  koreanRealEstate: '부동산왕',
  koreanBusiness: '사업왕',
  koreanVirtualCurrency: '가상화폐왕',
  koreanMinimum:
    '극강의 효율을 자랑하는 물곰은\n생명체가 살수없는 우주에서도,\n생존할 수 있다고 합니다!\n\n최소한의 지출로 최고의 효율을 자랑하는\n물곰형의 최소 은퇴 자금은!',
  koreanProper: '물고기형',
  koreanluxury: '백공작형',
});

const CATEGORY_IMAGE = Object.freeze({
  minimum: {
    background:
      'https://user-images.githubusercontent.com/80146176/210151337-836a5ff4-830b-480a-8df8-fc5b07087cf7.png',
    character:
      'https://user-images.githubusercontent.com/80146176/210151322-726dc10f-e93f-4c2f-a540-8d6316d2e29e.png',
    rectangle:
      'https://user-images.githubusercontent.com/80146176/210151339-b46d7277-86c8-4b57-88b8-17ddfb051f41.png',
  },
  proper: {
    background: '',
    character:
      'https://user-images.githubusercontent.com/80146176/210151347-f899d321-c7d9-4145-9b12-ce4fe5df9347.png',
    rectangle: '',
  },
  luxury: {
    background: '',
    character: '',
    rectangle: '',
  },
  stock: {
    background: '',
    character: '',
    rectangle: '',
  },
  realEstate: {
    background: '',
    character: '',
    rectangle: '',
  },
  business: {
    background: '',
    character: '',
    rectangle: '',
  },
  virtualCurrency: {
    background: '',
    character: '',
    rectangle: '',
  },
});

const SERVICE_MESSAGE = Object.freeze({
  successCopy: '클립보드에 복사되었습니다.',
  retryCopy: '복사를 다시 시도해주세요.',
  notAbleCopy: '복사를 지원하지 않는 브라우저입니다.',
  title: '은퇴 자금 테스트',
  subTitle: '은퇴 이후, 얼마가 필요할까?',
  hashTag: '#은퇴자금 #미래준비 #파이어족',
  aloneOrCouple: '은퇴 후,\n당신의 노년엔 함께하는 이가 있나요?',
  retireAge: '은퇴는 몇살에 하는게 좋을까?',
  inputAge: '나이를 입력해 주세요',
});

const SERVICE_STRING = Object.freeze({
  alone: 'ALONE',
  couple: 'COUPLE',
  minimum: 'MINIMUM',
  proper: 'PROPER',
  luxury: 'LUXURY',
  stock: 'STOCK',
  realEstate: 'REAL ESTATE',
  business: 'BUSINESS',
  virtualCurrency: 'VIRTUAL CURRENCY',
  koreanStock: '주식왕',
  koreanRealEstate: '부동산왕',
  koreanBusiness: '사업왕',
  koreanVirtualCurrency: '가상화폐왕',
  koreanMinimum: '극강의 효율 물곰형',
  koreanProper: '물고기형',
  koreanluxury: '백공작형',
});

const SERVICE_NUMBER = Object.freeze({
  lifeAge: 100,
  monthsYear: 12,
  interestRate: 0.025,
  scoreMinimum: 6,
  scoreProper: 9,
  scoreLuxury: 12,
  richCount: 4,
  maxIndex: 4,
  minAge: 1,
  maxAge: 99,
  maxScreenSize: 576,
});

const ALONE_COST = Object.freeze({
  minimum: {
    seoulMonth: 1_373_000,
    metropolitanMonth: 1_080_000,
    doMonth: 1_130_000,
  },
  proper: {
    seoulMonth: 1_940_000,
    metropolitanMonth: 1_516_000,
    doMonth: 1_606_000,
  },
  luxury: {
    seoulMonth: 3_191_000,
    metropolitanMonth: 2_657_000,
    doMonth: 2_523_000,
  },
});

const COUPLE_COST = Object.freeze({
  minimum: {
    seoulMonth: 2_240_000,
    metropolitanMonth: 1_931_000,
    doMonth: 1_860_000,
  },
  proper: {
    seoulMonth: 3_191_000,
    metropolitanMonth: 2_657_000,
    doMonth: 2_523_000,
  },
  luxury: {
    seoulMonth: 5_191_000,
    metropolitanMonth: 4_657_000,
    doMonth: 4_523_000,
  },
});

export {
  CATEGORY_MESSAGE,
  ERROR_MESSAGE,
  SERVICE_MESSAGE,
  SERVICE_STRING,
  SERVICE_NUMBER,
  ALONE_COST,
  COUPLE_COST,
  CATEGORY_IMAGE,
  QUESTION_DATA,
};
