import { useState, useEffect } from "react";

export const useCountdown = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [mins, setMins] = useState("00");
  const [secs, setSecs] = useState("00");

  let interval;

  const startTimer = () => {
    const coutdownDate = new Date("October 8, 2022 19:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = coutdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setDays(days);
        setHours(hours);
        setMins(mins);
        setSecs(secs);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  });

  const handleFormat = (num) => {
    if (num <= 9) return `0${num}`;

    return num;
  };

  return {
    days: handleFormat(days),
    hours: handleFormat(hours),
    mins: handleFormat(mins),
    secs: handleFormat(secs),
  };
};
