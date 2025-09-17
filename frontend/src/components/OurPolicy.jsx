import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const OurPolicy = () => {
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
            <Title text1={"OUR"} text2={"POLICY"} />
          </div>

          {/* Enhanced Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
              Your satisfaction is our priority. Discover our customer-centric
              policies designed to provide you with the best shopping
              experience.
            </p>
          </div>

          {/* Decorative bottom accent */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Policy Cards Container */}
        <div className="relative z-10">
          {/* Enhanced Policy Grid */}
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {/* Easy Exchange Policy */}
            <div
              className="group relative fadeInUp"
              style={{ animationDelay: "0ms" }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 via-gray-900/40 to-black/30 border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-gray-600/70 hover:transform hover:scale-105 p-8 text-center">
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/15 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <img
                    src={assets.exchange_icon}
                    className="w-12 m-auto mb-5 filter brightness-0 invert group-hover:brightness-110 transition-all duration-300"
                    alt="Exchange Icon"
                  />
                  <p className="font-semibold text-lg text-white mb-3">
                    Easy Exchange Policy
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We offer hassle free exchange policy
                  </p>
                </div>
              </div>
            </div>

            {/* 7 Days Return Policy */}
            <div
              className="group relative fadeInUp"
              style={{ animationDelay: "100ms" }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 via-gray-900/40 to-black/30 border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-gray-600/70 hover:transform hover:scale-105 p-8 text-center">
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/15 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <img
                    src={assets.quality_icon}
                    className="w-12 m-auto mb-5 filter grayscale group-hover:brightness-110 transition-all duration-300"
                    alt="Quality Icon"
                  />
                  <p className="font-semibold text-lg text-white mb-3">
                    7 Days Return Policy
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We provide 7 days free return policy
                  </p>
                </div>
              </div>
            </div>

            {/* Best Customer Support */}
            <div
              className="group relative fadeInUp"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 via-gray-900/40 to-black/30 border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-gray-600/70 hover:transform hover:scale-105 p-8 text-center">
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/15 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <img
                    src={assets.support_img}
                    className="w-12 m-auto mb-5 filter brightness-0 invert group-hover:brightness-110 transition-all duration-300"
                    alt="Support Icon"
                  />
                  <p className="font-semibold text-lg text-white mb-3">
                    Best Customer Support
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We provide 24/7 customer support
                  </p>
                </div>
              </div>
            </div>
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

export default OurPolicy;
