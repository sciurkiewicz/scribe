import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./Start";
import Pomodoro from "./Pomodoro";
import Todo from "./Todo";
import Topbar from "./Topbar";
import { useState, useEffect } from "react";

const getTodosFromLocalStorage = () => {
  const items = JSON.parse(localStorage.getItem("todos"));
  if (items) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};
const getCompletedTodosFromLocalStorage = () => {
  const items = JSON.parse(localStorage.getItem("completedTodos"));
  if (items) {
    return JSON.parse(localStorage.getItem("completedTodos"));
  } else {
    return [];
  }
};

function Main() {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());
  const [formTodo, setFormTodo] = useState("");
  const [completedTodos, setCompletedTodo] = useState(
    getCompletedTodosFromLocalStorage()
  );
  const [stopwatch, setStopwatch] = useState(1500);
  const [stopWatchState, setStopwatchState] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [completedTodos]);

  return (
    <Router>
      <div className="App">
        <Topbar></Topbar>
        <div className="contentWrapper">
          <Routes>
            <Route
              path="/"
              element={<Start completedTodos={completedTodos} />}
            />
            <Route
              path="/todo"
              element={
                <Todo
                  todos={todos}
                  formTodo={formTodo}
                  setTodos={setTodos}
                  setFormTodo={setFormTodo}
                  completedTodos={completedTodos}
                  setCompletedTodo={setCompletedTodo}
                />
              }
            />
            <Route
              path="/pomodoro"
              element={
                <Pomodoro
                  stopwatch={stopwatch}
                  setStopwatch={setStopwatch}
                  stopWatchState={stopWatchState}
                  setStopwatchState={setStopwatchState}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Main;
