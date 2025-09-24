import Card from '@/commponents/Moolecules/Card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const Selling = () => {
  let arr = [
    {
      image:"/img/Top1.png",
      title:"Vertical Striped Shirt",
      star: (
            <>
              <RiStarFill className="text-yellow-500" />
              <RiStarFill className="text-yellow-500" />
              <RiStarFill className="text-yellow-500" />
              <RiStarFill className="text-yellow-500" />
              <RiStarHalfFill className="text-yellow-500" />
            </>
          ),
      rating:"1.5/8",
      amount:"230"
    },
    {
      image:"/img/Top2.png",
      title:"Courage Graphic T-shirt",
      star: (
            <>
              <RiStarFill className="text-yellow-500" />
              <RiStarFill className="text-yellow-500" />
              <RiStarLine className="text-yellow-500" />
              
            </>
          ),
      rating:"2.5/5",
      amount:"120"
    },
    {
      image:"/img/Top3.png",
      title:"Loose Fit Bermuda Shorts",
      star: (
            <>
              <RiStarFill className="text-yellow-500" />
              <RiStarFill className="text-yellow-500" />
              <RiStarFill className="text-yellow-500" />
              <RiStarLine className="text-yellow-500" />
            </>
          ),
      rating:"3.5/5",
      amount:"120"
    },
    {
      image:"/img/Top4.png",
      title:"Faded Skinny Jeans",
      star: (
            <>
              <RiStarFill className="text-yellow-500" />
              <RiStarFill className="text-yellow-500" />
              <RiStarFill className="text-yellow-500" />
              <RiStarHalfFill className="text-yellow-500" />
              <RiStarLine className="text-yellow-500" />
            </>
          ),
      rating:"4.5/3",
      amount:"130"
    }
  ]
  return (
    <div className=''>
      <h1 className='text-center text-black mt-20 font-extrabold text-[48px] leading-[100%] tracking-[0%]'>
        TOP SELLING
      </h1>
      
      {/* Responsive Grid */}
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
        
        {/* Card 1 */}
        {/* <div>
          <Link href="/productdetail">
          <Image src="/img/Top1.png" height={420} width={420} alt='Top1.png'/>
          </Link>
          <h3 className='mt-5 text-xl font-bold'>Vertical Striped Shirt</h3>
          <Image src="/img/Top11.png" className='mt-2' height={19} width={161} alt='Top11.png' />
          <Image src="/img/Frame7.png" className='mt-2' height={32} width={200} alt='Frame7.png' />
        </div> */}

        {/* Card 2 */}
        {/* <div>
          <Link href="/productdetail">
          <Image src="/img/Top2.png" height={420} width={420} alt='Top2.png'/>
          </Link>
          <h3 className='mt-5 text-xl font-bold'>Courage Graphic T-shirt</h3>
          <Image src="/img/Top22.png" className='mt-2' height={19} width={138} alt='Top22.png' />
          <Image src="/img/Top222.png" className='mt-2' height={32} width={54} alt='Top222.png' />
        </div> */}

        {/* Card 3 */}
        {/* <div>
          <Link href="/productdetail">
          <Image src="/img/Top3.png" height={420} width={420} alt='Top4.png'/>
          </Link>
          <h3 className='mt-5 text-xl font-bold'>Loose Fit Bermuda Shorts</h3>
          <Image src="/img/Top33.png" className='mt-2' height={19} width={114} alt='Top33.png' />
          <Image src="/img/Top333.png" className='mt-2' height={32} width={47} alt='Top333.png' />
        </div> */}

        {/* Card 4 */}
        {/* <div>
          <Link href="/productdetail">
          <Image src="/img/Top4.png" height={420} width={420} alt='Top4.png'/>
          </Link>
          <h3 className='mt-5 text-xl font-bold'>Faded Skinny Jeans</h3>
          <Image src="/img/Top44.png" className='mt-2' height={19} width={150} alt='Top44.png' />
          <Image src="/img/Top444.png" className='mt-2' height={32} width={55} alt='Top444.png' />
        </div> */}

      </div>

      {/* Button */}
      <button className='h-[52px] w-[218px] mt-10 px-18 py-3 text-gray-900 mx-auto flex rounded-4xl border-gray-200 border-2'>
        View All
      </button>

      <div className="h-px mt-18 bg-gray-300 w-[86%] m-auto"></div>
    </div>
  )
}

export default Selling

