import AboutCSS from './About.module.css'
import { Link } from 'react-router-dom';
import React from 'react';


const About = () => {    
    return (
        <div className={AboutCSS.aboutWrapper}>
            <div className={AboutCSS.swipe}>
                <h1>Hi, I'm Andrew Peattie.</h1>
            </div>
            <div className={AboutCSS.swipe + '&--delay'}>
                <h3>Front-end Developer.</h3>
            </div>
            <div>
                <p> I am a Software developer with industry training experience building 
                    websites and web applications. Currently working with Javascript, 
                    React and MongoDB. I also have experience with Ruby, Java, PostgreSQL
                    and Vue. Looking for new and exciting opportunities as I progress 
                    within the industry.
                </p>
            </div>
            <div>
                <Link to="/portfolio">
                <button type="button">View my work</button>
                </Link>
            </div>
        </div>
    );
}

export default About;