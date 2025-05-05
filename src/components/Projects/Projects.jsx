import "./Projects.css";
import Nav from "../Nav/Nav";
import HeaderNav from "../HeaderNav/HeaderNav";
import ItemCard from "../ItemCard/ItemCard";
import projects from "../../utils/projects";
import add from "../../assets/add-btn.svg";
import { Link } from "react-router-dom";

function Projects({
  isLoggedIn,
  handleSignIn,
  handleSignOut,
  handlePostClick,
  handleLoginClick,
  currentUser,
  handleAddPostClick,
}) {
  return (
    <>
      <HeaderNav
        isLoggedIn={isLoggedIn}
        handleSignIn={handleSignIn}
        handleSignOut={handleSignOut}
        handleLoginClick={handleLoginClick}
      />
      <Nav />
      <div className="recipes">
        <div className="recipes__header-content">
          <h1 className="header__title">Projects</h1>
          {currentUser.admin && (
            <div className="cards__add-post-btn-container">
              <img
                onClick={handleAddPostClick}
                className="cards__add-post-btn"
                id="add-post-btn"
                src={add}
              />
            </div>
          )}
          <Link to="/experiments" className="projects__link">
            Experiments
          </Link>
        </div>
      </div>
      <main className="content">
        <section className="posts page__section">
          <section className="card-list">
            <div className="cards">
              {projects.map((item) => (
                <ItemCard
                  item={item}
                  key={item.id}
                  handlePostClick={handlePostClick}
                />
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Projects;
