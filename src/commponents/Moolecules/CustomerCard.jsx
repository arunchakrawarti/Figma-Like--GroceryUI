import React from 'react'
const CustomerCard = ({ star, name, review }) => {
  return (
    <div className="border border-gray-300 p-5 rounded-lg shadow-sm w-full max-w-[600px] mx-auto">
      <p className="flex gap-1">{star}</p>
      <h1 className="font-bold mt-2 text-lg">{name}</h1>
      <span className="text-gray-600 text-sm">{review}</span>
    </div>
  );
};



export default CustomerCard
