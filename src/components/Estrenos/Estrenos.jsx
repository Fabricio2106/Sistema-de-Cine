import React from "react";
import estreno1 from "../../assets/estreno1.jpg";
import estreno2 from "../../assets/estreno2.jpg";
import estreno3 from "../../assets/estreno3.jpg";
import estreno4 from "../../assets/estreno4.jpg";

const Estrenos = () => {
  const peliculas = [
    { id: 1, titulo: "Pelicula 1", imagen: estreno1 },
    { id: 2, titulo: "Pelicula 2", imagen: estreno2 },
    { id: 3, titulo: "Pelicula 3", imagen: estreno3 },
    { id: 4, titulo: "Pelicula 4", imagen: estreno4 },
  ];

  return (
    <section id="estrenos" className="py-12 px-4 sm:px-12">
      <h2 className="text-3xl font-bold mb-6">🎬 Estrenos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {peliculas.map((peli) => (
          <div
            key={peli.id}
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
          >
            {/* Imagen del póster */}
            <img
              src={peli.imagen}
              alt={peli.titulo}
              className="w-full max-h-80 object-contain bg-black transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay con botones */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-3 transition-opacity duration-300">
              {/* Botón Ver detalles (borde rojo) */}
              <button className="relative px-4 py-2 text-white font-semibold rounded overflow-hidden border-2 border-red-600 group/button">
                <span className="absolute inset-0 rounded border-2 border-red-600 animate-pulse"></span>
                <span className="relative z-10">Ver detalles</span>
              </button>

              {/* Botón Comprar (borde amarillo) */}
              <button className="relative px-4 py-2 text-yellow-500 font-semibold rounded overflow-hidden border-2 border-yellow-500 group/button">
                <span className="absolute inset-0 rounded border-2 border-yellow-500 animate-pulse"></span>
                <span className="relative z-10">Comprar</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Estrenos;
