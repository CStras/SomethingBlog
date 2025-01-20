import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import AppContext from "../context/AppContext";
import About from "../About/About";
import PostCard from "../PostCard/PostCard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="page">
      <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes>
          <Route path="/" element={<PostCard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

/* 
          <Route
            path="*"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          /> 
*/

export default App;
