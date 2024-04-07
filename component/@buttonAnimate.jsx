import { useEffect, useState } from "react";

const ButtonAnimate = () => {
    const [isAnimated, setIsAnimated] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsAnimated(true);
      }, 1000);
  
      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <div>
        <button onClick={() => setIsAnimated(false)}>Réinitialiser</button>
        <div
          className={`
            ${isAnimated ? 'animate-bounce' : ''}
            bg-blue-500 p-4 rounded-md text-white
          `}
        >
          click me
        </div>
      </div>
    );
  };
  export default ButtonAnimate;