import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="posts__nav">
      <div className="posts__nav-links">
        <Link to="/" className="posts__link">
          Home
        </Link>
        <Link to="/projects" className="posts__link">
          Projects
        </Link>
        <Link to="/recipes" className="posts__link">
          Recipes
        </Link>
        <Link to="/about" className="posts__link">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
