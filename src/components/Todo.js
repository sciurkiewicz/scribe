import "./styles.css";
import React, { useState, useEffect } from "react";

function Todo() {
  let [todos, setTodos] = useState([]);

  // function handleTodoSubmit() {}

  function pushTodo() {
    setTodos([
      ...todos,
      {
        content: document.getElementById("todoTextData").value,
        id: new Date(),
      },
    ]); //simple value
  }

  function removeTodo(id) {
    const newList = todos.filter((item) => item.id !== id);
    setTodos(newList);
  }

  return (
    <div className="Todo">
      <div style={{ display: "flex" }}>
        <input type="text" id="todoTextData" className="todoText" />
        <button className="todoButton" onClick={pushTodo}>
          💬
        </button>
      </div>
      <div className="todos" id="todoList">
        {todos.map((item) => (
          <div style={{ display: "flex" }} key={todos.id}>
            <div className="todoNote">{item.content}</div>
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
