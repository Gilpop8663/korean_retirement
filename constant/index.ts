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
  koreanStock:
    '주식은 가치 투자라 했던가?\n\n당신이 사는 종목이 곧 가치가 된다!\n종목을 보는 신의 눈!\n\n은퇴 비용은 걱정없다.\n\n잉차~잉차~ 솟아라 차트여 ! 주식의 왕~',
  koreanRealEstate:
    '산중에 산은 부동산!\n\n당신이 사는 땅이 곧 미래의 강남~?\n이 시대의 풍수지리사!\n\n은퇴 비용은 걱정없다.\n\n올라 갈 땅만 딱딱! 부동산의 신',
  koreanBusiness:
    '번쩍 번쩍 빛나는 아이디어!\n\n다양한 시도, 아이디어가 샘솟는다.\n대한민국을 빛낼 당신\n\n은퇴 비용은 걱정없다.\n\n사업에 성공하여 EXIT 하였습니다.',
  koreanMinimum:
    '극강의 효율을 자랑하는 물곰은\n생명체가 살수없는 우주에서도,\n생존할 수 있다고 합니다!\n\n최소한의 지출로 최고의 효율을 자랑하는\n물곰형의 최소 은퇴 자금은!',
  koreanProper:
    '짙은 푸른 색, 은백 색의 앤쵸비는\n무리를 지어,\n바닷속을 헤엄친다고 합니다!\n\n유행을 따라, 흘러 가며 살아 가는\n앤쵸비형의 최소 은퇴 자금은!',
  koreanluxury:
    '화려한 꼬리를 자랑하는 공작은\n자신을 뽐내기 위해, 생존에 불리한\n꽁지깃을 경쟁하듯 진화시켰다 합니다!\n\n한번사는 인생을 화려하게 살아가는\n공작형의 최소 은퇴 자금은!',
});

const ARCORNS_IMAGE_SOURCE = Object.freeze({
  NORMAL:
    'https://user-images.githubusercontent.com/80146176/210154410-94c18235-223e-4039-aff9-28005296837d.png',
  LUXURY:
    'https://user-images.githubusercontent.com/80146176/210154414-59d06eb5-895e-429f-a329-c1a93c0e8943.png',
  PROPER:
    'https://user-images.githubusercontent.com/80146176/210154420-97a9dec7-5db3-4ece-9152-6ac81d094c73.png',
  MINIMUM:
    'https://user-images.githubusercontent.com/80146176/210154445-1089abce-76ce-4ba7-816e-842826bf3155.png',
  STOCK:
    'https://user-images.githubusercontent.com/80146176/210154441-e21ba262-14cd-40ca-ae7a-7bac1d794377.png',
  ESTATE:
    'https://user-images.githubusercontent.com/80146176/210154441-e21ba262-14cd-40ca-ae7a-7bac1d794377.png',
  BUSINESS:
    'https://user-images.githubusercontent.com/80146176/210154441-e21ba262-14cd-40ca-ae7a-7bac1d794377.png',
});

const getArcornsImageSrc = (kind: string) => {
  if (kind === SERVICE_STRING.normal) {
    return ARCORNS_IMAGE_SOURCE.NORMAL;
  }
  if (kind === SERVICE_STRING.minimum) {
    return ARCORNS_IMAGE_SOURCE.MINIMUM;
  }
  if (kind === SERVICE_STRING.proper) {
    return ARCORNS_IMAGE_SOURCE.PROPER;
  }
  if (kind === SERVICE_STRING.luxury) {
    return ARCORNS_IMAGE_SOURCE.LUXURY;
  }
  if (kind === SERVICE_STRING.stock) {
    return ARCORNS_IMAGE_SOURCE.STOCK;
  }
  return ARCORNS_IMAGE_SOURCE.ESTATE;
};

const SHARE_DATA = Object.freeze({
  kakaoSrc:
    'https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png',
  title: '은퇴 이후, 얼마가 필요할까? 은퇴 자금 테스트 !',
  imageUrl:
    'https://user-images.githubusercontent.com/80146176/210153300-4123582a-84bc-4833-8e27-581fe697df89.png',
  productName: '은퇴 자금 테스트!',
});

const CATEGORY_IMAGE = Object.freeze({
  minimum: {
    background:
      'https://user-images.githubusercontent.com/80146176/210151337-836a5ff4-830b-480a-8df8-fc5b07087cf7.png',
    character:
      'https://user-images.githubusercontent.com/80146176/210153443-40d66ab7-f9f2-48af-b6c6-56bd3a4c1e30.png',
    rectangle:
      'https://user-images.githubusercontent.com/80146176/210151339-b46d7277-86c8-4b57-88b8-17ddfb051f41.png',
  },
  proper: {
    background:
      'https://user-images.githubusercontent.com/80146176/210153906-36fa5a7a-85ba-4881-9265-5fb89238e1ef.png',
    character:
      'https://user-images.githubusercontent.com/80146176/210153833-9105535c-1a54-4e69-a302-c911ed4f0648.png',
    rectangle:
      'https://user-images.githubusercontent.com/80146176/210153914-271d675e-1bd8-45ca-b698-21dbb9075515.png',
  },
  luxury: {
    background: '',
    character:
      'https://user-images.githubusercontent.com/80146176/210162020-e3cd2a57-7afc-4ec9-a2fb-9ed9272bd68e.png',
    rectangle:
      'https://user-images.githubusercontent.com/80146176/210162019-fc6b60d1-1827-4cab-94ae-d2c49be04764.png',
  },
  stock: {
    background: '',
    character:
      'https://user-images.githubusercontent.com/80146176/210162044-7ff4d391-8584-423f-8d1c-cb2a79cb36c9.png',
    rectangle:
      'https://user-images.githubusercontent.com/80146176/210162043-76b35244-df94-4451-917e-be378550afa0.png',
  },

  //여기서부터 아직 안함
  realEstate: {
    background: '',
    character:
      'https://user-images.githubusercontent.com/80146176/210391311-d70835b6-67cb-45a7-99c9-21a8cb850b70.png',
    rectangle:
      'https://user-images.githubusercontent.com/80146176/210162043-76b35244-df94-4451-917e-be378550afa0.png',
  },
  business: {
    background: '',
    character:
      'https://user-images.githubusercontent.com/80146176/210391303-a4b9f8dd-7515-43a2-a0d2-3265523684a1.png',
    rectangle:
      'https://user-images.githubusercontent.com/80146176/210162043-76b35244-df94-4451-917e-be378550afa0.png',
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
  copyright:
    'Copyright 2023. Gilpop&Dayaya. All rights reserved.\n\ndesigned by Dayaya',
});

const SERVICE_STRING = Object.freeze({
  alone: 'ALONE',
  couple: 'COUPLE',
  normal: 'NORMAL',
  minimum: 'MINIMUM',
  proper: 'PROPER',
  luxury: 'LUXURY',
  stock: 'STOCK',
  realEstate: 'ESTATE',
  business: 'BUSINESS',
  koreanStock: '솟아라! 주식의 왕',
  koreanRealEstate: '산중에 산은 부동산',
  koreanBusiness: '반짝이는 사업 왕',
  koreanMinimum: '극강의 효율 물곰형',
  koreanProper: '무리 짓는 앤쵸비형',
  koreanluxury: '반짝반짝 공작형',
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
  ALONE_COST,
  CATEGORY_MESSAGE,
  CATEGORY_IMAGE,
  COUPLE_COST,
  ERROR_MESSAGE,
  SERVICE_MESSAGE,
  SERVICE_STRING,
  SERVICE_NUMBER,
  SHARE_DATA,
  QUESTION_DATA,
  getArcornsImageSrc,
};
