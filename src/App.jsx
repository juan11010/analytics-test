import "./App.css";

import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Signup from "./signup";

function App() {
  return (
    <>
      <h1>Google Analytics Test</h1>
      <hr />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
