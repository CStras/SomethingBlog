import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import AppContext from "../../context/AppContext";
import About from "../About/About";
import PostCard from "../PostCard/PostCard";
import Projects from "../Projects/Projects";
import Recipes from "../Recipes/Recipes";
import LoginModal from "../LoginModal/LoginModal";
import PostModal from "../PostModal/PostModal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handlePostClick = () => {
    setActiveModal("post");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  //add useeffect to check db for new posts and update state

  useEffect(() => {
    if (!activeModal) return;

    const handleModalClose = (evt) => {
      if (
        (evt.target.classList.contains("modal_open") && evt.type === "click") ||
        evt.key === "Escape"
      ) {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleModalClose);
    document.addEventListener("click", handleModalClose);

    return () => {
      document.removeEventListener("keydown", handleModalClose);
      document.removeEventListener("click", handleModalClose);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          <Route
            path="/"
            element={
              <PostCard
                closeActiveModal={closeActiveModal}
                handleLoginClick={handleLoginClick}
                handlePostClick={handlePostClick}
                isLoggedIn={isLoggedIn}
                handleSignIn={handleSignIn}
                handleSignOut={handleSignOut}
              />
            }
          />

          <Route
            path="/projects"
            element={
              <Projects
                closeActiveModal={closeActiveModal}
                handleLoginClick={handleLoginClick}
                isLoggedIn={isLoggedIn}
                handleSignIn={handleSignIn}
                handleSignOut={handleSignOut}
              />
            }
          />

          <Route
            path="/recipes"
            element={
              <Recipes
                closeActiveModal={closeActiveModal}
                handleLoginClick={handleLoginClick}
                isLoggedIn={isLoggedIn}
                handleSignIn={handleSignIn}
                handleSignOut={handleSignOut}
              />
            }
          />

          <Route
            path="/about"
            element={
              <About
                closeActiveModal={closeActiveModal}
                handleLoginClick={handleLoginClick}
                isLoggedIn={isLoggedIn}
                handleSignIn={handleSignIn}
                handleSignOut={handleSignOut}
              />
            }
          />
        </Routes>
        {activeModal === "login" && (
          <LoginModal
            isOpen={activeModal === "login"}
            setActiveModal={setActiveModal}
            closeActiveModal={closeActiveModal}
          />
        )}
        {activeModal === "post" && (
          <PostModal
            isOpen={activeModal === "post"}
            setActiveModal={setActiveModal}
            closeActiveModal={closeActiveModal}
          />
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
