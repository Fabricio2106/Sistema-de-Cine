// src/components/ComoLlegar/ComoLlegar.jsx
const ComoLlegar = () => {
  return (
    <section className="py-16 px-6 sm:px-12 bg-gray-900 text-white max-w-4xl mx-auto rounded-lg shadow-lg mt-12">
      <h2 className="text-4xl font-extrabold mb-8 text-center border-b-2 border-yellow-400 pb-3">
        🗺️ Cómo llegar
      </h2>
      <p className="mb-8 text-center text-lg leading-relaxed">
        Dirección: Av. Principal 123, Iquitos, Perú.  
        <br />
        Estamos ubicados en el centro comercial Multicines Iquitos.
      </p>
      <div className="w-full h-64 sm:h-96 rounded-md overflow-hidden shadow-inner">
        <iframe
          title="Mapa de Multicines Iquitos"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.337425630249!2d-73.25032588468104!3d-3.743373597232779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9100e77d67b0f57d%3A0xd3dd7ef6d5f7f1a7!2sMulticines%20Iquitos!5e0!3m2!1ses-419!2spe!4v1691443200000!5m2!1ses-419!2spe"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ComoLlegar;
