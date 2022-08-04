import { useState } from "react";
import "./pomodoro.css";
// import React, { useState, useEffect } from "react";

function Pomodoro() {
  let [stopwatch, setStopwatch] = useState(8);
  let [stopWatchState, setStopwatchState] = useState(false);
  let [status, setStatus] = useState(false);

  const handleClick = () => {
    setStopwatchState(true);
    setInterval(() => {
      setStopwatch((prevCount) => prevCount - 1);
    }, 1000);
  };
  return (
    <div className="Pomodoro">
      <div className="pomodoroCounter">{stopwatch}</div>
      {stopWatchState ? (
        "Odliczanie..."
      ) : (
        <button className="pomodoroButton" onClick={handleClick}>
          START
        </button>
      )}
    </div>
  );
}

export default Pomodoro;
