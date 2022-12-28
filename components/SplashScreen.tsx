import React, { useEffect, useState } from 'react';
import Arcorn, { ArcornProps } from './Arcorn';

export default function SplashScreen() {
  const [randomArray, setRandomArray] = useState<ArcornProps[]>([]);
  const makeArcornImage = () => {
    const randomLeft = Math.random() * window.screen.width;
    const randomTop = Math.random() * window.screen.height;
    const randomDeg = Math.random() * 360;
    console.log(window.screen);
    // const randomTop = 0;
    return { randomTop, randomLeft, randomDeg };
  };

  useEffect(() => {
    setRandomArray(
      Array.from({ length: 100 }, () => {
        return makeArcornImage();
      })
    );
  }, []);

  useEffect(() => {
    console.log(randomArray);
  }, [randomArray]);

  return (
    <div className="h-screen  bg-bgColor ">
      <div className="absolute -left-36 -top-36 ">
        {randomArray.map((element, index) => (
          <Arcorn
            key={index}
            randomTop={element.randomTop}
            randomLeft={element.randomLeft}
            randomDeg={element.randomDeg}
          ></Arcorn>
        ))}
      </div>
      SplashScreen
    </div>
  );
}
