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
import RegisterModal from "../RegisterModal/RegisterModal";
import AddPostModal from "../AddPostModal/AddPostModal";
import Experiment from "../Experiment/experiments";
import { addPost, getPosts } from "../../utils/api";
import { login, register, checkToken, setToken } from "../../utils/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [currentCard, setCurrentCard] = useState({});
  const [postItems, setPostItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    avatar: "",
    _id: "",
  });

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handlePostClick = (e) => {
    setActiveModal("post");
    setCurrentCard(e);
  };

  const handleAddPostClick = () => {
    setActiveModal("addPost");
  };

  const handleExperimentClick = () => {
    setActiveModal("experiment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSignIn = (email, password) => {
    return login({ email, password })
      .then((res) => {
        setToken(res.token);
        return checkToken(res.token);
      })
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        navigate("/");
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentUser({
      name: "",
      email: "",
      avatar: "",
      _id: "",
    });
    localStorage.removeItem("jwt");
    navigate("/");
  };

  const handleRegister = ({ name, email, password, avatar }) => {
    return register({ name, email, password, avatar })
      .then((data) => {
        console.log(data);
        handleSignIn(email, password);
      })
      .catch(console.error);
  };

  const onAddPost = ({ title, author, date, description, url }) => {
    addPost({ title, author, date, description, url })
      .then((res) => {
        setPostItems((prevItems) => {
          return [res, ...prevItems];
        });
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getPosts()
      .then((res) => {
        setPostItems(res);
      })
      .catch(console.error);
  }, []);

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
                handleAddPostClick={handleAddPostClick}
                postItems={postItems}
              />
            }
          />

          <Route
            path="/projects"
            element={
              <Projects
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
            path="/recipes"
            element={
              <Recipes
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

          <Route
            path="/experiments"
            element={
              <Experiment
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
            handleSignIn={handleSignIn}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal
            isOpen={activeModal === "register"}
            handleRegister={handleRegister}
            setActiveModal={setActiveModal}
            closeActiveModal={closeActiveModal}
          />
        )}
        {activeModal === "post" && (
          <PostModal
            isOpen={activeModal === "post"}
            setActiveModal={setActiveModal}
            closeActiveModal={closeActiveModal}
            card={currentCard}
          />
        )}
        {activeModal === "addPost" && (
          <AddPostModal
            isOpen={activeModal === "addPost"}
            setActiveModal={setActiveModal}
            closeActiveModal={closeActiveModal}
            onAddPost={onAddPost}
          />
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
