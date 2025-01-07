import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const isActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 20);
    }, 20);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.open();
  };
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }
  console.log(timeRemaining, "time");
  return (
    <>
      <ResultModal
        targetTime={targetTime}
        remainingTime={timeRemaining}
        ref={dialog}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isActive ? handleStop : handleStart}>
            {isActive ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={isActive ? "active" : undefined}>
          {isActive ? "Timer is running" : "Timer inActive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
