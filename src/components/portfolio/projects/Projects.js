import React, { useState } from 'react';
import Modal from '../modal/Modal';
import DisplayProjects from '../displayProjects/DisplayProjects';

const Projects = ({onShow}) => {
  const [isOpen, setIsModelOpened] = useState(false);

	return (
		<>
  <DisplayProjects
    onClick={onShow}
  />
		</>
	);
};

export default Projects;
