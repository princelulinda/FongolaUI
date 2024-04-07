import { motion } from "framer-motion";
import { useState } from "react";

const Toast = ({ message, type }) => {
    const [visible, setVisible] = useState(true);
  
    const variants = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: -100 },
    };
  
    const handleClose = () => {
      setVisible(false);
    };
    setInterval(() => {
       handleClose() 
    }, 1000);
  
    const toastClasses = `bg-${type === 'success' ? 'green' : 'red'}-500 text-white p-4 rounded-md shadow-md fixed bottom-0 right-0 m-4 z-50`;
  
    return (
      <motion.div
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className={toastClasses}
      >
        {message}
      </motion.div>
    );
  }
  
  export default Toast;