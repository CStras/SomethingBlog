import "./Projects.css";
import Nav from "../Nav/Nav";
import HeaderNav from "../HeaderNav/HeaderNav";
import recipes from "../../utils/recipes";

function Projects({ isLoggedIn, handleSignIn, handleSignOut }) {
  return (
    <>
      <HeaderNav
        isLoggedIn={isLoggedIn}
        handleSignIn={handleSignIn}
        handleSignOut={handleSignOut}
      />
      <Nav />
    </>
  );
}

export default Projects;
