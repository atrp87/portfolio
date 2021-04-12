import { motion, AnimatePresence } from 'framer-motion';
import ModalCSS from './Modal.module.css';
import React from 'react';

  const backdropVariants = {
    initial: {opacity: 1},
    final: {opacity: 0}
  }

  const modalVariant = {
    initial: {
      y: '300px',
      opacity: 0
    },
    final: {
      opacity: 1,
    }
  }

const Modal = ({ showModal, setShowModal }) => {
  return ( 
    <div className={ModalCSS.modal}>
        <AnimatePresence exitBeforeEnter>
        { showModal && (
          <motion.div className={ModalCSS.backdrop}
            variants={backdropVariants}
            animate='initial'
            initial="final"
            exit='final'
          >
            <motion.div className={ModalCSS.modal}
              variants={modalVariant}
              initial='initial'
              animate='final'
            >
              <p>hello</p>
                <button>Live</button>
                <button>Code</button>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
    </div>
  );
}

export default Modal;

// div className={ModalCSS.content}>
//         <div className={ModalCSS.modalLeft}>
//           <img src="" alt=""/>
//         </div>
//         <div className={ModalCSS.modalRight}>
//           <div className={ModalCSS.modalHeader}>
//             <p>TITLE</p>
//           </div>
//           <div className={ModalCSS.modalBody}>
//             <ul>
//               <li>1</li>
//               <li>2</li>
//               <li>3</li>
//             </ul>
//           </div>
//           <div className={ModalCSS.modalFooter}>
//             <button>Live</button>
//             <button>Code</button>
//             <button onClick={props.onClose}>Close</button>
//           </div>
//         </div>
//       </div>