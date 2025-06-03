import { FileText, ShieldCheck, AlertTriangle, Info } from "lucide-react";

const LegalDisclaimer: React.FC = () => {
  return (
    <section className="bg-gray-950 text-gray-300 px-6 py-16 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-6 h-6 text-pink-500" />
          <h2 className="text-2xl font-bold text-white">
            Disclaimer de Responsabilidad y Propiedad Intelectual
          </h2>
        </div>

        <p className="mb-6">
          <strong className="text-white">Botlyst</strong> es una herramienta diseñada con el objetivo de facilitar y optimizar la automatización de procesos conversacionales mediante inteligencia artificial. Nuestro compromiso es ofrecer una plataforma robusta, versátil y fácil de usar, que ayude a empresas y profesionales a mejorar su eficiencia, atención al cliente y resultados comerciales.
        </p>

        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-5 h-5 text-indigo-400" />
          <h3 className="font-semibold text-white">Uso y Resultados</h3>
        </div>
        <p className="mb-6">
          Los resultados dependen directamente del uso correcto y estratégico de la herramienta. No garantizamos ingresos o éxito comercial instantáneo. Botlyst no es un sistema para “hacerse rico de la noche a la mañana”. Su eficacia depende de factores como la calidad de las conversaciones, segmentación del público, seguimiento de métricas e implementación adecuada.
        </p>

        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-5 h-5 text-yellow-400" />
          <h3 className="font-semibold text-white">Limitaciones Técnicas</h3>
        </div>
        <p className="mb-6">
          Algunas funcionalidades dependen de terceros, como el modelo ChatGPT de OpenAI. Esto puede implicar cuotas, restricciones técnicas o políticas de uso que estén fuera del control de Botlyst.
        </p>

        <div className="flex items-center gap-2 mb-2">
          <Info className="w-5 h-5 text-blue-400" />
          <h3 className="font-semibold text-white">Nota sobre Publicidad y Propiedad</h3>
        </div>
        <p className="mb-6">
          Este sitio no forma parte de Facebook ni de Meta Platforms Inc., ni está avalado por ellos. Todos los contenidos de este sitio son propiedad de Botlyst o sus respectivos autores. Está prohibida su reproducción, copia, distribución o modificación sin autorización por escrito.
        </p>

        <p className="text-sm italic text-gray-400">
          Al utilizar este sitio web y nuestra plataforma, el usuario acepta estos términos y comprende que el éxito en cualquier estrategia automatizada requiere una aplicación inteligente, ética y profesional.
        </p>
      </div>
    </section>
  );
};

export default LegalDisclaimer;
