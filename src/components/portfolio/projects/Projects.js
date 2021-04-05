import placeholder1 from '../../../assets/placeholder.jpeg';
import webShop from '../../../assets/webshop.jpg';
import ProjectsCSS from './Projects.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Projects = () => {
  return ( 
        <div className={ProjectsCSS.wrapper}>
          <div className={ProjectsCSS.col}>
              <Link to="wd">
                <img src={placeholder1} alt="Portfolio Screenshot"/>
              <div className={ProjectsCSS.content}>
                <h2>My Portfolio</h2>
                                <ul>
                  <li>REACTJS</li>
                  <li>REACT ROUTER</li>
                  <li>FRAMER MOTION</li>
                  <li>CSS MODUELS</li>
                </ul>
                <p>project info this is random place holder text and has no logic just info</p>
              </div>
              </Link>
        </div>

                  <div className={ProjectsCSS.col}>
              <Link to="wd">
                <img src={placeholder1} alt="Portfolio Screenshot"/>
              <div className={ProjectsCSS.content}>
                <h2>My Portfolio</h2>
                <p>project info this is random place holder text and has no logic just info</p>
                <ul>
                  <li>REACTJS</li>
                  <li>REACT ROUTER</li>
                  <li>FRAMER MOTION</li>
                  <li>CSS MODUELS</li>
                </ul>
              </div>
              </Link>
        </div>

         <div className={ProjectsCSS.col}>
              <Link to="wd">
                <img src={placeholder1} alt="Portfolio Screenshot"/>
              <div className={ProjectsCSS.content}>
                <h2>My Portfolio</h2>
                <p>project info this is random place holder text and has no logic just info</p>
                <ul>
                  <li>REACTJS</li>
                  <li>REACT ROUTER</li>
                  <li>FRAMER MOTION</li>
                  <li>CSS MODUELS</li>
                </ul>
              </div>
              </Link>
        </div>

         <div className={ProjectsCSS.col}>
              <Link to="wd">
                <img src={placeholder1} alt="Portfolio Screenshot"/>
              <div className={ProjectsCSS.content}>
                <h2>My Portfolio</h2>
                <p>project info this is random place holder text and has no logic just info</p>
                <ul>
                  <li>REACTJS</li>
                  <li>REACT ROUTER</li>
                  <li>FRAMER MOTION</li>
                  <li>CSS MODUELS</li>
                </ul>
              </div>
              </Link>
        </div>
      </div>
  );
}

export default Projects;