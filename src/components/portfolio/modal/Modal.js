import ModalCSS from './Modal.module.css';
import { createPortal } from 'react-dom';
import React from 'react';

const Modal = ({ isOpened, children, onClose }) => {
  if (!isOpened) {
    return null;
  }

  return createPortal ( 
    <div>
      <div className={ModalCSS.overlay}></div>
        <div className={ModalCSS.modal}>
          <i 
            onClick={onClose}
            className={`${ModalCSS.close} fas fa-times`}>
          </i>
          <div className={`${ModalCSS.content} model-content`}>
            {children}
          </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;