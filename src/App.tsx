const ThankYou40: React.FC = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">¡Gracias por adquirir el paquete de 40 bots! 🚀</h1>
      <p className="mb-6 text-lg max-w-xl">
        Aquí tienes acceso a tu suite completa de 30 bots + 10 de regalo. Descarga el PDF ahora mismo.
      </p>
      <a
        href="/assets/pdf/suite_40_bots_promo.pdf"
        download
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full font-semibold shadow-lg transition-all"
      >
        Descargar Paquete de 40 Bots
      </a>

    </main>
  );
};

export default ThankYou40;
