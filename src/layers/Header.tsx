import "./Header.css";

function Header() {
  return (
    <div className="header">
      <a href="/">
        <img className="logo" src="/src/assets/logo.png" alt="logo" />
      </a>
      <nav className="nav">
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/a-propos">A propos</a>
        </li>
      </nav>
    </div>
  );
}

export default Header;
