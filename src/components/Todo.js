import "./styles.css";
import React, { useState, useEffect } from "react";

function Todo() {
  let [todos, setTodos] = useState([]);

  let [formTodo, setFormTodo] = useState();

  // function handleTodoSubmit() {}

  function pushTodo(e) {
    e.preventDefault();
    if (formTodo === "") {
      alert("Task Must be Named");
    } else {
      setTodos([
        ...todos,
        {
          content: formTodo,
          id: new Date(),
          isFinished: false,
        },
      ]);
      setFormTodo("");
      document.getElementById("todoTextData").value = "";
    }

    //simple value
  }

  function removeTodo(id) {
    const newList = todos.filter((item) => item.id !== id);
    setTodos(newList);
  }
  // function completeTodo(id) {}

  return (
    <div className="Todo">
      <div style={{ display: "flex" }}>
        <input
          type="text"
          id="todoTextData"
          className="todoText"
          onChange={(e) => setFormTodo(e.target.value)}
        />
        <button className="todoButton" onClick={pushTodo}>
          💬
        </button>
      </div>
      <div className="todos" id="todoList">
        {todos.map((item) => (
          <div style={{ display: "flex" }} key={todos.id}>
            <div className="box">{item.content}</div>
            {/* <button
              onClick={() => completeTodo(item.id)}
              className="todoButton"
              style={{ marginTop: "1%", marginBottom: "1%" }}
            >
              ✅
            </button> */}
            <button
              onClick={() => removeTodo(item.id)}
              className="todoButton"
              style={{ marginTop: "1%", marginBottom: "1%" }}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
