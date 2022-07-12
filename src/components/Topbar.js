import "./topbar.css";

function Topbar() {
  return (
    <div className="Topbar">
      <nav id="navbar" class="">
        <div class="nav-wrapper">
          <ul id="menu">
            <li>
              <a href="#home">Zaloguj Się</a>
            </li>
            <li>
              <a href="#services">Profil</a>
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
