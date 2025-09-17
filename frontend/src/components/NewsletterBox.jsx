import React from "react";
import Title from "./Title";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
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
            <Title text1={"SUBSCRIBE"} text2={"NOW"} />
          </div>

          {/* Enhanced Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
              Subscribe now & get 20% off
            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Join our newsletter and be the first to know about exclusive
              deals, new arrivals, and special offers.
            </p>
          </div>

          {/* Decorative bottom accent */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="relative z-10">
          <form onSubmit={onSubmitHandler} className="w-full max-w-2xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 via-gray-900/40 to-black/30 border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-gray-600/70 group">
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>

              {/* Form content */}
              <div className="relative z-10 flex items-center">
                <input
                  className="flex-1 outline-none bg-transparent text-white placeholder-gray-400 px-6 py-4 text-base focus:placeholder-gray-300 transition-colors duration-300"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
                <button
                  type="submit"
                  className="group relative px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-semibold rounded-r-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 m-1 mr-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative z-10 text-sm font-bold tracking-wider">
                    SUBSCRIBE
                  </span>
                  <div className="absolute inset-0 rounded-r-2xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                </button>
              </div>
            </div>
          </form>

          {/* Additional info */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              * No spam, unsubscribe anytime. By subscribing, you agree to our
              Terms & Privacy Policy.
            </p>
          </div>
        </div>

        {/* Subtle animated border glow - matching hero */}
        <div className="absolute inset-0 rounded-3xl opacity-50 pointer-events-none">
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 animate-pulse"
            style={{ animationDuration: "3s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterBox;
