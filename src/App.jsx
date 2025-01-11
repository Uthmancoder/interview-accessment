import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/homepage";
import PersonalInfo from "./components/personal-info";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
