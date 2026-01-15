import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import peli1 from "../../assets/uyayri.jpg";
import peli2 from "../../assets/perusalen.jpg";
import peli3 from "../../assets/portadadragon.webp";

export default function Hero() {
  const peliculas = [
    { 
      img: peli1, 
      titulo: "Uyariy", 
      genero: "Documental",
      descripcion: "Un poderoso documental sobre las protestas en Juliaca"
    },
    { 
      img: peli2, 
      titulo: "Perusalén", 
      genero: "Comedia",
      descripcion: "Una sátira hilarante sobre la realidad peruana"
    },
    { 
      img: peli3, 
      titulo: "Cómo Entrenar a tu Dragón", 
      genero: "Fantasía",
      descripcion: "La épica aventura llega en acción real"
    },
  ];

  return (
    <section id="inicio" className="mt-16 w-full">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="rounded-none overflow-hidden shadow-2xl"
      >
        {peliculas.map((pelicula, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
              {/* Imagen */}
              <img
                src={pelicula.img}
                alt={pelicula.titulo}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              
              {/* Contenido */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 lg:p-16">
                <div className="max-w-7xl mx-auto">
                  {/* Badge de género */}
                  <span className="inline-block bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {pelicula.genero}
                  </span>
                  
                  {/* Título */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                    {pelicula.titulo}
                  </h2>

                  {/* Descripción */}
                  <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-2xl">
                    {pelicula.descripcion}
                  </p>
                  
                  {/* Botones */}
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105">
                      Comprar entrada
                    </button>
                    <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-bold transition-all duration-300">
                      Más información
                    </button>
                  </div>
                </div>
              </div>

              {/* Indicador de slide */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {i + 1} / {peliculas.length}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}