import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    const navigate = (url) => {
      window.open(url, "_blank", "noreferrer");
    }

    let displayButton = true
    if (id == 0) {
      displayButton = false
    }

    return (
    <div className="project">
        <div className="header">
          <h1>{project.name}</h1>
        </div>
        <img src={project.image} alt="project image"/>
        <p className="skills"><b>Skills:</b> {project.skills}</p>
        <p className="description">{project.describtion}</p>
        
        <button className="additionalLink" hidden={displayButton} onClick={() => navigate(project.additionalLink)}>YouTube Gameplay</button>
    </div>
  )
}

export default ProjectDisplay