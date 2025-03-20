import "./About.css";
import HomeContent from "../Nav/Nav";
import HeaderNav from "../HeaderNav/HeaderNav";

function About() {
  return (
    <>
      <HeaderNav />
      <HomeContent />
      <div className="about">
        <h1 className="about__title">About Me</h1>
        <p className="about__description">
          I am a software engineer with a passion for creating and building
          applications that help people. I have experience in full-stack
          development, and I am always looking to learn new technologies and
          improve my skills. I am excited to work on projects that challenge me
          and allow me to grow as a developer.
        </p>
      </div>
    </>
  );
}

export default About;
