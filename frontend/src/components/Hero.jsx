import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreCollection = () => {
    navigate("/collection");
  };

  const handleShopNow = () => {
    navigate("/collection");
  };

  return (
    <div className="relative flex flex-col sm:flex-row border border-gray-800/50 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-800/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative border gradient */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 p-[1px] pointer-events-none">
        <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-800/80" />
      </div>

      {/* Hero Left Side */}
      <div className="relative z-10 w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-20 px-8 sm:px-12">
        <div className="text-white max-w-md">
          {/* Bestsellers Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
            <p className="font-medium text-xs md:text-sm text-gray-300 tracking-[0.2em] uppercase">
              Our Bestsellers
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Latest
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent">
              Arrivals
            </span>
          </h1>

          {/* CTA Button */}
          <div className="mb-8">
            <button
              onClick={handleExploreCollection}
              className="group relative px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
            </button>
          </div>

          {/* Shop Now Link */}
          <div
            onClick={handleShopNow}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <p className="font-semibold text-sm md:text-base text-gray-200 group-hover:text-white transition-colors duration-300">
              SHOP NOW
            </p>
            <div className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-gray-400 to-transparent group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300 rounded-full"></div>
            <svg
              className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-all duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className="relative w-full sm:w-1/2 overflow-hidden">
        {/* Image container with glass effect */}
        <div className="relative h-full min-h-[400px] sm:min-h-full">
          <img
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            src={assets.hero_img}
            alt="Latest Fashion Collection"
          />

          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10" />
        </div>
      </div>

      {/* Subtle animated border glow */}
      <div className="absolute inset-0 rounded-3xl opacity-50">
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 animate-pulse"
          style={{ animationDuration: "3s" }}
        />
      </div>
    </div>
  );
};

export default Hero;
