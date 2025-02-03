import React, {useEffect} from 'react'
import { withRouter } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHub from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import "../styles/Home.css";

function Home() {
  const navigate = (url) => {
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div className="home">
      <div className="about"> 
        <div className="intro">
          <h2> Hi, My Name is Jonas</h2>
        </div>
        <div className="prompt">
          <p> 
            A Mechanical Engineering major at the Rochester Institute of Technology with a passion for learning and creating
          </p>
          <div className="buttons">
            <div className="buttonContainer">
            <IconButton className="button" onClick={() => navigate("https://www.linkedin.com/in/jonas-rutkowski-63958923a/")}>
              <LinkedInIcon />
            </IconButton>
            </div>
            <div className="buttonContainer">
            <IconButton className="button" onClick={() => navigate("https://github.com/JonasRut")}>
              <GitHub />
            </IconButton>
            </div>
          </div>
          <button onClick={() => navigate("mailto:jonasrutkowski6@gmail.com")}>jonasrutkowski6@gmail.com</button>
          <button onClick={() => navigate("mailto:jmr3062@rit.edu")}>jmr3062@rit.edu</button>
        </div>
      </div>
      <div className="skills"> 
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages / Applications</h2>
            <span>Python, Java, C, C#, HTML, CSS, React, SQL, Linux, MATLAB</span>
          </li>
          <li className="item">
            <h2>Computer Aided Design</h2>
            <span>Fusion 360, OnShape</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;
