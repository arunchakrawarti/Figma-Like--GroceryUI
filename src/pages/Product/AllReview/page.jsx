"use client";
import CustomerCard from "@/commponents/Moolecules/CustomerCard";
import React, { useState } from "react";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

 const customers = [
   {
     star: (
       <>
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarLine className="text-yellow-500" />
         <RiStarHalfFill className="text-yellow-500" />
       </>
     ),
     name: "Satah M.",
     review:
       "I'm blown away by the quality and style style used to be a of the clothes I received from Shop.co...",
   },
   {
     star: (
       <>
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarHalfFill className="text-yellow-500" />
       </>
     ),
     name: "Alex K.",
     review:
       "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co...",
   },
   {
     star: (
       <>
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarHalfFill className="text-yellow-500" />
       </>
     ),
     name: "Mohan k.",
     review:
       "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co...",
   },
   {
     star: (
       <>
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarHalfFill className="text-yellow-500" />
       </>
     ),
     name: "Umesh l.",
     review:
       "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co...",
   },
   {
     star: (
       <>
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarHalfFill className="text-yellow-500" />
       </>
     ),
     name: "David W.",
     review:
       "Fantastic experience with Shop.co. The delivery was fast, and the clothes were exactly as described...",
   },
   {
     star: (
       <>
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarFill className="text-yellow-500" />
         <RiStarHalfFill className="text-yellow-500" />
       </>
     ),
     name: "David W.",
     review:
       "Fantastic experience with Shop.co. The delivery was fast, and the clothes were exactly as described...",
},];

const Allreview = () => {
  const [activeTab, setActiveTab] = useState("Rating & Reviews");
  const tabs = ["Product Details", "Rating & Reviews", "FAQs"];

  return (
    <section className="bg-white py-12 px-6 lg:px-20">
      {/* Tabs */}
      <div className="flex justify-between border-b border-gray-200">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 text-center py-3 cursor-pointer border-b-4 ${
              activeTab === tab ? "border-black font-semibold" : "border-gray-200 text-gray-500"
            } transition-all`}
          >
            {tab}
          </div>
        ))}
      </div>

     
      {activeTab === "Rating & Reviews" && (
        <>
          <div className="flex justify-between items-center mt-6 mb-6 flex-wrap">
            <div className="font-semibold">ALL Reviews (451)</div>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <div className="cursor-pointer text-gray-500 hover:text-black px-2 py-2">#</div>
              <div className="cursor-pointer text-gray-500 hover:text-black px-2 py-2">Latest</div>
              <div className="cursor-pointer text-gray-500 hover:text-white  bg-black rounded-3xl px-2 py-2">Write a Review</div>
            </div>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6 justify-center px-5">
  {customers.map((item, i) => (
    <CustomerCard
      key={i}
      star={item.star}
      name={item.name}
      review={item.review}
    />
  ))}
</div>




        </>
      )}

     
      {activeTab === "Product Details" && (
        <div className="mt-6 text-gray-600">
          <p>Here you can put your product description and details...</p>
        </div>
      )}

      {activeTab === "FAQs" && (
        <div className="mt-6 text-gray-600">
          <p>Here you can put frequently asked questions...</p>
        </div>
      )}
      <div className="text-center">
        <button className=" text-2xl bg-gray-200 px-3 text-gray-500 py-2 rounded-3xl mt-20">Load More Reviews</button>
      </div>
    </section>
  );
};

export default Allreview;

