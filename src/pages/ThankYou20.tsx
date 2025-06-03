const ThankYou20: React.FC = () => {
    return (
        <main className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">¡Gracias por adquirir el paquete de 20 bots! 🤖</h1>
            <p className="mb-6 text-lg max-w-xl">
                Tu acceso a la suite de herramientas inteligentes está listo. Descarga tu archivo PDF con los 20 bots empresariales.
            </p>
            <a
                href="/assets/pdf/suite_20_bots_empresariales.pdf"
                download
                className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-full font-semibold shadow-lg transition-all"
            >
                Descargar Paquete de 20 Bots
            </a>

        </main>
    );
};

export default ThankYou20;
