import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row py-16">
          <div className="w-full order-2 md:order-1 md:w-1/2 mt-8 md:mt-24">
            <div className="space-y-8">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Discover Your Learning Journey
                <span className="block mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">Expand Your Knowledge!</span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Embark on a transformative learning experience with our curated collection of courses. 
                Master new skills, explore exciting topics, and achieve your educational goals with expert guidance.
              </p>
              <div className="relative">
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:border-pink-500 dark:bg-slate-800 dark:text-white" 
                  placeholder="Enter your email to get started"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all duration-300 font-semibold">
                  Get Started
                </button>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Free Courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Expert Teachers</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 w-full md:w-1/2 flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <img
                src={banner}
                className="w-full md:max-w-[600px] relative rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                alt="Learning Platform Banner"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
