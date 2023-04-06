import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHub from '@material-ui/icons/GitHub';
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from '@material-ui/core';
import "../styles/Home.css"

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
            A senior in high school with a passion for learning and creating.
          </p>
          <div className="buttons">
            <div className="buttonContainer">
              <IconButton className="button" onClick={() => navigate("https://www.instagram.com/jorut1/")}>
                <InstagramIcon />
              </IconButton>
            </div>
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
          <button onClick={() => navigate("mailto:mailjorut@gmail.com")}>mailjorut@gmail.com</button>
        </div>
      </div>
      <div className="skills"> 
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>Python, C, Rust</span>
          </li>
          <li className="item">
            <h2>Computer Aided Software</h2>
            <span>Fusion 360</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home