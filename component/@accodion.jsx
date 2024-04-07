import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  
    const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
      <div className="accordion">
        {items.map((item, index) => (
          <div key={item.title} className="accordion-item border-b-2 hover:transition duration-300 ease-in-out">
            <button
              className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-[100%]`}
              onClick={() => handleClick(index)}
            >
              <span> {item.title}</span>
              {activeIndex === index ? <FaAngleUp className="h-4 w-4 text-blue-500 transition duration-300 ease-in-out transform rotate-180" /> : <FaAngleDown className="h-4 w-4 text-blue-500 transition duration-300 ease-in-out" />}
            </button>
            {activeIndex === index && (
              <div
                className={`accordion-content px-4 py-2 transition duration-300 ease-in-out max-h-0 overflow-hidden ${activeIndex === index ? 'max-h-full transition duration-300 ease-in-out' : ''}`}
              >
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default Accordion;
  