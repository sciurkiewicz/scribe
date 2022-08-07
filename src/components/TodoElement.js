import "./styles.css";

function TodoElement(props) {
  return (
    <div style={{ display: "flex" }}>
      <div className="todoNote">{props.content}</div>
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
