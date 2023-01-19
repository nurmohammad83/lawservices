import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Testimonial/SwiperStyle/review.css";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
} from "swiper";
import { reviews } from "../../Conenst";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    return (
        <section className="py-8 md:py-12 max-w-6xl mx-auto">
          <div className="text center">
          <p className="text-center text-2xl font-semibold text-green-500">Testimonial</p>
        <h2 className="text-5xl font-semibold text-center">Meet Client Satisfaction</h2>
          </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination, Keyboard, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              
              <div className="card w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] bg-gray-700 rounded-xl text-white shadow hover:shadow-xl hover:shadow-gray-500 duration-75">
      <div className="card-body rounded-md p-8 text-center">
        <div className="avatar justify-center">
          <div className="w-16 lg:w-24 mask rounded-full">
            <img src={review.img} alt="" />
          </div>
        </div>
        <h2 className="text-2xl">{review.name}</h2>
        <hr className="border-separate my-2 border-primary" />
        <p>{review.title}</p>
        <hr className="border-separate my-2 border-primary" />
        <p className="text-xl flex items-center justify-center gap-x-3">
         <span> Ratings &nbsp; {review.rating}{" "}</span>
          <FaStar></FaStar>
        </p>
      </div>
    </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
};

export default Testimonial;