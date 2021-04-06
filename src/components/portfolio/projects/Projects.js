import placeholder1 from '../../../assets/placeholder.jpeg';
import ProjectsCSS from './Projects.module.css';
import React from 'react';
import Button from '../../navigation/button/Button';

const Projects = () => {

  return ( 
    <div className={ProjectsCSS.wrapper}>
      <div className={ProjectsCSS.content}>
        <img 
          src={placeholder1} 
          alt="Portfolio Screenshot"/>
        <Button />
      </div>
      <div className={ProjectsCSS.content}>
        <img 
          src={placeholder1} 
          alt="Portfolio Screenshot"/>
        <Button />
      </div>
      <div className={ProjectsCSS.content}>
        <img 
          src={placeholder1} 
          alt="Portfolio Screenshot"/>
        <Button />
      </div>
      <div className={ProjectsCSS.content}>                
        <img 
          src={placeholder1} 
          alt="Portfolio Screenshot"/>
        <Button />
      </div>
    </div>
  );
}

export default Projects;