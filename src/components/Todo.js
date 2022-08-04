import "./todo.css";
import TodoElement from "./TodoElement";
import React, { useState, useEffect } from "react";

function Todo() {
  let [todos, setTodos] = useState(["1", "2", "3", "4", "5", "6", "7", "8"]);

  function pushTodo() {
    setTodos([...todos, document.getElementById("todoTextData").value]); //simple value
  }

  function deleteTodo() {
    setTodos((todos) => todos.filter((_, i) => i !== 2)); //tam gdzie 2 można dać naszą wartość którą pierdolniemy z proprsa :>
    console.log(todos);
  }

  return (
    <div className="Todo">
      <div style={{ display: "flex" }}>
        <input type="text" id="todoTextData" className="todoText" />
        <button onClick={deleteTodo} className="todoButton">
          💬
        </button>
      </div>
      <div className="todos" id="todoList">
        {/* {todo} */}
        <TodoElement />
      </div>
    </div>
  );
}

export default Todo;
