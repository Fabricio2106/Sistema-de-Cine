import React from "react";

const Estrenos = () => {
  const peliculas = [
    { 
      id: 1, 
      titulo: "Uyariy", 
      imagen: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=400&h=600&fit=crop",
      genero: "Documental", 
      rating: "ATP"
    },
    { 
      id: 2, 
      titulo: "De vuelta a los 80", 
      imagen: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
      genero: "Comedia", 
      rating: "ATP"
    },
    { 
      id: 3, 
      titulo: "La Maldición de Madeline", 
      imagen: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
      genero: "Thriller", 
      rating: "16+"
    },
    { 
      id: 4, 
      titulo: "Perusalén", 
      imagen: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop",
      genero: "Comedia", 
      rating: "16+"
    },
    { 
      id: 5, 
      titulo: "Killari", 
      imagen: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
      genero: "Drama", 
      rating: "ATP"
    },
    { 
      id: 6, 
      titulo: "Cómo Entrenar a tu Dragón", 
      imagen: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=400&h=600&fit=crop",
      genero: "Fantasía", 
      rating: "ATP"
    },
  ];

  return (
    <section id="estrenos" className="py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Título de sección */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center border-b-2 border-yellow-400 pb-3 text-white">
          Estrenos de la Semana
        </h2>
        
        {/* Grid de películas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-12">
          {peliculas.map((peli) => (
            <div
              key={peli.id}
              className="relative bg-gray-900 rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              {/* Imagen del póster */}
              <div className="relative overflow-hidden">
                <img
                  src={peli.imagen}
                  alt={peli.titulo}
                  className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges superiores */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                  <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                    {peli.genero}
                  </span>
                  <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-bold">
                    {peli.rating}
                  </span>
                </div>

                {/* Gradiente de fondo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Título de película */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-bold text-sm sm:text-base mb-2 line-clamp-2">
                  {peli.titulo}
                </h3>
              </div>
              
              {/* Overlay con botones (aparece en hover) */}
              <div className="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-3 px-4 transition-all duration-300">
                <h3 className="text-white font-bold text-lg mb-2 text-center">
                  {peli.titulo}
                </h3>
                
                {/* Botón Ver detalles */}
                <button className="w-full px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-600 transition-all duration-300 shadow-lg shadow-purple-600/30">
                  Ver detalles
                </button>
                
                {/* Botón Comprar */}
                <button className="w-full px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-all duration-300 shadow-lg shadow-yellow-500/50 hover:scale-105">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botón ver más */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50">
            Ver cartelera completa
          </button>
        </div>
      </div>
    </section>
  );
};

export default Estrenos;