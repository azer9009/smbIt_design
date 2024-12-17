import React, { useState } from "react";
import partner1 from '../img/parnter1.jpeg';
import partner2 from '../img/partner2.jpeg';
import partner3 from '../img/partner3.png';
import partner4 from '../img/partner4.jfif';
import partner5 from '../img/partner5.png';
import partner6 from '../img/partner6.png';
import partner7 from '../img/partner7.png';

const Carousel = () => {
    const slides = [
        [partner1, partner2, partner3],
        [partner4, partner5, partner6],
        [partner7, partner1, partner2],
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
            <div
                className="flex transition-transform max-md:items-center max-md:ml-[200px] duration-700 ease-in-out border-slate-400"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 flex w-full justify-around flex-col md:flex-row">
                        {slide.map((image, imgIndex) => (
                            <img
                                key={imgIndex}
                                src={image}
                                alt={`Slide ${index + 1} Image ${imgIndex + 1}`}
                                className="w-full max-md:w-[300px] max-md:h-[200px] md:w-1/3 h-60 object-contain mx-2 mb-4 md:mb-0"
                            />
                        ))}
                    </div>
                ))}
            </div>

           
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 max- rounded-full ${activeIndex === i ? "bg-blue-600" : "bg-gray-400"}`}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            
            <button
                className="absolute top-1/2 left-4 transform max-md:ml-[100px] -translate-y-1/2 bg-blue-400 p-3 rounded-full shadow hover:bg-blue-700"
                onClick={handlePrev}
                aria-label="Previous Slide"
            >
                &#8249;
            </button>
            <button
                className="absolute top-1/2 right-4 transform max-md:mr-[100px] -translate-y-1/2 bg-blue-400 p-3 rounded-full shadow hover:bg-blue-700"
                onClick={handleNext}
                aria-label="Next Slide"
            >
                &#8250;
            </button>
        </div>
    );
};

export default Carousel;
