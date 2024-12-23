import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/pagination"; 
import "swiper/css/navigation"; 
import img from "../360_F_560708240_pMZPOuSfvblWGRoaiZFLT4wiFTzQPwQe.jpg";
import img1 from "../depositphotos_31516299-stock-photo-fast-food-menu.jpg";
import img2 from "../joyful-birthday-celebration-with-delicious-chocolate-cake-generative-ai_188544-9589.avif";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: img,
      title: "Min ₹400 OFF*",
      subtitle: "Use code: XTRAPARTY",
    },
    {
      id: 2,
      image: img1,
      title: "Flat ₹125 OFF",
      subtitle: "On your first order!",
    },
    {
      id: 3,
      image: img2,
      title: "50% OFF",
      subtitle: "Up to ₹100 on selected items!",
    },
  ];

  return (
    <div className="my-4 mx-auto w-full max-w-7xl px-4">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]} 
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        spaceBetween={30}
        slidesPerView={1}
        className="rounded-lg overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]"> 
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8 lg:px-10">
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-sm sm:text-lg md:text-xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
