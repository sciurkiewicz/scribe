import "./todo.css";
import React, { useState, useEffect } from "react";

// let todos = [];

// let TodoElements = () => {
// if (todos.length === 0) {
// return <div className="todoNote">PUSTO!!!</div>;
// } else {
// let listTodos = todos.map((todos) => (
// <div className="todoNote">{todos}</div>
// ));
// return <> {listTodos} </>;
// }
// };
function Todo() {
  let [todo, setTodo] = useState([]);
  console.log(todo);

  function pushTodo() {
    setTodo([...todo, document.getElementById("todoTextData").value]); //simple value
  }

  let TodoElements = (props) => {
    if (todo.length === 0) {
      return (
        <div className="todoNote">
          <p>PUSTO!!!</p>
        </div>
      );
    } else {
      let listTodos = todo.map((todos) => (
        <div style={{ display: "flex" }}>
          <div className="todoNote">{todos}</div>
          <button
            onClick={pushTodo}
            className="todoButton"
            style={{ marginTop: "1%", marginBottom: "1%" }}
          >
            ❌
          </button>
        </div>
      ));
      return <> {listTodos} </>;
    }
  };

  return (
    <div className="Todo">
      <div style={{ display: "flex" }}>
        <input type="text" id="todoTextData" className="todoText" />
        <button onClick={pushTodo} className="todoButton">
          💬
        </button>
      </div>
      <div className="todos" id="todoList">
        {/* {todo} */}
        <TodoElements />
      </div>
    </div>
  );
}

export default Todo;
