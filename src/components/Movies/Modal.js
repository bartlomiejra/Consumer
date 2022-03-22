import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const Modal = ({ isToggled, children }) => {
  return (
    <AnimatePresence>
      {isToggled && (
        <>
          <button>Close</button>
          {children}
        </>
      )}
    </AnimatePresence>
  );
};
export default Modal;
