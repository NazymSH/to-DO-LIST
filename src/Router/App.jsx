
import React from "react";
import './Router.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import Profile from './Profile';
import Project from './Project';
import Kino from "../Kino";
// import About from './About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Project/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<Project />} />
        <Route path="/kino" element={<Kino/>}/>
      </Routes>
    </Router>
  );
}

export default App;
