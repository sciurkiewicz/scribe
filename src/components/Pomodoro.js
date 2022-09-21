import { useState, useEffect } from "react";
import "./styles.css";
// import React, { useState, useEffect } from "react";

function Pomodoro({
  stopwatch,
  setStopwatch,
  stopWatchState,
  setStopwatchState,
}) {
  // function pomodoroSetup(props) {
  // return <h1>Witamy ponownie!</h1>;
  // }
  // function pomodoroAfter(props) {
  // return <h1>Proszę się zarejestrować.</h1>;
  // }
  // useEffect(() => {
  // document.title = stopwatch;
  // });
  const handleClick = () => {
    setStopwatchState(true);
    setInterval(() => {
      setStopwatch((prevCount) => prevCount - 1);
    }, 1000);
  };
  const handleReset = () => {
    setStopwatchState(true);
    setStopwatch(1500);
  };

  return (
    <div className="Pomodoro">
      <div>
        {stopwatch <= 0 && (
          <div className="box">KONIEC CZASU ZRÓB PRZERWĘ!!!</div>
        )}

        {stopwatch > 0 && (
          <div>
            Pozostały czas pracy: {stopwatch} sekund
            <progress
              id="file"
              value={stopwatch}
              max="1500"
              className="progress"
            >
              dsdsds
            </progress>
          </div>
        )}
      </div>

      {/* {stopWatchState ? null : (
        <div className="flex">
          <button className="pomodoroButton" onClick={() => setStopwatch(1500)}>
            dsds
          </button>
        </div>
      )} */}

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
