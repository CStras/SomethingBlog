import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="posts__nav">
      <div className="posts__nav-links">
        <Link to="/" className="posts__home-link">
          <button type="button" className="posts__home-btn">
            Home
          </button>
        </Link>
        <Link to="/about" className="posts__about-link">
          <button type="button" className="posts__about-btn">
            About
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
