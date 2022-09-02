import "./styles.css";
import React, { useState } from "react";

function Start() {
  return (
    <div className="Start flex">
      <div className="box smallMargin elementsCenter">
        Recently completed tasks
        <hr />
      </div>
      <div className="box smallMargin elementsCenter">
        Quick Note <hr />
      </div>
    </div>
  );
}

export default Start;
