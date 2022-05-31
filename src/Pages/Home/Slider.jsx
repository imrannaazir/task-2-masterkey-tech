import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Banner from "./Banner";

const Slider = () => {
  const banners = [
    {
      img: "https://i.ibb.co/D91JGny/White-Minimalist-New-Website-Promo-Banner-2.jpg",
      subtitle: "We manufacture",
      title: "Best Garments & Textiles.",
    },
    {
      img: "https://i.ibb.co/5xN8YMz/White-Minimalist-New-Website-Promo-Banner-3.jpg",
      subtitle: "Products and Impeccable",
      title: "We thrive to serve with best quality",
    },
    {
      img: "https://i.ibb.co/Q86PPCZ/White-Minimalist-New-Website-Promo-Banner-4.jpg",
      subtitle: "We Provide",
      title: "Best Copper Raw Material",
    },
  ];
  return (
    <div>
      <>
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {banners.map((banner, i) => (
            <SwiperSlide>
              <Banner key={i} banner={banner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Slider;
