import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PersonalInfo from "./PersonalInfo";
import MainContent from "./MainContent";
import ProjectPage from "./ProjectPage";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} exact />
    <Route path="/Gopinath_WebWorks/main-content" element={<MainContent />} />
    <Route path="/Gopinath_WebWorks/Project" element={<ProjectPage />} />
    <Route path="/Gopinath_WebWorks/contact" element={<PersonalInfo />} />
  </Routes>
  
  );
};

export default App;
