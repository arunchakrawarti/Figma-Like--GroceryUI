"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Your = () => {
  const initialCartItems = [
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      size: 'Large',
      color: 'White',
      price: 145,
      quantity: 1,
      image: '/img/Your1.png',
      alt: 'Gradient Graphic T-shirt',
    },
    {
      id: 2,
      name: 'Checkered Shirt',
      size: 'Medium',
      color: 'Red',
      price: 180,
      quantity: 1,
      image: '/img/Your2.png',
      alt: 'Checkered Shirt',
    },
    {
      id: 3,
      name: 'Skinny Fit Jeans',
      size: 'Large',
      color: 'Blue',
      price: 240,
      quantity: 1,
      image: '/img/Your3.png',
      alt: 'Skinny Fit Jeans',
    },
  ];

  const [cartItemsState, setCartItemsState] = useState(initialCartItems);

  const handleQuantityChange = (id, change) => {
    setCartItemsState((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setCartItemsState((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItemsState.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="container w-[85%]  mx-auto pt-10  p-4 md:p-8 font-sans">
      <div className="flex pt-25 text-sm text-gray-500 mb-6">
        <p className="hover:underline cursor-pointer">Home</p>
        <p className="mx-2">/</p>
        <p className="font-semibold text-black">Cart</p>
      </div>

      <h1 className="font-extrabold text-5xl mb-8">YOUR CART</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3 space-y-6">
          {cartItemsState.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 border-gray-300 rounded-lg shadow-sm bg-white"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1 ml-4 sm:ml-6">
                <div className="flex justify-between items-start">
                  <h2 className="font-semibold text-lg sm:text-xl">
                    {item.name}
                  </h2>
                  <button
                    className="text-red-400 transition-colors"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-900 text-sm mt-1">
                  Size: <span className="text-black font-medium">{item.size}</span>
                </p>
                <p className="text-gray-900 text-sm">
                  Color: <span className="text-black font-medium">{item.color}</span>
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-bold text-xl">${item.price}</p>
                  <div className="flex items-center space-x-2 border rounded-full px-2 py-1">
                    <button
                      className="text-gray-500 hover:text-black transition-colors"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="text-gray-500 hover:text-black transition-colors"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 p-6 bg-gray-50 rounded-lg shadow-md h-fit">
          <h2 className="font-bold text-2xl mb-5">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p className="font-medium">${subtotal}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount (-20%)</p>
              <p className="text-red-500 font-medium">-${discount.toFixed(0)}</p>
            </div>
            <div className="flex mt-5 justify-between">
              <p>Delivery Fee</p>
              <p className="font-medium">${deliveryFee}</p>
            </div>
            <div className="border-t pt-5 mt-3">
              <div className="flex justify-between items-center text-lg font-bold">
                <p>Total</p>
                <p>${total.toFixed(0)}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 gap-3 flex items-center">
            <input
              type="text"
              placeholder=" 🏷️ Add promo code"
              className="flex-1 p-3 border rounded-full bg-gray-200 focus:outline-none"
            />
            <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Apply
            </button>
          </div>
          <button className="w-full mt-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
            <span>Go to Checkout</span>
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Your;



