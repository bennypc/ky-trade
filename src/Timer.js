import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    const startTime = new Date(2023, 1, 2); // February 2, 2023
    const interval = setInterval(() => {
      const now = new Date();
      setSeconds((now - startTime) / 1000);
      setMilliseconds((now - startTime) / 10);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl mt-16 mx-4 text-center">
        {Math.floor(seconds)} questions asked to ky
      </h1>
      <h1 className="font-bold text-3xl mt-16 mx-4 text-center">
        {Math.floor(milliseconds)} dicks ridden by messy
      </h1>
    </div>
  );
};

export default Timer;
