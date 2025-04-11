import "./Projects.css";
import Nav from "../Nav/Nav";
import HeaderNav from "../HeaderNav/HeaderNav";
import ItemCard from "../ItemCard/ItemCard";
import projects from "../../utils/projects";

function Projects({
  isLoggedIn,
  handleSignIn,
  handleSignOut,
  handlePostClick,
}) {
  return (
    <>
      <HeaderNav
        isLoggedIn={isLoggedIn}
        handleSignIn={handleSignIn}
        handleSignOut={handleSignOut}
      />
      <Nav />
      <div className="recipes">
        <div className="recipes__header-content">
          <h1 className="header__title">Projects</h1>
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
