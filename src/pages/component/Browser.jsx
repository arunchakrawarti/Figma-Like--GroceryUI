"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Browser = () => {
  return (
    <div className='h-auto mt-30 p-5 md:p-10 rounded-[4rem] mx-5 md:mx-28 bg-[#F0F0F0]'>
      <h1 className='font-extrabold text-center text-3xl md:text-5xl pt-10 md:pt-15'>
        BROWSE BY DRESS STYLE
      </h1>

      {/* Top row of images */}
      <div className='flex flex-col md:flex-row mt-10 md:mt-15 gap-5 justify-center'>
        {/* Browser1 image container */}
        <div className="inline-block shadow-lg rounded-3xl">
          <Link href="/Categorypage">
          <Image
            src="/img/Browser1.png"
            alt="Casual Dress Style"
            width={407}
            height={289}
          />
          </Link>
        </div>

        {/* Browser2 image container */}
        <div className="inline-block shadow-lg rounded-3xl">
          <Link href="/Categorypage">
          <Image
            src="/img/Browser2.png"
            alt="Formal Dress Style"
            width={684}
            height={289}
          />
          </Link>
          
        </div>
      </div>

      {/* Bottom row of images */}
      <div className='flex flex-col md:flex-row mt-5 gap-5 justify-center'>
        {/* Browser3 image container */}
        <div className="inline-block shadow-lg rounded-3xl">
          <Link href="/Categorypage">
          <Image
            src="/img/Browser3.png"
            alt="Party Dress Style"
            width={684}
            height={289}
          />
          </Link>
          
        </div>

        {/* Browser4 image container */}
        <div className="inline-block shadow-lg rounded-3xl">
          <Link href="/Categorypage">
          <Image
            src="/img/Browser4.png"
            alt="Gym Dress Style"
            width={407}
            height={289}
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Browser;




