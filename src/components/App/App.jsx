import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import AppContext from "../context/AppContext";
import About from "../About/About";
import PostCard from "../PostCard/PostCard";
import Projects from "../Projects/Projects";
import Recipes from "../Recipes/Recipes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleSignOut = () => {
    setIsLoggedIn(false);
  };

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="page">
      <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          <Route
            path="/"
            element={
              <PostCard
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
                isLoggedIn={isLoggedIn}
                handleSignIn={handleSignIn}
                handleSignOut={handleSignOut}
              />
            }
          />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
