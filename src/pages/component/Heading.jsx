import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/commponents/Moolecules/Card'
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";


const Heading = () => {

let arr = [
  {
    image: "/img/Frame1.png",
    title: "T-shirt with Tape Details",
    star: (
      <>
        <RiStarFill className="text-yellow-500" />
        <RiStarFill className="text-yellow-500" />
        <RiStarFill className="text-yellow-500" />
        <RiStarFill className="text-yellow-500" />
        <RiStarHalfFill className="text-yellow-500" />
      </>
    ),
    rating: "4.5/5",
    amount: 145,
  },
  {
    image: "/img/Frame2.png",
    title: "Skinny Fit Jeans",
    star: (
      <>
        <RiStarFill className="text-yellow-500" />
        <RiStarFill className="text-yellow-500" />
        <RiStarFill className="text-yellow-500" />
        <RiStarHalfFill className="text-yellow-500" />
        <RiStarLine className="text-yellow-500" />
      </>
    ),
    rating: "3.5/5",
    amount: 120,
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
    rating: "4.5/5",
    amount: 160,
  },
  {
    image: "/img/Frame4.png",
    title: "Sleeve Striped T-shirt",
    star: (
      <>
        <RiStarFill className="text-yellow-500" />
        <RiStarFill className="text-yellow-500" />
        <RiStarHalfFill className="text-yellow-500" />
        <RiStarLine className="text-yellow-500" />
        <RiStarLine className="text-yellow-500" />
      </>
    ),
    rating: "2.5/5",
    amount: 80,
  },
];

  return (
    <div className=''>
      <h1 className='text-center text-black mt-20 font-extrabold text-[48px] leading-[100%] tracking-[0%]'>
        NEW ARRIVALS
      </h1>

     
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-15 mx-27'>

        {
          arr.map((item,i)=>{
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

      {/* Button */}
      <button className='h-[52px] w-[218px] mt-10 px-18 py-3 text-gray-900 mx-auto flex rounded-4xl border-gray-200 border-2'>
        View All
      </button>

      <div className="h-px  mt-18 bg-gray-300 w-[86%] m-auto"></div>
    </div>
  )
}

export default Heading








