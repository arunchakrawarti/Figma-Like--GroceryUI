"use client";
import React from "react";

export default function Photo() {
  return (
    <div className="relative w-full overflow-hidden min-h-[65vh] pt-32 md:pt-36">
      {/* Background Images */}
      <img
        src="/img/Rectangle.png"
        alt="Hero image"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <img
        src="/img/Rectangle.png"
        alt="Hero image"
        className="absolute inset-0 w-full h-1/2 object-cover block md:hidden top-1/2"
      />
      <img
        src="/img/Vector1.png"
        alt="Decorative star"
        className="absolute top-[10%] right-[10%] md:top-[15%] md:right-[5%] w-10 h-10 md:w-25 md:h-25 z-20"
      />
      <img
        src="/img/Vector.png"
        alt="Decorative star"
        className="absolute bottom-[20%] left-[20%] md:bottom-[46%] md:left-[51%] w-8 h-8 md:w-16 md:h-16 z-20"
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row p-4 md:p-12 lg:p-24">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Main Heading */}
          <h1 className="font-integral font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight md:leading-[69px] tracking-tight md:tracking-[-2px] text-black">
            FIND CLOTHES <br className="hidden md:block" /> THAT MATCHES <br className="hidden md:block" /> YOUR STYLE
          </h1>

          {/* Description */}
          <p className="font-satoshi font-normal mt-4 text-gray-500 max-w-sm md:max-w-xl mx-auto md:mx-0">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>

          {/* Shop Now Button */}
          <button className="mt-8 md:mt-12 w-[220px] h-[52px] bg-black text-white rounded-full transition-colors duration-300 hover:bg-gray-800">
            Shop Now
          </button>

          {/* Stats */}
          <div className="mt-12 w-full flex flex-col sm:flex-row items-center justify-center md:justify-start gap-y-8 sm:gap-x-10">
            <div className="flex-1 text-center sm:text-left">
              <span className="font-satoshi font-bold text-3xl sm:text-4xl lg:text-[40px] text-black">200+</span>
              <p className="font-satoshi text-sm md:text-base text-gray-500">International Brands</p>
            </div>

            <div className="hidden sm:block w-px h-16 bg-gray-300"></div>

            <div className="flex-1 text-center sm:text-left">
              <span className="font-satoshi font-bold text-3xl sm:text-4xl lg:text-[40px] text-black">2,000+</span>
              <p className="font-satoshi text-sm md:text-base text-gray-500">High-Quality Products</p>
            </div>

            <div className="hidden sm:block w-px h-16 bg-gray-300"></div>

            <div className="flex-1 text-center sm:text-left">
              <span className="font-satoshi font-bold text-3xl sm:text-4xl lg:text-[40px] text-black">30,000+</span>
              <p className="font-satoshi text-sm md:text-base text-gray-500">Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}









