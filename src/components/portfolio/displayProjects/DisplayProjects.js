import DisplayProjectsCSS from './DisplayProjects.module.css';
import myPortfolio from '../../../assets/myPortfolio.png';
import Budget from '../../../assets/spendTracker.png';
import Covid from '../../../assets/covid19.png';
import CovidGIF from '../../../assets/covid.gif';
import Pilton from '../../../assets/pycp.png';
import React, { useState} from 'react';
import Modal from '../modal/Modal';

const DisplayProjects = () => {
	const [isModalOpened1, setIsModalOpened1] = useState(false);
	const [isModalOpened2, setIsModalOpened2] = useState(false);
	// FIND a more efficient way of state use / reusable Modal component.
	// && Separate component for image displays / modal.

  return ( 
    <div className={DisplayProjectsCSS.wrapper}>
			<div 
				onClick={() => setIsModalOpened1(true)} 
				className={DisplayProjectsCSS.items}>
					<div className={DisplayProjectsCSS.content}>
						<img src={myPortfolio} alt="Portfolio Screenshot" />
						<i className={`${DisplayProjectsCSS.icon} fas fa-search-plus`} />
					</div>
			</div>
			<Modal 
				isOpened={isModalOpened1} 
				onClose={() => setIsModalOpened1(false)}>
						<div className='modal-left'>
							<img src={CovidGIF} alt="Portfolio GIF"/>
						</div>
						<div className="modal-right">
							<h3>My Portfolio</h3>
								<ul>
									<li>React.JS</li>
									<li>JavaScript</li>
									<li>FRAMER MOTION</li>
									<li>REACT ROUTER</li>
									<li>REACT PORTALS</li>
								</ul>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsam, asperiores dolorem impedit neque dolores sint praesentium laudantium? Alias veritatis incidunt maxime a molestiae amet nam exercitationem laborum quod? Debitis dicta assumenda exercitationem maxime a est veniam sequi quasi commodi soluta maiores, officiis similique rerum veritatis ex nemo incidunt consectetur.
								</p>
								<button>Live Version</button>
								<button>Code</button>
						</div>
				</Modal>





      <div className={DisplayProjectsCSS.items}>
					<div onClick={() => setIsModalOpened2(true)} className={DisplayProjectsCSS.content}>
					<img src={Covid} alt="COVID-19 Project Screenshot" />
					<i className={`${DisplayProjectsCSS.icon} fas fa-search-plus`} />
				</div>
			</div>

						<Modal 
				isOpened={isModalOpened2} 
				onClose={() => setIsModalOpened2(false)}>
						<div className={DisplayProjectsCSS.ModalLeft}>
							<img src={CovidGIF} alt=""/>
						</div>
						<div className={DisplayProjectsCSS.ModalRight}>
							<h3>COVID-19 "Angela"</h3>
								<ul>
									<li>HTML & CSS</li>
									<li>BOOTSTRAP</li>
									<li>JavaScript</li>
									<li>Vue.JS</li>
									<li>MONGODB</li>
								</ul>
								<p>
									INFO ON PROJECT / SCROLL BAR
								</p>
						</div>
				</Modal>

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