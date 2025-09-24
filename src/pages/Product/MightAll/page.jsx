import Card from '@/commponents/Moolecules/Card'
import Image from 'next/image'
import React from 'react'
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const MightAll = () => {
  const arr = [
   {
       image: "/img/You1.png",
       title: "Polo with Contrast Trims",
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
       amount: 1220,
     },
     {
         image: "/img/You2.png",
         title: "Gradient Graphic T-shirt",
         star: (
           <>
             <RiStarFill className="text-yellow-500" />
             <RiStarFill className="text-yellow-500" />
             <RiStarFill className="text-yellow-500" />
             <RiStarFill className="text-yellow-500" />
             <RiStarHalfFill className="text-yellow-500" />
           </>
         ),
         rating: "3.5/5",
         amount: 1045,
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
           rating: "4.5/5",
           amount: 145,
         },
         {
             image: "/img/You4.png",
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
             rating: "7.5/5",
             amount: 450,
           },
  ]
  return (
    <div className=''>
      <h1 className='text-center text-black mt-20 font-extrabold text-[48px] leading-[100%] tracking-[0%]'>
        YOU MIGHT ALSO LIKE
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

      <div className="h-px mt-18 bg-gray-300 w-full"></div>
    </div>
  )
}

export default MightAll

