import myPortfolio from '../../../assets/myPortfolio.png';
import Budget from '../../../assets/spendTracker.png';
import Covid from '../../../assets/covid19.png';
import ProjectsCSS from './Projects.module.css';
import Pilton from '../../../assets/pycp.png';
import React, { useState } from 'react';
import CovidM from '../modal/CovidM';

const Projects = () => {
	const [isModelOpened, setIsModelOpened] = useState(false);

	return (
		<div className={ProjectsCSS.wrapper}>
			<div className={ProjectsCSS.items}>
				<div className={ProjectsCSS.content}>
					<img src={myPortfolio} alt="Portfolio Screenshot" />
					<i className={`${ProjectsCSS.icon} fas fa-search-plus`} />
				</div>
			</div>

      <div 
				onClick={() => setIsModelOpened(true)} className={ProjectsCSS.items}>
					<div className={ProjectsCSS.content}>
					<img src={Covid} alt="COVID-19 Project Screenshot" />
					<i className={`${ProjectsCSS.icon} fas fa-search-plus`} />
				</div>
				<CovidM 
					isOpened={isModelOpened} 
					onClose={() => setIsModelOpened(false)} />
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
