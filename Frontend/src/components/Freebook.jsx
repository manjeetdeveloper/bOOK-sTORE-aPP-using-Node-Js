import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-gradient-to-b from-transparent via-purple-50 to-transparent dark:via-slate-800 py-16">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text inline-block">
              Free Courses to Kickstart Your Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Begin your learning adventure with our carefully selected free courses. 
              These courses are designed to give you a solid foundation and help you 
              discover your passion for learning.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-lg opacity-10"></div>
            <div className="relative">
              <Slider {...settings}>
                {book.map((item) => (
                  <Cards item={item} key={item.id} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Freebook;
