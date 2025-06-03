const ThankYou40: React.FC = () => {
    return (
      <main className="text-white bg-gray-900 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">¡Gracias por tu compra del paquete de 20 bots!</h1>
        <p className="mb-6 text-lg">Haz clic abajo para descargar tu archivo PDF con los bots.</p>
        <a
          href="/assets/pdf/20bots.pdf"
          download
          className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full font-semibold"
        >
          Descargar PDF
        </a>
      </main>
    );
  };
  
  export default ThankYou40;
  