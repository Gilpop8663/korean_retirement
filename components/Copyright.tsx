import React from 'react';

export default function Copyright() {
  return (
    <div className="absolute bottom-3 left-0 right-0 z-50 mx-auto whitespace-pre-wrap text-center font-bareunHipi text-sm">
      {`Copyright 2023. `}
      <a
        className="font-bold text-blue-600"
        href={'https://github.com/Gilpop8663'}
        target="_blank">
        Gilpop
      </a>
      <span>&</span>
      <a
        className="font-bold text-blue-600"
        href={'https://www.behance.net/tv-1'}
        target="_blank">
        Dayaya
      </a>
      {`. All rights reserved.\n\ndesigned by Dayaya`}
    </div>
  );
}
