import "./About.css";
import Nav from "../Nav/Nav";
import HeaderNav from "../HeaderNav/HeaderNav";
import selfPhoto from "../../assets/aboutPic.jpg";
import { Link } from "react-router-dom";

function About({ isLoggedIn, handleSignIn, handleSignOut, handleLoginClick }) {
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
          <h1 className="about__title">About Me</h1>
          <p className="about__description">
            I am a software engineer with a passion for creating and building
            applications that help people. I have experience in full-stack
            development, and I am always looking to learn new technologies and
            improve my skills. I am excited to work on projects that challenge
            me and allow me to grow as a developer.
          </p>
        </div>
      </div>
      <div className="about__content">
        <Link
          className="about__link"
          target="_blank"
          to="https://github.com/CStras/SomethingBlog"
        >
          Click here to see the website progress!
        </Link>
        <img className="about__photo" src={selfPhoto} />
      </div>
    </>
  );
}

export default About;
