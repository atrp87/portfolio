import React from 'react';
import ModalCSS from './Modal.module.css';

const Modal = (props) => {
  if (!props.show) {
    return null
  }
  return ( 
    <div className={ModalCSS.modal}>
      <div className={ModalCSS.content}>
        <div className={ModalCSS.modalLeft}>
          <img src="" alt=""/>
        </div>
        <div className={ModalCSS.modalRight}>
          <div className={ModalCSS.modalHeader}>
            <p>TITLE</p>
          </div>
          <div className={ModalCSS.modalBody}>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div className={ModalCSS.modalFooter}>
            <button>Live</button>
            <button>Code</button>
            <button onClick={props.onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;