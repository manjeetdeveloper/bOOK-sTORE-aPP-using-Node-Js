import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate('/enroll', { state: { book: item } });
  };
  return (
    <>
      <div className="p-4">
        <div className="relative group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-pink-500 text-white text-sm font-semibold rounded-full">
                {item.category}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-pink-500 transition-colors duration-300">
              {item.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{item.title}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-pink-500">${item.price}</span>
                {item.price === '0' && (
                  <span className="text-sm text-green-500 font-semibold">Free!</span>
                )}
              </div>
              <button 
                onClick={handleEnroll}
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
