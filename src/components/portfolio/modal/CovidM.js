import ModalCSS from './Modal.module.css'
import {createPortal} from 'react-dom';
import gif from '../../../assets/covid.gif'
import React from 'react';

const CovidM = ({ isOpened, children, onClose }) => {
  if (!isOpened) {
    return null;
  }

  return createPortal ( 
    <div className={ModalCSS.overlay}>
      <div className={ModalCSS.modal}>
        <div className={ModalCSS.modalLeft}>
          <img src={gif} alt="Covid-19 Project Gif" />
        </div>
        <div className={ModalCSS.modalRight}>
          <h3>Covid-19 "Angela"</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>VUE.js</li>
            <li></li>
          </ul>
          <p>I will need a scroll bar!!!</p>
          <button>Live Version</button>
          <button>Code</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default CovidM;