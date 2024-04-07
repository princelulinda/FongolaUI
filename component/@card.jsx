import { useState } from "react";

const Card = ({ titre, contenu, image }) => {
  
    return (
      <div
        className="bg-white p-4 rounded-lg lg:w-[30%] shadow-md 
          xs:w-full w-1/2"
      >
        <div className="flex flex-col items-center ">
          { <img src={image} alt="" className="w-[100%] h-60 mb-4" />}
          <p className="text-gray-700 leading-relaxed">{contenu}</p>
        </div>
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              read more
            </button>
          </div>
      
  
      </div>
    );
  };

  export default Card;
  
  
  