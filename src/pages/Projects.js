import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from '../helpers/ProjectList';

import "../styles/Projects.css";
import TagManager from 'react-gtm-module';

function Projects() {
  const location = useLocation();

  useEffect(() => {
    const tagManagerArgs = {
        gtmId: 'G-6BSYJ743Y3'
    };
    TagManager.initialize(tagManagerArgs);
    
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageview',
        pagePath: location.pathname,
      },
    });
  }, [location]);

  return (
    <div className="projects">
        <h1>My Personal Projects</h1>
        <div className="projectList">
            {ProjectList.map((project, index) => {
                return <ProjectItem id={index} name={project.name} image={project.image} />
            })}
        </div>
    </div>
  )
}

export default Projects