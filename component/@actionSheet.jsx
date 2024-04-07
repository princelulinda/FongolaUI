import { motion } from "framer-motion";
import { useState } from "react";
const ActionSheet = ({
    title,
    actions,
    onCancel,
    onClose,
    ...rest
  }) => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const handleAction = (action) => {
      action();
      handleClose();
    };
  
    const backdropClasses = `fixed inset-0 z-50 bg-black bg-opacity-75`;
    const sheetClasses = `fixed inset-x-0 bottom-0 w-full max-h-screen bg-white shadow-xl rounded-t-lg transition-transform duration-300 ease-in-out`;
  
    return (
      <>
        <button  onClick={handleOpen} >
          {title}
        </button>
        {open && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            className={backdropClasses}
            onClick={handleClose}
          >
            <motion.div
              className={sheetClasses}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                {title && (
                  <h2 className="text-xl font-bold mb-4">{title}</h2>
                )}
                <ul className="space-y-2">
                  {actions.map((action) => (
                    <li key={action.label}>
                      <button
                        className="w-full flex items-center justify-between p-2 text-lg font-medium rounded-md border border-gray-200 hover:bg-gray-100"
                        onClick={() => handleAction(action.action)}
                      >
                        {action.label}
                        {action.icon && (
                          <span className="ml-2 text-gray-400">{action.icon}</span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full flex items-center justify-center p-2 text-lg font-medium rounded-md border border-gray-200 hover:bg-gray-100"
                  onClick={handleClose}
                >
                  Annuler
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </>
    );
  
  };


  export default ActionSheet;