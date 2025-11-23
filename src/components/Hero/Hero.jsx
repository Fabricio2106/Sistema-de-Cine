import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import peli1 from "../../assets/peli1.jpg";
import peli2 from "../../assets/peli2.jpg";
import peli3 from "../../assets/peli3.jpg";

export default function Hero() {
  return (
    <section id="inicio" className="mt-20 w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-none overflow-hidden shadow-xl"
      >
        {[peli1, peli2, peli3].map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full">
              <img
                src={img}
                alt={`Película ${i + 1}`}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-5 left-5">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full font-bold shadow-lg">
                  Comprar entrada
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
