import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="relative z-10">
      {/* Main footer content */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
        {/* Brand section */}
        <div>
          <h2 className="mb-5 text-3xl font-bold text-white">ShopSphere</h2>
          <p className="w-full md:w-2/3 text-gray-300 leading-relaxed">
            Discover the latest fashion trends and timeless styles at
            ShopSphere. We curate premium collections from emerging designers
            and established brands, bringing you the best in contemporary
            fashion with exceptional quality and unmatched style.
          </p>
        </div>

        {/* Company links */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-100 tracking-wide">
            COMPANY
          </p>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
              About us
            </li>
            <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
              Collections
            </li>
            <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
              Privacy policy
            </li>
          </ul>
        </div>

        {/* Contact section */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-100 tracking-wide">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li className="hover:text-blue-400 transition-colors duration-300">
              +1-212-456-7890
            </li>
            <li className="hover:text-blue-400 transition-colors duration-300">
              contact@shopsphere.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar with gradient separator */}
      <div className="mt-12">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>
        <p className="py-5 text-sm text-center text-gray-400">
          Copyright 2024 © ShopSphere.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
