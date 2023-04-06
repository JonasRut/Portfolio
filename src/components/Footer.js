import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHub from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import "../styles/Footer.css"


function Footer() {
  const navigate = (url) => {
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div className="footer">
        <div className="socialMedia">
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
        </div>
        <div className="text">
            <button className="footerButton" onClick={() => navigate("mailto:mailjorut@gmail.com")}>mailjorut@gmail.com</button>
            <p>&copy; 2023 JonasRut.github.com/portfolio</p>
        </div>
    </div>
  )
}

export default Footer