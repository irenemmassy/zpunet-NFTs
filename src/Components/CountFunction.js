import React, { useEffect, useState } from "react";

const countClasses = {
  mainBox: "count flex-colo overflow-hidden rounded",
  boxOne: "py-2 px-2 text-lg font-black tracking-wider text-whites",
  boxTwo: "px-2 w-full h-6 bg-whites font-medium flex-colo italic text-xs",
};

function CountDown() {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("June 30,2022 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="grid grid-cols-4 2xl:gap-8 lg:gap-2 sm:gap-8 gap-3 w-full mt-5">
      <div className={countClasses.mainBox}>
        <div className={countClasses.boxOne}>{timerDays}</div>
        <div className={countClasses.boxTwo}>Days</div>
      </div>
      <div className={countClasses.mainBox}>
        <div className={countClasses.boxOne}>{timerHours}</div>
        <div className={countClasses.boxTwo}>Hours</div>
      </div>
      <div className={countClasses.mainBox}>
        <div className={countClasses.boxOne}>{timerMinutes}</div>
        <div className={countClasses.boxTwo}>Min</div>
      </div>
      <div className={countClasses.mainBox}>
        <div className={countClasses.boxOne}>{timerSeconds}</div>
        <div className={countClasses.boxTwo}>Sec</div>
      </div>
    </div>
  );
}

export default CountDown;
