import ModalCSS from './Modal.module.css'
import {createPortal} from 'react-dom';
import React from 'react';

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal ( 
    <div>
      <div className={ModalCSS.overlay}></div>
      <div className={ModalCSS.modal}>
        <i className={ `${ModalCSS.close} fas fa-times`} onClick={onClose}></i>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;