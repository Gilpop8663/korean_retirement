const QUESTION_DATA = [
  {
    question: '생일 축하 합니다~  어떤 추억을 쌓을 건가요?',
    imageSrc:
      'https://user-images.githubusercontent.com/80146176/209801852-816199db-6d59-463d-b1c9-4d74825f2384.png',
    answers: [
      {
        message: '트렌드를 놓칠수 없지! 무조건 인스타 핫플!',
        score: 1,
        rich: false,
      },
      {
        message: '트렌드를 놓칠수 없지! 무조건 인스타 핫플!',
        score: 2,
        rich: false,
      },
      {
        message: '트렌드를 놓칠수 없지! 무조건 인스타 핫플!',
        score: 3,
        rich: false,
      },
      { message: '재테크 공부다!', score: 1, rich: true },
    ],
  },
  {
    question: '2',
    imageSrc:
      'https://user-images.githubusercontent.com/80146176/209801852-816199db-6d59-463d-b1c9-4d74825f2384.png',
    answers: [
      {
        message: '트렌드를 놓칠수 없지! 무조건 인스타 핫플!',
        score: 1,
        rich: false,
      },
      {
        message: '트렌드를 놓칠수 없지! 무조건 인스타 핫플!',
        score: 2,
        rich: false,
      },
      {
        message: '트렌드를 놓칠수 없지! 무조건 인스타 핫플!',
        score: 3,
        rich: false,
      },
      { message: '재테크 공부다!', score: 1, rich: true },
    ],
  },
  {
    question: '3',
    imageSrc:
      'https://user-images.githubusercontent.com/80146176/209801852-816199db-6d59-463d-b1c9-4d74825f2384.png',
    answers: [
      {
        message: '트렌드를 놓칠수 없지! 무조건 인스타 핫플!',
        score: 1,
        rich: false,
      },
      {
        message: '트렌드를 놓칠수 없지! 무조건 인스타 핫플!',
        score: 2,
        rich: false,
      },
      {
        message: '트렌드를 놓칠수 없지! 무조건 인스타 핫플!',
        score: 3,
        rich: false,
      },
      { message: '재테크 공부다!', score: 1, rich: true },
    ],
  },
  {
    question: '4',
    imageSrc:
      'https://user-images.githubusercontent.com/80146176/209801852-816199db-6d59-463d-b1c9-4d74825f2384.png',
    answers: [
      {
        message: '트렌드를 놓칠수 없지! 무조건 인스타 핫플!',
        score: 1,
        rich: false,
      },
      {
        message: '트렌드를 놓칠수 없지! 무조건 인스타 핫플!',
        score: 2,
        rich: false,
      },
      {
        message: '트렌드를 놓칠수 없지! 무조건 인스타 핫플!',
        score: 3,
        rich: false,
      },
      { message: '재테크 공부다!', score: 1, rich: true },
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

const SERVICE_MESSAGE = Object.freeze({
  successCopy: '클립보드에 복사되었습니다.',
  retryCopy: '복사를 다시 시도해주세요.',
  notAbleCopy: '복사를 지원하지 않는 브라우저입니다.',
});

export { ERROR_MESSAGE, SERVICE_MESSAGE, QUESTION_DATA };
