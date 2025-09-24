// "use client";
// import { useState } from "react";
// import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="w-full   bg-white  font-sans py-6">
//       <div className="max-w-[1320px] mx-auto flex items-center justify-between flex-wrap px-4 md:px-0">
        
//         <div className="text-4xl font-extrabold  w-[150px]">SHOP.CO</div>

        
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

        
//         <nav className={`md:flex items-center gap-6 ml-0 md:ml-12 text-sm font-medium text-gray-700 ${menuOpen ? "flex flex-col mt-3 w-full" : "hidden"}`}>
//           <div className="flex items-center gap-1 cursor-pointer">
//             <span className="text-[17px]">Shop</span>
//             <svg
//               className="w-4 h-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>
//           <span className="cursor-pointer text-[17px]">On Sale</span>
//           <span className="cursor-pointer text-[17px]">New Arrivals</span>
//           <span className="cursor-pointer text-[17px]">Brands</span>
//         </nav>

//         {/* Search Bar */}
//         <div className="flex-1 mt-3 md:mt-0 md:ml-15 flex justify-center md:justify-start">
//           <div className="flex items-center gap-2 w-[600px] bg-gray-100 rounded-[62px] px-4 py-3">
//             <Search className="w-7 h-6 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search for products..."
//               className="bg-transparent outline-none w-full text-lg text-gray-400 placeholder-gray-400"
//             />
//           </div>
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center gap-4 mt-3 md:mt-0">
//           <ShoppingCart className="w-6 h-6 cursor-pointer" />
//           <User className="w-6 h-6 cursor-pointer" />
//         </div>
//       </div>
//     </header>
//   );
// }



"use client";
import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white font-sans py-6 shadow">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between px-4 md:px-0">
        
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
        <div className="hidden md:flex flex-1 ml-10 justify-center">
          <div className="flex items-center gap-2 w-[600px] bg-gray-100 rounded-[62px] px-6 py-2">
            <Search className="w-6 h-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none text-lg py-1 w-full  text-gray-500 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <User className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Nav - Optional toggle (अगर future में चाहिए तो use कर सकते हो) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-4 mt-3 space-y-3 text-gray-700">
          <span className="cursor-pointer text-[17px]">Shop</span>
          <span className="cursor-pointer text-[17px]">On Sale</span>
          <span className="cursor-pointer text-[17px]">New Arrivals</span>
          <span className="cursor-pointer text-[17px]">Brands</span>
        </div>
      )}
    </header>
  );
}


