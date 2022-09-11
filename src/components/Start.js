import "./styles.css";
import React, { useState } from "react";
import Recent from "./Recent";

function Start({ completedTodos }) {
  return (
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
  );
}

export default Start;
