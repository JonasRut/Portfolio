import React from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App()
{
  return <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/projects/" element={<Projects />} />
          <Route path="/portfolio/projects/:id/" element={<ProjectDisplay />}/>
          <Route path="/portfolio/experience/" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>;
}

export default App;
