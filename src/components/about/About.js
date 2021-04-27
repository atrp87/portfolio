// import AboutCSS from './About.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';
import './About.css';

const pageVariants = {
	initial: {
		opacity: 1
	},
	final: {
		opacity: 1,
		transition: { delay: 0.6, duration: 0.8 }
	},
	exit: {
		opacity: 0,
		transition: { ease: 'easeInOut' }
	}
};

const About = () => {
	return (
		<motion.div className='wrapper'
			variants={pageVariants} 
			initial="initial" 
			animate="final" 													
			exit="exit">
				<div className="swipe">
					<h1>Hi, I'm Andrew Peattie.</h1>
				</div>
				<div className="swipe swipe--delay">
					<h3>Front-end Developer.</h3>
				</div>
				<div>
					<p>
						I'm a Web Developer based in Edinburgh, Scotland with industry 
						training experience building websites and web applications.
					</p>
					<p>
						The idea of taking any design and turning it into something that 
						is responsive and accessible keeps me motivated & engaged.
					</p>
				</div>
				<div>
					<Link to="/portfolio">
						<button type="button">view my work</button>
					</Link>
				</div>
		</motion.div>
	);
};

export default About;
