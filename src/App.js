import Topbar from "./components/Topbar";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="contentWrapper">
        <Todo></Todo>
      </div>
    </div>
  );
}

export default App;
