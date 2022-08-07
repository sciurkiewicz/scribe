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
              <Link to="/pomodoro">Pomodoro</Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
