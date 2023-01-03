import { cls } from '@libs/utils';
import React from 'react';

interface CopyrightInterface {
  textColor: 'black' | 'white';
}

export default function Copyright({ textColor }: CopyrightInterface) {
  return (
    <div
      className={cls(
        textColor === 'black' ? 'text-black' : 'text-white',
        'absolute bottom-3 left-0 right-0 z-50 mx-auto whitespace-pre-wrap text-center font-bareunHipi text-sm'
      )}>
      {`Copyright 2023. `}
      <a
        className="font-bold text-blue-700"
        href={'https://github.com/Gilpop8663'}
        target="_blank">
        Gilpop
      </a>
      <span>&</span>
      <a
        className="font-bold text-blue-700"
        href={'https://www.behance.net/tv-1'}
        target="_blank">
        Dayaya
      </a>
      {`. All rights reserved.\n\ndesigned by Dayaya`}
    </div>
  );
}
