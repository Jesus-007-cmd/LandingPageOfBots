import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 pt-10 pb-6 text-center w-full text-gray-400">
      <hr className="border-gray-700 mb-6 w-11/12 mx-auto" />
      <p className="text-sm">
        © {new Date().getFullYear()} Bots GPT Inteligentes. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
