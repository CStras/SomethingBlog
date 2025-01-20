import "./HomeContent.css";
import { Link } from "react-router-dom";

function HomeContent() {
  return (
    <nav className="posts__nav">
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
    </nav>
  );
}

export default HomeContent;
