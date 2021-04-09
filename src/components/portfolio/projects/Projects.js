import myPortfolio from '../../../assets/myPortfolio.png';
import Budget from '../../../assets/spendTracker.png';
import Covid from '../../../assets/covid19.png';
import ProjectsCSS from './Projects.module.css';
import Pilton from '../../../assets/pycp.png';
import React, { useState } from 'react';
// import Modal from '../modal/Modal';

const Projects = () => {
	//   const[showModal, setShowModal] = useState(false);

	// const handleClick = () => {
	//   setShowModal(true);
	// }

	// <Modal showModal={showModal} setShowModal={setShowModal}/>

	//   const pageVariants = {
	//     initial: {
	//         opacity: 0,
	//     },
	//     final: {
	//         opacity: 1,
	//         transition: {delay: 0.6, duration: 0.8}
	//     },
	//     exit: {
	//         opacity: 0,
	//         transition: {ease: 'easeInOut'}
	//     }
	// }

	// const [ isShown, setIsShown ] = useState(false);
	// {isShown && (<i className={`${ProjectsCSS} fas fa-eye`}></i> )}
	return (
		<div className={ProjectsCSS.wrapper}>
			<div className={ProjectsCSS.items}>
				<div className={ProjectsCSS.content}>
					<img src={myPortfolio} alt="Portfolio Screenshot" />
					<i className={`${ProjectsCSS.icon} fas fa-search-plus`} />
				</div>
			</div>
      <div className={ProjectsCSS.items}>
			<div className={ProjectsCSS.content}>
			
					<img src={Covid} alt="COVID-19 Project Screenshot" />
					<i className={`${ProjectsCSS.icon} fas fa-search-plus`} />
				</div>
			</div>
			<div className={ProjectsCSS.items}>
				<div className={ProjectsCSS.content}>
					<img src={Budget} alt="Spending Tracker Project Screenshot" />
          <i className={`${ProjectsCSS.icon} fas fa-search-plus`} />
				</div>
			</div>
			<div className={ProjectsCSS.items}>
				<div className={ProjectsCSS.content}>
					<img src={Pilton} alt="PYCP Volunteer Work Screenshot" />
          <i className={`${ProjectsCSS.icon} fas fa-search-plus`} />
				</div>
			</div>
		</div>
  
	);
};

export default Projects;
