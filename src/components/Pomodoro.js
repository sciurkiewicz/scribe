import { useState } from "react";
import "./styles.css";
// import React, { useState, useEffect } from "react";

function Pomodoro() {
  let [stopwatch, setStopwatch] = useState(1);
  let [stopWatchState, setStopwatchState] = useState(false);
  let [status, setStatus] = useState(false);

  // function pomodoroSetup(props) {
  // return <h1>Witamy ponownie!</h1>;
  // }
  // function pomodoroAfter(props) {
  // return <h1>Proszę się zarejestrować.</h1>;
  // }

  const handleClick = () => {
    setStopwatchState(true);
    setInterval(() => {
      setStopwatch((prevCount) => prevCount - 1);
      document.title = stopwatch;
    }, 1000);
  };
  const handleReset = () => {
    setStopwatchState(true);
    setStopwatch(9);
    document.title = stopwatch;
  };
  return (
    <div className="Pomodoro">
      <div>
        {stopwatch <= 0 && (
          <div className="pomodoroCounter">KONIEC CZASU ZRÓB PRZERWĘ!!!</div>
        )}
        {stopwatch > 0 && <div className="pomodoroCounter">{stopwatch}</div>}
      </div>

      {stopWatchState ? null : (
        <button className="pomodoroButton" onClick={handleClick}>
          START
        </button>
      )}
      {stopwatch <= 0 && (
        <button className="pomodoroButton" onClick={handleReset}>
          RESET
        </button>
      )}
    </div>
  );
}

export default Pomodoro;
