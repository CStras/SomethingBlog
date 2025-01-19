import "./HomeContent.css";

function HomeContent() {
  return (
    <nav className="posts__nav">
      <button type="button" className="posts__home-btn">
        Home
      </button>
      <button type="button" className="posts__about-btn">
        About
      </button>
    </nav>
  );
}

export default HomeContent;
