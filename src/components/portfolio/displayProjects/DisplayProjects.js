import DisplayProjectsCSS from './DisplayProjects.module.css';
import myPortfolio from '../../../assets/myPortfolio.png';
import Budget from '../../../assets/spendTracker.png';
import Covid from '../../../assets/covid19.png';
import Pilton from '../../../assets/pycp.png';
import React, { useState} from 'react';
import Modal from '../modal/Modal';

const DisplayProjects = () => {
	const [isModalOpened, setIsModalOpened] = useState(false);
	console.log('isModalOpened', isModalOpened);

  return ( 
    <div className={DisplayProjectsCSS.wrapper}>
			<div onClick={() => setIsModalOpened(true)} className={DisplayProjectsCSS.items}>
				<div className={DisplayProjectsCSS.content}>
					<img src={myPortfolio} alt="Portfolio Screenshot" />
					<i className={`${DisplayProjectsCSS.icon} fas fa-search-plus`} />
				</div>
			</div>
			<Modal 
				isOpened={isModalOpened} 
				onClose={() => setIsModalOpened(false)}>
					<section>
            <label>1</label>
          </section>
			</Modal>





      <div className={DisplayProjectsCSS.items}>
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