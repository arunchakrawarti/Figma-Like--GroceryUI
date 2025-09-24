"use client";
import CustomerCard from "@/commponents/Moolecules/CustomerCard";
import React, { useRef } from "react";
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
];

const Our = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth + 16; // card + gap
      scrollRef.current.scrollBy({
        left: dir === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-12 px-6 lg:px-20 relative">
      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-extrabold text-black">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex space-x-4">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            ◀
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            ▶
          </button>
        </div>
      </div>

     
      <div
        ref={scrollRef}
        className="flex flex-row gap-2 overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {customers.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[90%] sm:w-[300px] md:w-[300px]"
          >
            <CustomerCard
              star={item.star}
              name={item.name}
              review={item.review}
            />
          </div>
        ))}
      </div>

     
      <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Our;


