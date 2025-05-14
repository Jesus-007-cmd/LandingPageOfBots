import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-6 text-center text-gray-500 text-sm border-t border-gray-200 w-full">
      <p>
        © {new Date().getFullYear()} Bots GPT Inteligentes. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
