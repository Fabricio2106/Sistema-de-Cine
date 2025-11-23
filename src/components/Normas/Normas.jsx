// src/components/Normas/Normas.jsx
const Normas = () => {
  return (
    <section id="normas" className="py-16 px-6 sm:px-12 bg-gray-800 text-white-400 max-w-4xl mx-auto rounded-lg shadow-lg mt-12">
      <h2 className="text-4xl  mb-8 text-center border-b-2 border-yellow-400 pb-3">
        📜 Normas
      </h2>
      <ul className="list-disc list-inside space-y-6 text-lg leading-relaxed">
        <li>
          Antes de retirarse de la ventanilla, sírvase verificar su ticket de entrada (horario de función, película, sala y monto que pagó por él). La empresa no efectuará cambios ni devoluciones posteriores. Prohibido el ingreso con animales domésticos.
        </li>
        <li>Todo niño a partir de tres (03) años paga.</li>
        <li>La empresa se reserva el derecho de cambiar los horarios de las películas sin previo aviso.</li>
        <li>La empresa no se responsabiliza por la pérdida de sus pertenencias.</li>
        <li>Multicines Iquitos no tiene ninguna tarjeta de afiliación para promociones.</li>
        <li>Todo billete falso será marcado.</li>
        <li>La empresa Multicines Iquitos cuenta con libro de reclamaciones.</li>
      </ul>
    </section>
  );
};

export default Normas;
