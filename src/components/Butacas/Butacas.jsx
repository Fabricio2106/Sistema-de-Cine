import React, { useState } from "react";
import "./App.css";

const App = () => {
  // Lista de asientos no disponibles (ejemplo)
  const unavailableSeats = ["B5", "C7", "D3"];

  // Estado de asientos seleccionados
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Lista de asientos con precio
  const seats = [
    { row: "A", count: 10, price: 800 },
    { row: "B", count: 12, price: 1200 },
    { row: "C", count: 12, price: 1200 },
    { row: "D", count: 10, price: 1500 },
  ];

  // Alternar selección
  const toggleSeat = (seatId, price) => {
    if (unavailableSeats.includes(seatId)) return;

    setSelectedSeats((prev) => {
      if (prev.some((s) => s.id === seatId)) {
        return prev.filter((s) => s.id !== seatId);
      } else {
        return [...prev, { id: seatId, price }];
      }
    });
  };

  // Calcular total
  const total = selectedSeats.reduce((sum, s) => sum + s.price, 0);

  return (
    <>
      <div className="background"></div>

      <div className="container">
        <h1>Cineplex Movies</h1>

        {/* Pantalla */}
        <div className="screen">
          <span>SCREEN</span>
        </div>

        {/* Grid de asientos */}
        <div className="seat-grid">
          {seats.map((section) => (
            <div className="row" key={section.row}>
              {Array.from({ length: section.count }).map((_, index) => {
                const seatId = `${section.row}${index + 1}`;
                const isUnavailable = unavailableSeats.includes(seatId);
                const isSelected = selectedSeats.some(
                  (s) => s.id === seatId
                );

                return (
                  <div
                    key={seatId}
                    className={`seat ${
                      isUnavailable
                        ? "unavailable"
                        : isSelected
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      toggleSeat(seatId, section.price)
                    }
                  >
                    {seatId}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Leyenda */}
        <div className="legend">
          <div className="legend-item">
            <div className="seat static-available"></div>
            <span>Available Seat</span>
          </div>
          <div className="legend-item">
            <div className="seat static-selected"></div>
            <span>Selected Seat</span>
          </div>
          <div className="legend-item">
            <div className="seat static-unavailable"></div>
            <span>Unavailable Seat</span>
          </div>
        </div>

        {/* Resumen */}
        <div className="summary">
          <p>{selectedSeats.length} seat(s) selected</p>
          <p>Total: LKR {total}</p>
          <br />
          <button
            className="btn"
            onClick={() =>
              alert(
                `You selected: ${selectedSeats
                  .map((s) => s.id)
                  .join(", ")}\nTotal: LKR ${total}`
              )
            }
          >
            Proceed
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="legal">
          <p>&copy; 2024 Cineplex Movies. All rights reserved.</p>
        </div>
        <div className="designed-by">
          <p>
            Designed by Chatura Dissanayake | consultchatura@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
