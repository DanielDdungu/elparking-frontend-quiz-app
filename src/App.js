import React from "react";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Questions from "./pages/Questions";
import Resultpage from "./pages/Resultpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="conatiner">
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/question" element={<Questions />} />
            <Route path="/resultpage" element={<Resultpage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
