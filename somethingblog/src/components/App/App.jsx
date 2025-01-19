import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
