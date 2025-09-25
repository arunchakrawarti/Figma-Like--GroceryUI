"use client";
import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full  bg-white font-sans  py-6 shadow">
      <div className="max-w-[1320px] mx-auto flex  items-center justify-between px-4 md:px-0">
        
        {/* Left Logo */}
        <div className="text-4xl md:text-4xl font-extrabold">SHOP.CO</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 ml-12 text-sm font-medium text-gray-700">
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-[17px]">Shop</span>
            <svg
              className="w-4 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <span className="cursor-pointer text-[17px]">On Sale</span>
          <span className="cursor-pointer text-[17px]">New Arrivals</span>
          <span className="cursor-pointer text-[17px]">Brands</span>
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center -ml-2 gap-3 w-[630px] bg-gray-100 rounded-[62px] px-6 py-2">
            <Search className="w-6 h-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none text-md py-1 w-full  text-gray-500 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <Image
          src="/img/Userimg.png"
          height={25}
          className="text-black"
          width={25}
          alt="Userimg.png"
          />
          
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-4 mt-3 space-y-3 text-gray-700">
          <span className="cursor-pointer text-[17px]">Shop</span>
          <span className="cursor-pointer text-[17px]">On Sale</span>
          <span className="cursor-pointer text-[17px]">New Arrivals</span>
          <span className="cursor-pointer text-[17px]">Brands</span>
        </div>
      )}
    </nav>
  );
}




