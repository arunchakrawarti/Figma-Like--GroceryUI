import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const Stay = () => {
  return (
    <footer className="bg-white mt-10 relative">
      {/* Top CTA Section */}
      <div className="relative z-20">
        <div className="bg-black text-white py-12 rounded-3xl px-6 lg:px-24 max-w-7xl mx-auto 
                        -mb-20 relative z-30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center lg:text-left">
              STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
            </h2>
            <div className="flex flex-col lg:flex-col items-center w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder=" ✉️   Enter your email address"
                className="px-4 py-4 rounded-3xl text-md bg-white text-gray-800 w-full lg:w-96"
              />
              <button className="bg-white text-black py-4 px-6 rounded-3xl font-semibold w-full lg:w-96">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-gray-100 pt-30 pb-20 px-6 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4">SHOP.CO</h3>
            <p className="text-gray-600 mb-4">
              We have clothes that suit your style and which you're proud to wear. From
              women to men.
            </p>
            <div className="flex space-x-4">
              <Link href="#"><FaTwitter size={24} className="text-gray-600 hover:text-black" /></Link>
              <Link href="#"><FaFacebookF size={24} className="text-gray-600 hover:text-black" /></Link>
              <Link href="#"><FaInstagram size={24} className="text-gray-600 hover:text-black" /></Link>
              <Link href="#"><FaGithub size={24} className="text-gray-600 hover:text-black" /></Link>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg text-gray-800 mb-4">COMPANY</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Works</Link></li>
              <li><Link href="#">Career</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg text-gray-800 mb-4">HELP</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#">Customer Support</Link></li>
              <li><Link href="#">Delivery Details</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg text-gray-800 mb-4">FAQ</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#">Account</Link></li>
              <li><Link href="#">Manage Deliveries</Link></li>
              <li><Link href="#">Orders</Link></li>
              <li><Link href="#">Payments</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="text-lg text-gray-800 mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#">Free Ebooks</Link></li>
              <li><Link href="#">Development Tutorial</Link></li>
              <li><Link href="#">How to - Blog</Link></li>
              <li><Link href="#">YouTube Playlist</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-300 mt-10 pt-6 max-w-7xl mx-auto">
          <p className="text-sm text-gray-500 mb-4 md:mb-0 text-center md:text-left">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div>
            <Image
              src="/img/pay.png"
              alt="pay.png"
              height={120}
              width={300}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Stay;
