import "./styles.css";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="Topbar">
      <nav id="navbar" class="">
        <div class="nav-wrapper">
          <ul id="menu">
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/pomodoro">Pomodoro</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
