import { SHARE_DATA } from 'constant';
import Image from 'next/image';
import React from 'react';

export default function KaKaoShareButton() {
  const onShareClick = () => {
    const { Kakao, location } = window;
    // console.log(Kakao);
    // Kakao.Link.sendScrap({
    //   requestUrl: location.href,
    // });

    Kakao.Share.createDefaultButton({
      container: '#kakaotalk-sharing-btn',
      objectType: 'commerce',
      content: {
        title: SHARE_DATA.title,
        imageUrl: SHARE_DATA.imageUrl,
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: 'https://korean-retirement.vercel.app/',
          webUrl: 'https://korean-retirement.vercel.app/',
        },
      },
      commerce: {
        productName: SHARE_DATA.productName,
        regularPrice: 0,
        discountRate: 0,
        discountPrice: 0,
      },
      buttons: [
        {
          title: '하러가기',
          link: {
            mobileWebUrl: 'https://korean-retirement.vercel.app/',
            webUrl: 'https://korean-retirement.vercel.app/',
          },
        },
        {
          title: '결과보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    });
  };
  return (
    <div
      id="kakaotalk-sharing-btn"
      className="relative h-14 w-14 cursor-pointer"
      onClick={() => onShareClick()}>
      <Image
        src={SHARE_DATA.kakaoSrc}
        alt="kakaoShared"
        layout="fill"
        className="object-contain"
      />
    </div>
  );
}
