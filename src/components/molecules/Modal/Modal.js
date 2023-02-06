import { AnimatePresence, motion } from 'framer-motion';
// import (isToggled) from './MovieItem.js';
import React from 'react';
import { ModalStyled } from '../ItemsGrid/ItemsGrid.styled';
const Modal = ({ id }) => {
  return (
    <AnimatePresence>
      {/* {isToggled && ( */}
      <>
        <ModalStyled>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, delay: 0.15 }}
            style={{ pointerEvents: 'auto' }}
            className="overlay"
          >
            {id}
            <motion.div initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 30 }}>
              <button>X</button>
            </motion.div>
          </motion.div>
        </ModalStyled>
      </>
      {/* )} */}
    </AnimatePresence>
  );
};
export default Modal;
