import ProjectsCSS from './Projects.module.css'
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
	// FIND a more efficient way of state use (useEffect ?) / reusable Modal component.
	// && Separate component for image displays / modal.

  return ( 
    <div className={ProjectsCSS.wrapper}>
			<div 
				onClick={() => setIsModalOpened1(true)} 
				className={ProjectsCSS.items}>
					<div className={ProjectsCSS.content}>
						<img src={myPortfolio} alt="Portfolio Screenshot" />
						<i className={`${ProjectsCSS.icon} fas fa-search-plus`} />
					</div>
			</div>
			<Modal 
				isOpened={isModalOpened1} 
				onClose={() => setIsModalOpened1(false)}>
						<div className={ProjectsCSS.modalLeft}>
							<img src={CovidGIF} alt="Portfolio GIF"/>
						</div>
						<div className={ProjectsCSS.modalRight}>
							<h3>My Portfolio.</h3>
								<ul>
									<li>React.JS</li>
									<li>JavaScript</li>
									<li>FRAMER MOTION</li>
									<li>REACT ROUTER</li>
									<li>REACT PORTALS</li>
								</ul>
								<h4>About.</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsam, asperiores dolorem impedit neque dolores sint praesentium laudantium? Alias veritatis incidunt maxime a molestiae amet nam exercitationem laborum quod? Debitis dicta assumenda exercitationem maxime a est veniam sequi quasi commodi soluta maiores, officiis similique rerum veritatis ex nemo incidunt consectetur.
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsam, asperiores dolorem impedit neque dolores sint praesentium laudantium? Alias veritatis incidunt maxime a molestiae amet nam exercitationem laborum quod? Debitis dicta assumenda exercitationem maxime a est veniam sequi quasi commodi soluta maiores, officiis similique rerum veritatis ex nemo incidunt consectetur.
								</p>
								<button>Live Version</button>
								<button>Code</button>
						</div>
				</Modal>





      <div className={ProjectsCSS.items}>
					<div onClick={() => setIsModalOpened2(true)} className={ProjectsCSS.content}>
					<img src={Covid} alt="COVID-19 Project Screenshot" />
					<i className={`${ProjectsCSS.icon} fas fa-search-plus`} />
				</div>
			</div>

						<Modal 
				isOpened={isModalOpened2} 
				onClose={() => setIsModalOpened2(false)}>
						<div className={ProjectsCSS.ModalLeft}>
							<img src={CovidGIF} alt=""/>
						</div>
						<div className={ProjectsCSS.ModalRight}>
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
}

export default DisplayProjects;