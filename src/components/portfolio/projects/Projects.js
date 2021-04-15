import myPortfolio from '../../../assets/myPortfolio.png';
import Budget from '../../../assets/spendTracker.png';
import Covid from '../../../assets/covid19.png';
import ProjectsCSS from './Projects.module.css';
import Pilton from '../../../assets/pycp.png';
import React, { useState } from 'react';
import Modal from '../modal/Modal';

const Projects = () => {
	const [isModelOpened, setIsModelOpened] = useState(false);

	
	
	return (
		<div className={ProjectsCSS.wrapper}>
			<div className={ProjectsCSS.items}>
				<div onClick={() => setIsModelOpened(true)} className={ProjectsCSS.content}>
					<img src={myPortfolio} alt="Portfolio Screenshot" />
					<i className={`${ProjectsCSS.icon} fas fa-search-plus`} />
				</div>
				<Modal
					isOpened={isModelOpened} 
        onClose={() => setIsModelOpened(false)}>
					<p>HELLO 2</p>
				</Modal>
			</div>

      <div className={ProjectsCSS.items}>
					<div onClick={() => setIsModelOpened(true)} className={ProjectsCSS.content}>
					<img src={Covid} alt="COVID-19 Project Screenshot" />
					<i className={`${ProjectsCSS.icon} fas fa-search-plus`} />
				</div>
				 <Modal 
        isOpened={isModelOpened} 
        onClose={() => setIsModelOpened(false)}>
          <form className="login-form" onSubmit={() => isModelOpened(false)}>
            <section>
              <label htmlFor="">email</label>
              <input type="email" name="" id=""/>
            </section>
            <section>
              <label htmlFor="">password</label>
              <input type="password" name="" id=""/>
            </section>
            <button>Sign In</button>
          </form>
      </Modal>
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
