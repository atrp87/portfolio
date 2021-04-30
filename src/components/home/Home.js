// import AboutCSS from './About.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';
import './Home.css';

const pageVariants = {
	initial: {
		opacity: 0
	},
	final: {
		opacity: 1,
		transition: { delay: 0.4, duration: 0.6 }
	},
	exit: {
		opacity: 0,
		transition: { ease: 'easeInOut' }
	}
};

const Home = () => {
	return (
		<motion.div className='flexbox-home'
			variants={pageVariants} 
			initial="initial" 
			animate="final" 													
			exit="exit">
				<div>
					<h1>Hi, I'm Andrew Peattie<span className='redCharacter'>.</span>
					</h1>
				</div>
				<div>
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
						<div className="btn btn-one">
							<span>View my work</span>
						</div>
					</Link>
				</div>
		</motion.div>
	);
};

export default Home;
