import "./styles.css";
import React, { useState, useEffect } from "react";

function Todo({
  todos,
  formTodo,
  setTodos,
  setFormTodo,
  completedTodos,
  setCompletedTodo,
}) {
  function pushTodo() {
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

    console.log(todos);
  }

  function removeTodo(id, content) {
    const deletedTodo = id;
    setCompletedTodo([
      ...completedTodos,
      { content: content, id: id, isFinished: true },
    ]);
    console.log(deletedTodo);
    const newList = todos.filter((item) => item.id !== id);
    setTodos(newList);
  }
  // function completeTodo(id) {
  //   const newTodo = todos.find((item) => item.id === id);
  //   setTodos([
  //     ...completedTodos,
  //     {
  //       content: newTodo.content,
  //       id: new Date(),
  //       isFinished: true,
  //     },
  //   ]);
  //   console.log(completedTodos);
  // }

  return (
    <div className="Todo">
      <div style={{ display: "flex" }}>
        <input
          type="text"
          id="todoTextData"
          className="todoText"
          onChange={(e) => setFormTodo(e.target.value)}
          // onKeyPress={pushTodo}
        />
        <button className="todoButton" onClick={pushTodo}>
          💬
        </button>
      </div>
      <div className="todos" id="todoList">
        {todos.map((item) => (
          <div style={{ display: "flex" }} key={item.id}>
            <div className="box">
              <hr />
              {item.content}
            </div>
            <button
              onClick={() => removeTodo(item.id, item.content)}
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
