"use client";
import ProductImage from '@/commponents/Moolecules/ProductImage';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Home = () => {

  let arr = [
    {
      image:"/img/image1.png"
    },
    {
      image:"/img/image2.png"
    },
    {
      image:"/img/image3.png"
    }
  ]

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Large"); 
  const [selectedColor, setSelectedColor] = useState("#5A4A2B"); 
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const sizes = ["Small", "Medium", "Large", "X-Large"];
  const colors = ["#5A4A2B", "#1F3D3A", "#26264F"];

  return (
    <div className="px-4  md:px-10 lg:px-20">
     
      <div className="flex flex-wrap gap-3 md:gap-5 mt-5 text-gray-600 text-sm md:text-base">
        <p>Home</p>
        <p>Shop</p>
        <p>Men</p>
        <p>T-shirt</p>
      </div>

      
      <div className="flex flex-col lg:flex-row gap-8 mt-5">
        
        <div className="flex gap-3 md:flex-col md:gap-5 flex-wrap justify-center lg:justify-start">
         
         {
          arr.map((item,i)=>{
            return <ProductImage
            key={i}
            img={item?.image}
            />
          })
         }
  </div>

        
        <div className="flex justify-center lg:justify-start">
          <Image src="/img/Productimg.png" height={530} width={444} alt="Productimg.png" />
        </div>

       
        <div className="flex-1 mt-2">
          <h1 className="text-3xl font-extrabold">ONE LIFE GRAPHIC T-SHIRT</h1>

          <Image src="/img/Top11.png" height={120} width={250} className="mt-5" alt="Top11.png" />

          <p className="text-2xl font-bold mt-6">
            $260{' '}
            <span className="text-gray-300">
              $300{' '}
              <span className="text-red-600 bg-red-200 rounded-full px-2 ml-1">-40%</span>
            </span>
          </p>

          <p className="text-gray-400 mt-8">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color selection */}
          <p className="text-2xl font-bold mt-5">Select Color</p>
          <div className="flex gap-3 mt-5 flex-wrap">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color ? "border-black" : "border-gray-300"
                } flex items-center justify-center`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              >
                {selectedColor === color && <span className="text-white font-bold">✓</span>}
              </button>
            ))}
          </div>

          {/* Size selection */}
          <h2 className="text-2xl font-bold mt-8">Choose Size</h2>
          <div className="flex flex-wrap gap-3 md:gap-10 mt-6">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-3 py-2 rounded-3xl font-bold ${
                  selectedSize === size ? "bg-black text-white" : "bg-gray-200 text-black"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10 items-start sm:items-center">
            <div className="flex bg-gray-300 px-5 w-[150px] py-2 rounded-md gap-5 items-center">
              <button onClick={handleDecrease} className="bg-gray-200 px-3 py-1 rounded text-lg font-bold">
                -
              </button>
              <span className="text-lg font-bold">{quantity}</span>
              <button onClick={handleIncrease} className="bg-gray-200 px-3 py-1 rounded text-lg font-bold">
                +
              </button>
            </div>
            <Link href="/YourCart">
            <button className="bg-black w-full sm:w-[400px] py-4 rounded-2xl text-white">
              Add to cart
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



