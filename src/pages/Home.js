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
<<<<<<< HEAD
            A Mechanical Engineering major at the Rochester Institute of Technology with a passion for learning and creating
=======
            A student at the Rochester Institute of Technology with a passion for learning and creating.
>>>>>>> ad0541a18def1efd3944e8e923881daab392b392
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
<<<<<<< HEAD
            <h2>Languages / Applications</h2>
            <span>Python, Java, C, C#, HTML, CSS, React, SQL, Linux, MATLAB</span>
=======
            <h2>Languages</h2>
            <span>Python, C, Java</span>
          </li>
          <li className="item">
            <h2>Knowledge In</h2>
            <span>Rust, HTML, CSS, C++, SQL</span>
>>>>>>> ad0541a18def1efd3944e8e923881daab392b392
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

export default Home
