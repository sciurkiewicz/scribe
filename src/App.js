import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import "./App.css";
import Pomodoro from "./components/Pomodoro";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar></Topbar>
        <div className="contentWrapper">
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
