import React, {useEffect} from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home';
// import Projects from './pages/Projects';
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ProjectDisplay from "./pages/ProjectDisplay";
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga4'

ReactGA.initialize("G-6BSYJ743Y3");
ReactGA.send({ 
  hitType: "pageview", 
  page: window.location.pathname,
});

function App()
{
  return <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects/" element={<Projects />} />
          <Route path="/projects/:id/" element={<ProjectDisplay />}/> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>;
}

export default App;
