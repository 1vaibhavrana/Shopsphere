import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleViewAllCollections = () => {
    navigate("/collection");
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="relative my-16">
      {/* Background ambient effects - matching hero */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main container with curved border - matching hero style */}
      <div className="relative border border-gray-800/50 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-800/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm p-8 md:p-12">
        {/* Decorative border gradient - matching hero */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 p-[1px] pointer-events-none">
          <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-800/80" />
        </div>

        {/* Ambient background effects - matching hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none rounded-3xl" />

        {/* Header Section */}
        <div className="relative z-10 text-center py-8 mb-8">
          {/* Decorative top line */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-purple-400"></div>
            <div className="mx-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>

          {/* Enhanced Title */}
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <Title text1={"LATEST"} text2={"COLLECTIONS"} />
          </div>

          {/* Enhanced Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
              Discover our carefully curated selection of the newest arrivals,
              featuring premium quality and contemporary design.
            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Each piece is handpicked to bring you the perfect blend of style,
              comfort, and sophistication.
            </p>
          </div>

          {/* Decorative bottom accent */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Products Grid Container */}
        <div className="relative z-10">
          {/* Enhanced Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
            {latestProducts.map((item, index) => (
              <div
                key={index}
                className="group relative fadeInUp"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Product card wrapper with enhanced effects - matching hero styling */}
                <div
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 via-gray-900/40 to-black/30 border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-gray-600/70 hover:transform hover:scale-105 cursor-pointer"
                  onClick={() => handleProductClick(item._id)}
                >
                  {/* Hover glow effect - matching hero */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/15 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <ProductItem
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                </div>

                {/* Floating "New" badge for first few items */}
                {index < 3 && (
                  <div className="absolute -top-2 -right-2 z-20">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                      NEW
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Loading state placeholder (if no products) */}
          {latestProducts.length === 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="aspect-square bg-gray-800/30 rounded-2xl mb-4 border border-gray-700/30"></div>
                  <div className="h-4 bg-gray-800/30 rounded mb-2"></div>
                  <div className="h-3 bg-gray-800/30 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="relative z-10 text-center mt-16">
          <button
            onClick={handleViewAllCollections}
            className="group relative px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2 justify-center">
              View All Collections
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
            </span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
          </button>
        </div>

        {/* Subtle animated border glow - matching hero */}
        <div className="absolute inset-0 rounded-3xl opacity-50 pointer-events-none">
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 animate-pulse"
            style={{ animationDuration: "3s" }}
          />
        </div>
      </div>

      {/* CSS Animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }
        `,
        }}
      />
    </div>
  );
};

export default LatestCollection;
