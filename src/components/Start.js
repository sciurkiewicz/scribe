import "./styles.css";
import React, { useState } from "react";
import Recent from "./Recent";

function Start({ completedTodos }) {
  return (
    <>
      <div className="box">
        <h1>Welcome in SCRIBE (v 0.1)</h1>
        <ul>
          <li>
            Scribe is lightweight work-menage system with built-in pomodoro
            timer, todo-list and music
          </li>
        </ul>
      </div>
      <div className="Start flex">
        <div className="box smallMargin elementsCenter">
          Recently completed tasks
          <hr />
          {completedTodos.map((item) => (
            <div style={{ display: "flex" }} key={item.id}>
              <div className="box">{item.content}</div>
            </div>
          ))}
        </div>
        <div className="box smallMargin elementsCenter">
          Quick Note <hr />
        </div>
      </div>
    </>
  );
}

export default Start;
