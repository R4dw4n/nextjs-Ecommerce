"use client";
import React, { useEffect } from "react";

const Counter = () => {
  const [time, setTime] = React.useState({
    days: 7,
    hours: 10,
    mins: 8,
    sec: 7,
  });
  // counter's logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev.sec != 0) return { ...prev, sec: prev.sec - 1 };
        else if (prev.sec == 0 && prev.mins != 0)
          return { ...prev, sec: 59, mins: prev.mins - 1 };
        else if (prev.sec == 0 && prev.mins == 0 && prev.hours != 0)
          return { ...prev, sec: 59, mins: 59, hours: prev.hours - 1 };
        else if(prev.sec == 0 && prev.mins == 0 && prev.hours == 0 && prev.days != 0)
          return { ...prev, sec: 59, min: 59, hours: 23, days: prev.days - 1 };
        else
          return { ...prev };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 my-6 lg:justify-start justify-center">
      <div className="border border-[#ddd] text-center rounded-lg px-5 py-4 text-xs">
        <p className="font-bold text-2xl">{time.days}</p>
        Days
      </div>
      <div className="border border-[#ddd] text-center rounded-lg px-5 py-4 text-xs">
        <p className="font-bold text-2xl">{time.hours}</p>
        Hours
      </div>
      <div className="border border-[#ddd] text-center rounded-lg px-5 py-4 text-xs">
        <p className="font-bold text-2xl">{time.mins}</p>
        Mins
      </div>
      <div className="border border-[#ddd] text-center rounded-lg px-5 py-4 text-xs">
        <p className="font-bold text-2xl">{time.sec}</p>
        Sec
      </div>
    </div>
  );
};

export default Counter;
