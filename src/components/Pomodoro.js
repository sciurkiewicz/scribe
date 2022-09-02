import { useState } from "react";
import "./styles.css";
// import React, { useState, useEffect } from "react";

function Pomodoro() {
  let [stopwatch, setStopwatch] = useState(1);
  let [stopWatchState, setStopwatchState] = useState(false);
  let [status, setStatus] = useState(false);

  let ring = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/3/34/Sound_Effect_-_Door_Bell.ogg"
  );
  // ring.play();

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
          <div className="box">KONIEC CZASU ZRÓB PRZERWĘ!!!</div>
        )}
        {stopwatch > 0 && (
          <div className="box">Pozostały Czas: {stopwatch} sekund</div>
        )}
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
