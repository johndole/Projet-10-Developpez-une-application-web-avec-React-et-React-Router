import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  // Récupère l'URL actuelle
  const location = useLocation();

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src="/src/assets/logo.png" alt="logo" />
      </Link>
      <nav className="nav">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/a-propos"
            className={location.pathname === "/a-propos" ? "active" : ""}
          >
            A propos
          </Link>
        </li>
      </nav>
    </div>
  );
}

export default Header;
