import { useState, useEffect } from "react";

const useNewCount = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [mins, setMins] = useState("00");
  const [secs, setSecs] = useState("00");

  let interval;

  const startTimer = () => {
    const coutdownDate = new Date("October 9, 2022 17:30:00").getTime();

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
        setDays(0);
        setHours(0);
        setMins(0);
        setSecs(0);
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
    newDays: handleFormat(days),
    newHours: handleFormat(hours),
    newMins: handleFormat(mins),
    newSecs: handleFormat(secs),
  };
};

export default useNewCount;
