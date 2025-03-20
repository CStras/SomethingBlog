import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import AppContext from "../context/AppContext";
import About from "../About/About";
import PostCard from "../PostCard/PostCard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="page">
      <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          <Route path="/" element={<PostCard isLoggedIn={isLoggedIn} />} />
          <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
