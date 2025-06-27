import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // ✅ Make sure App.jsx is default exported

const MainComponent = () => {
  const [introDone, setIntroDone] = React.useState(false);

  const refs = {
    homeRef: React.useRef(null),
    aboutRef: React.useRef(null),
    skillsRef: React.useRef(null),
    projectsRef: React.useRef(null),
    contactRef: React.useRef(null),
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={<App introDone={introDone} setIntroDone={setIntroDone} refs={refs} />}
        />
      </Routes>
    </Router>
  );
};

export default MainComponent;
