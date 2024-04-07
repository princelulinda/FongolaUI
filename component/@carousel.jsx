import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <div className="carousel-inner overflow-x-hidden w-full justify-center items-center">
        {items.map((item, index) => (
          <div
            key={item.id || index}
            className={
              `carousel-item transition ease-linear duration-700 absolute w-full h-[20vh]  bg-slate-400 ${index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 z-0 translate-x-[-100%]'}`
            }
          >
           <img src={item.imageUrl}  />
           <p className='mt-[-10%] w-full text-center'> {item.content} </p>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={handlePrev}
        className="carousel-control-prev absolute top-[15vh] left-0 z-10 p-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 hover:bg-gray-200 hover:opacity-75"
      >
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 8L8.5 12.5L15 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="carousel-control-next absolute top-[15vh] right-0 z-10 p-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 hover:bg-gray-200 hover:opacity-75"
      >
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 8L15.5 12.5L9 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
