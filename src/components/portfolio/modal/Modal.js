import ModalCSS from './Modal.module.css'
import {createPortal} from 'react-dom';
import React from 'react';

const Modal = ({ isOpened, children, onClose }) => {
  if (!isOpened) {
    return null;
  }

  return createPortal ( 
    <div>
      <div className={ModalCSS.overlay}></div>
      <div className={ModalCSS.modal}>
        <span className={ModalCSS.close} onClick={onClose}>X</span>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;