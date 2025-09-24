import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({img,title,star,rating,amount}) => {
  return (
    <div>
       <Link href="/productdetail">
      <Image
      src={img}
      height={420}
      width={420}
      alt='Frame1.png'
      />
      </Link>
      <h1 className='mt-5 font-bold text-xl'>{title}</h1>
      <div className="flex items-center gap-1">
        {star}
        <span className="text-lg text-gray-600 mt-2">{rating}</span>
      </div>
     
      <p className='text-3xl font-extrabold mt-1'>${amount}</p>
     
    </div>
  )
}

export default Card
