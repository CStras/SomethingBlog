import "./experiments.css";
import HeaderNav from "../HeaderNav/HeaderNav";
import Nav from "../Nav/Nav";
import FlipCard from "../FlipCard/flipCard";
import add from "../../assets/add-btn.svg";

const Experiment = (
  isLoggedIn,
  handleSignIn,
  handleSignOut,
  handleLoginClick,
  handleAddPostClick
) => {
  return (
    <>
      <HeaderNav
        isLoggedIn={isLoggedIn}
        handleSignIn={handleSignIn}
        handleSignOut={handleSignOut}
        handleLoginClick={handleLoginClick}
      />
      <Nav />
      <div className="experiments">
        <div className="experiments__container">
          <h1 className="experiments__title">Experiments</h1>
          <p className="experiments__description">
            This is an area for all the interesting software technologies and
            techniques I am excited about!
          </p>
          {isLoggedIn && (
            <div className="experiments__add-post-btn-container">
              <img
                onClick={handleAddPostClick}
                className="experiments__add-post-btn"
                id="add-post-btn"
                src={add}
              />
            </div>
          )}
        </div>
        <div className="experiment">
          <FlipCard />
        </div>
      </div>
    </>
  );
};

export default Experiment;
