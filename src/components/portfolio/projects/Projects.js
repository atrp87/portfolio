import placeholder1 from '../../../assets/placeholder.jpeg';
import ruby from '../../../assets/ruby.png';
import Modal from '../modal/Modal';
import Button from '../../navigation/button/Button';
import ProjectsCSS from './Projects.module.css';
import React, { useState } from 'react';
  
const Projects = () => {

    const[showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }
  
  <Modal showModal={showModal} setShowModal={setShowModal}/>
  return (
  <>
    <div className={ProjectsCSS.wrapper}>
      <div className={ProjectsCSS.content}>
        <img 
          src={placeholder1} 
          alt="Portfolio Screenshot"/>
        <Button Rby={handleClick}/>
      </div>
      <div className={ProjectsCSS.content}>
        <img 
          src={placeholder1} 
          alt="Portfolio Screenshot"/>
        <Button />
      </div>
      <div className={ProjectsCSS.content}>
        <img 
          src={ruby} 
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
  </>
  );
}

export default Projects;