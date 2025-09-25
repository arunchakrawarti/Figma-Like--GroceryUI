import React from 'react'

const CustomerCard = ({ star, name, review }) => {
  return (
    <div className="border border-gray-300 px-6 pt-9  rounded-xl shadow-sm h-[240px] w-[400px] max-w-[600px] mx-auto bg-white flex flex-col">
     
      <p className="flex gap-1 text-2xl">{star}</p>

      
      <h1 className="font-bold mt-3 text-xl text-gray-900">{name}</h1>

      
      <span className="text-gray-600 text-md mt-2 leading-relaxed block">
        {review}
      </span>
    </div>
  );
};

export default CustomerCard;



