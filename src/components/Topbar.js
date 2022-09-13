import "./styles.css";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="Topbar">
      <iframe
        title="player"
        src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
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
