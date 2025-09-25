// import React from 'react';

// const Allreviwer = ({ star, name, review }) => {
//   return (
//     <div className="border border-gray-300 px-6 pt-9 rounded-xl shadow-sm 
//                     h-[240px] w-full lg:w-[calc(50%-2.5px)] bg-white flex flex-col">
//       {/* Stars */}
//       <p className="flex gap-1 text-2xl">{star}</p>

//       {/* Name */}
//       <h1 className="font-bold mt-3 text-xl text-gray-900">{name}</h1>

//       {/* Review */}
//       <span className="text-gray-600 text-md mt-2 leading-relaxed block">
//         {review}
//       </span>
//     </div>
//   );
// };

// export default Allreviwer;



import React from 'react';

const Allreviwer = ({ star, name, review }) => {
  return (
    <div className="border border-gray-300 px-6 pt-9 rounded-xl shadow-sm 
                    h-[250px] w-full bg-white flex flex-col">
      {/* Stars */}
      <p className="flex gap-1 text-2xl">{star}</p>

      {/* Name */}
      <h1 className="font-bold mt-3 text-xl text-gray-900">{name}</h1>

      {/* Review */}
      <span className="text-gray-600 text-md mt-2 leading-relaxed block">
        {review}
      </span>
    </div>
  );
};

export default Allreviwer;
