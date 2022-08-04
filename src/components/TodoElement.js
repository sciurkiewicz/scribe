import "./todo.css";

function TodoElement() {
  return (
    <div style={{ display: "flex" }}>
      <div className="todoNote"></div>
      <button
        onClick={console.log("deleted")}
        className="todoButton"
        style={{ marginTop: "1%", marginBottom: "1%" }}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoElement;
