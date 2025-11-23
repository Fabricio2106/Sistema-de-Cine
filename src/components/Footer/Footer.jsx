// src/components/Footer/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Texto derechos de autor */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Multicines Iquitos. Todos los derechos reservados.
        </p>
        
        {/* Redes sociales */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-yellow-400 transition-colors"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-yellow-400 transition-colors"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="mailto:contacto@multicinesiquitos.com"
            aria-label="Email"
            className="hover:text-yellow-400 transition-colors"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
