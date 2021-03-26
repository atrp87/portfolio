import AboutCSS from './About.module.css'
import { Link } from 'react-router-dom';
import React from 'react';


const About = () => {
    return (
        <div className={AboutCSS.about}>
            <h1>Hello, my name is Andrew Peattie.</h1>
            <p>I am a Software developer with industry training experience building websites and web applications. Currently working with Javascript, React and MongoDB. I also have experience with Ruby, Java, PostgreSQL and Vue. Looking for new and exciting opportunities as I progress within the industry. </p>
            <Link to="/portfolio">
                <button type="button">View my work</button>
            </Link>
        </div>
    );
}

export default About;