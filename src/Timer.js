import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    const startTime = new Date(2023, 1, 2); // February 2, 2023
    const interval = setInterval(() => {
      const now = new Date();
      setSeconds((now - startTime) / 1000);
      setMilliseconds((now - startTime) / 11);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="inline">
        <h1 className="inline font-bold text-xl lg:text-4xl mt-16 float-left	">
          <TextTransition springConfig={presets.wobbly}>
            {Math.floor(seconds)}
          </TextTransition>
        </h1>
        <h1 className="inline font-bold text-xl lg:text-4xl mt-16  text-center float-right	">
          &nbsp; questions asked to ky
        </h1>
      </div>

      <div className="inline">
        <h1 className="inline font-bold text-xl lg:text-4xl mt-16 float-left	">
          <TextTransition springConfig={presets.wobbly}>
            {Math.floor(milliseconds)}
          </TextTransition>
        </h1>
        <h1 className="inline font-bold text-xl lg:text-4xl mt-16  text-center float-right	">
          &nbsp; times will has rode ducks corkscrew dick
        </h1>
      </div>
    </div>
  );
};

export default Timer;
