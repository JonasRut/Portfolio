import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
    <div className="project">
        <div className="header">
          <h1>{project.name}</h1>
        </div>
        <img src={project.image} alt="project image"/>
        <p className="skills"><b>Skills:</b> {project.skills}</p>
        <p className="description">{project.describtion}</p>
    </div>
  )
}

export default ProjectDisplay