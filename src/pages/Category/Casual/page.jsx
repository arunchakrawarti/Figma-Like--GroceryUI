'use client';
import Card from '@/commponents/Moolecules/Card';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const Casual = () => {
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [selectedColor, setSelectedColor] = useState('black');
  
 const products =[
   {
      image: "/img/You2.png",
      title: "Gradient Graphic T-shirt",
      star: (
        <>
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarLine className="text-yellow-500" />
          <RiStarHalfFill className="text-yellow-500" />
        </>
      ),
      rating: "6.5/5",
      amount: 220,
    },
     {
      image: "/img/You3.png",
      title: "Polo with Tipping Details",
      star: (
        <>
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarHalfFill className="text-yellow-500" />
        </>
      ),
      rating: "2.5/5",
      amount: 999,
    },
    {
      image: "/img/Frame1.png",
      title: "Black Striped T-shirt",
      star: (
        <>
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarHalfFill className="text-yellow-500" />
        </>
      ),
      rating: "1.5/5",
      amount: 1220,
    },
    {
      image: "/img/Frame2.png",
      title: "Skinny Fit Jeans",
      star: (
        <>
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarHalfFill className="text-yellow-500" />
        </>
      ),
      rating: "6.5/5",
      amount: 1045,
    },
    {
      image: "/img/Frame3.png",
      title: "Checkered Shirt",
      star: (
        <>
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarHalfFill className="text-yellow-500" />
        </>
      ),
      rating: "9.5/5",
      amount: 1120,
    },
    {
      image: "/img/Top2.png",
      title: "Sleve Striped T-shirt",
      star: (
        <>
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarHalfFill className="text-yellow-500" />
        </>
      ),
      rating: "1.5/5",
      amount: 380,
    },
    {
      image: "/img/Top3.png",
      title: "Loose Fit Bermuda Shorts",
      star: (
        <>
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarHalfFill className="text-yellow-500" />
        </>
      ),
      rating: "2.5/5",
      amount: 450,
    },
    {
      image: "/img/You4.png",
      title: "Gradient Graphic T-shirt",
      star: (
        <>
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarLine className="text-yellow-500" />
          <RiStarHalfFill className="text-yellow-500" />
        </>
      ),
      rating: "3.5/5",
      amount: 120,
    },
    {
      image: "/img/Frame4.png",
      title: "Gradient Graphic T-shirt",
      star: (
        <>
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarFill className="text-yellow-500" />
          <RiStarLine className="text-yellow-500" />
          <RiStarHalfFill className="text-yellow-500" />
        </>
      ),
      rating: "4.5/5",
      amount: 110,
    },
]
  //   {
  //     name: 'Gradient Graphic T-shirt',
  //     price: '$145',
  //     originalPrice: '$160',
  //     rating: 4.5,
  //     reviews: 120,
  //     image: '/img/You2.png',
  //     alt: 'Gradient Graphic T-shirt',
  //   },
  //   {
  //     name: 'Polo with Tipping Details',
  //     price: '$180',
  //     rating: 4.5,
  //     reviews: 120,
  //     image: '/img/You3.png',
  //     alt: 'Polo with Tipping Details',
  //   },
  //   {
  //     name: 'Black Striped T-shirt',
  //     price: '$120',
  //     originalPrice: '$150',
  //     rating: 4.5,
  //     reviews: 120,
  //     image: '/img/Frame1.png',
  //     alt: 'Black Striped T-shirt',
  //   },
  //   {
  //     name: 'Skinny Fit Jeans',
  //     price: '$240',
  //     originalPrice: '$260',
  //     rating: 4.5,
  //     reviews: 120,
  //     image: '/img/Frame2.png',
  //     alt: 'Skinny Fit Jeans',
  //   },
  //   {
  //     name: 'Checkered Shirt',
  //     price: '$180',
  //     rating: 4.5,
  //     reviews: 120,
  //     image: '/img/Frame3.png',
  //     alt: 'Checkered Shirt',
  //   },
  //   {
  //     name: 'Sleve Striped T-shirt',
  //     price: '$130',
  //     originalPrice: '$160',
  //     rating: 4.5,
  //     reviews: 120,
  //     image: '/img/Top2.png',
  //     alt: 'Sleve Striped T-shirt',
  //   },
  //   {
  //     name: 'Vertical Striped Shirt',
  //     price: '$210',
  //     originalPrice: '$230',
  //     rating: 4.5,
  //     reviews: 120,
  //     image: '/img/Top1.png',
  //     alt: 'Vertical Striped Shirt',
  //   },
  //   {
  //     name: 'Courage Graphic T-shirt',
  //     price: '$145',
  //     rating: 4.5,
  //     reviews: 120,
  //     image: '/img/Top2.png',
  //     alt: 'Courage Graphic T-shirt',
  //   },
  //   {
  //     name: 'Loose Fit Bermuda Shorts',
  //     price: '$80',
  //     rating: 4.5,
  //     reviews: 120,
  //     image: '/img/Top3.png',
  //     alt: 'Loose Fit Bermuda Shorts',
  //   },
  // ];

  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
  const colors = [
    { name: 'red', hex: 'bg-red-500' },
    { name: 'blue', hex: 'bg-blue-500' },
    { name: 'yellow', hex: 'bg-yellow-500' },
    { name: 'green', hex: 'bg-green-500' },
    { name: 'purple', hex: 'bg-purple-500' },
    { name: 'white', hex: 'bg-white' },
    { name: 'black', hex: 'bg-black' },
    { name: 'gray', hex: 'bg-gray-500' },
    { name: 'pink', hex: 'bg-pink-500' },
    { name: 'darkblue', hex: 'bg-blue-900' },
  ];

  return (
    <div className="container mx-auto  p-4 md:p-8">
      <div className="flex text-sm pt-25 text-gray-500 mb-6">
        <p>Home</p>
        <p className="mx-2">/</p>
        <p>Casual</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Filters</h2>
            <button className="text-gray-500 text-2xl font-bold">#</button>
          </div>

          <div className="space-y-6">
            {/* Category Filter */}
            <div className="border-b border-gray-300 pb-10">
              <h3 className="font-bold text-xl mb-3">Category</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#" className="hover:underline">T-shirts</a></li>
                <li><a href="#" className="hover:underline">Shorts</a></li>
                <li><a href="#" className="hover:underline">Shirts</a></li>
                <li><a href="#" className="hover:underline">Hoodie</a></li>
                <li><a href="#" className="hover:underline">Jeans</a></li>
              </ul>
            </div>

            {/* Price Filter */}
            <div className="border-b border-gray-300 pb-10">
              <h3 className="font-bold text-xl mb-5">Price</h3>
              <input type="range" className="w-full" min="50" max="200" />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>$50</span>
                <span>$200</span>
              </div>
            </div>

            {/* Color Filter */}
            <div className="border-b border-gray-300 pb-10">
              <h3 className="font-bold text-xl mb-3">Colors</h3>
              <div className="grid grid-cols-5 gap-5">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-6 h-6 rounded-full border-2 relative flex items-center justify-center transition-all ${
                      selectedColor === color.name ? 'border-black' : 'border-transparent'
                    } ${color.name === 'white' ? 'border-gray-300' : ''} ${color.hex}`}
                    onClick={() => setSelectedColor(color.name)}
                  >
                    {selectedColor === color.name && (
                      <span className={`absolute text-xs ${color.name === 'white' || color.name === 'yellow' ? 'text-black' : 'text-white'}`}>
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="border-b border-gray-300 pb-10">
              <h3 className="font-bold text-xl mb-5">Sizes</h3>
              <div className="grid grid-cols-2 gap-5 text-sm">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={` border border-gray-200 px-4 py-2 rounded-full  transition-colors ${
                      selectedSize === size ? 'bg-black text-white' : 'bg-transparent text-black'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Dress Style Filter */}
            <div>
              <h3 className="font-bold text-xl mb-5">Dress Style</h3>
              <ul className="space-y-2 text-gray-700">
                <li><a href="#" className="hover:underline">Casual</a></li>
                <li><a href="#" className="hover:underline">Formal</a></li>
                <li><a href="#" className="hover:underline">Party</a></li>
                <li><a href="#" className="hover:underline">Gym</a></li>
              </ul>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-full mt-4 hover:bg-gray-800 transition-colors">
              Apply Filter
            </button>
          </div>
        </aside>

        {/* Products Grid Section */}
        <main className="w-full md:w-3/4 lg:w-4/5">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold">Casual</h1>
            <p className="text-sm text-gray-500 hidden md:block">Showing 1-9 of 100 Products</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           
           {
          products.map((item,i)=>{
           return <Card 
            key={i}
            img={item?.image}
            title={item?.title}
            star={item?.star}
            rating={item?.rating}
            amount={item?.amount}
            />
          })
        }
          </div>
        </main>
      </div>
    </div>
  );
};

export default Casual;

