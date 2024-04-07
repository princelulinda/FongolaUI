import { useState } from "react";
import { motion } from 'framer-motion';
const Modal = ({ children, title }) => {
    const [showModal, setShowModal] = useState(false);
  
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
  
    return (
      <>
        <button onClick={handleOpenModal}>Ouvrir le modal</button>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-4 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-bold mb-4">{title}</h2>
              {children}
  
              <button onClick={handleCloseModal} className="mt-4 p-2 border rounded-md text-white bg-red-500">
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </>
    );
  };
  export default Modal;