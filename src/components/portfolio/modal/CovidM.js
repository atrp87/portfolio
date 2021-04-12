import ModalCSS from './Modal.module.css'
import {createPortal} from 'react-dom';
import gif from '../../../assets/covid.gif'
import React from 'react';

const CovidM = ({ isOpened, onClose }) => {
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
          <i onClick={onClose} className={`${ModalCSS.close} fas fa-times`}></i>
          <h3>Covid-19 "Angela"</h3>
          <ul>
            <li>HTML & CSS</li>
            <li>JAVASCRIPT</li>
            <li>VUE</li>
            <li>BOOTSTRAP</li>
            <li>LEAFLET MAPS</li>
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