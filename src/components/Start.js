import "./styles.css";
import React, { useEffect, useState } from "react";
import Recent from "./Recent";

function Start({ completedTodos, setCompletedTodo, quickNote, setQuickNote }) {
  function removeCompletedTodos(id, content) {
    const deletedTodo = id;
    console.log(deletedTodo);
    const newList = completedTodos.filter((item) => item.id !== id);
    setCompletedTodo(newList);
  }

  return (
    <>
      <div className="box">
        <h1>Welcome in SCRIBE (v 0.1.1)</h1>
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
          {completedTodos.length === 0 && (
            <div className="box elementsCenter">
              <h1>There are no notes</h1>
            </div>
          )}
          {completedTodos.map((item) => (
            <div style={{ display: "flex" }} key={item.id}>
              <div className="box">{item.content}</div>
              <button
                className="todoButton"
                onClick={() => removeCompletedTodos(item.id, item.content)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
        <div className="box smallMargin elementsCenter">
          Quick Note <hr />
          <textarea
            name=""
            id="quickNoteTextarea"
            cols="30"
            rows="5"
            className="todoText"
            style={{ overflow: "auto", width: "90%", resize: "none" }}
            onChange={(e) => setQuickNote(e.target.value)}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default Start;
