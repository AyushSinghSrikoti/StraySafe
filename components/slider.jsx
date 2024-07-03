
import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, imageUrl: '/SliderImages/munchkin.jpg', altText: 'A munchkin' },
    { id: 2, imageUrl: '/SliderImages/straycat1.jpg', altText: 'Stray cat' },
    { id: 3, imageUrl: '/SliderImages/spicy.png', altText: 'A spicy one' },
    // { id: 4, imageUrl: '/SliderImages/mothercat.jpg', altText: 'Thats a dawg' }
  ];

  const totalSlides = slides.length;
  const autoplayDelay = 6000; 

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '90vh' }}>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md z-10"
        onClick={prevSlide}
      >
        Prev
      </button>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.imageUrl})`  , backgroundPosition: '10% 70%' , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}
        >
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
            {slide.altText}
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md z-10"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
