import React from 'react';
import DisplayProjectsCSS from './DisplayProjects.module.css';
import Projects from '../projects/Projects'
import myPortfolio from '../../../assets/myPortfolio.png';
import Budget from '../../../assets/spendTracker.png';
import Covid from '../../../assets/covid19.png';
import Pilton from '../../../assets/pycp.png';

const DisplayProjects = ({onShow, onShow2}) => {
  return ( 
    <div className={DisplayProjectsCSS.wrapper}>
			<div onClick={onShow} className={DisplayProjectsCSS.items}>
				<div className={DisplayProjectsCSS.content}>
					<img src={myPortfolio} alt="Portfolio Screenshot" />
					<i className={`${DisplayProjectsCSS.icon} fas fa-search-plus`} />
				</div>
        </div>
      <div onClick={onShow2} className={DisplayProjectsCSS.items}>
					<div className={DisplayProjectsCSS.content}>
					<img src={Covid} alt="COVID-19 Project Screenshot" />
					<i className={`${DisplayProjectsCSS.icon} fas fa-search-plus`} />
				</div>
			</div>
			<div className={DisplayProjectsCSS.items}>
				<div className={DisplayProjectsCSS.content}>
					<img src={Budget} alt="Spending Tracker Project Screenshot" />
          <i className={`${DisplayProjectsCSS.icon} fas fa-search-plus`} />
				</div>
			</div>
			<div className={DisplayProjectsCSS.items}>
				<div className={DisplayProjectsCSS.content}>
					<img src={Pilton} alt="PYCP Volunteer Work Screenshot" />
          <i className={`${DisplayProjectsCSS.icon} fas fa-search-plus`} />
				</div>
			</div>
		</div>
  );
}

export default DisplayProjects;

