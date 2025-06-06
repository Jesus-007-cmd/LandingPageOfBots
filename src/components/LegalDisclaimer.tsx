import React from "react";

const LegalDisclaimer: React.FC = () => {
  return (
    <div className="text-[8px] text-white text-justify px-4 sm:px-10 lg:px-20 xl:px-32 py-10 leading-snug">
      <p className="font-bold mb-3">📄 Disclaimer de Responsabilidad y Propiedad Intelectual</p>

      <p className="mb-3">
        Botlyst es una herramienta diseñada con el objetivo de facilitar y optimizar la automatización de procesos
        conversacionales mediante inteligencia artificial. Nuestro compromiso es ofrecer una plataforma robusta,
        versátil y fácil de usar, que ayude a empresas y profesionales a mejorar su eficiencia, atención al cliente y
        resultados comerciales.
      </p>

      <p className="mb-3">
        No obstante, es importante aclarar que los resultados que se pueden obtener con Botlyst dependen directamente del
        uso correcto y estratégico que se le dé a la herramienta. No garantizamos ingresos, crecimiento o éxito
        comercial instantáneo. Botlyst no es un sistema para “hacerse rico de la noche a la mañana”, ni promueve
        expectativas irreales. Su eficacia está condicionada por múltiples factores, como la calidad de las conversaciones
        diseñadas, la segmentación adecuada del público, el seguimiento de métricas, y la correcta implementación en los
        canales adecuados.
      </p>

      <p className="mb-3">
        Además, algunas funcionalidades de Botlyst operan en conjunto con tecnologías de terceros, incluyendo el modelo de
        lenguaje ChatGPT proporcionado por OpenAI. Esto implica que determinadas acciones o respuestas generadas por los
        bots pueden estar sujetas a cuotas, restricciones técnicas o políticas de uso impuestas por OpenAI, las cuales
        están fuera del control de Botlyst. El usuario entiende y acepta que tales limitaciones pueden afectar temporal o
        permanentemente algunas funciones del servicio.
      </p>

      <p className="mb-3">
        En el contexto de campañas publicitarias, es necesario aclarar que: Este sitio web no forma parte de Facebook ni
        de Meta Platforms Inc. Asimismo, este sitio no está avalado por Facebook ni Meta Platforms Inc. en modo alguno.
        Facebook y Meta son marcas registradas de sus respectivos propietarios.
      </p>

      <p className="mb-3">
        Todos los contenidos, diseños, marcas, textos, imágenes, software y funcionalidades disponibles en este sitio web
        son propiedad de Botlyst o de sus respectivos autores, y se encuentran protegidos por las leyes de propiedad
        intelectual y derechos de autor vigentes. Está estrictamente prohibida su reproducción, copia, distribución o
        modificación sin autorización expresa y por escrito.
      </p>

      <p className="italic">
        Al utilizar este sitio web y nuestra plataforma, el usuario acepta estos términos y comprende que el éxito en
        cualquier estrategia automatizada requiere una aplicación inteligente, ética y profesional.
      </p>
    </div>
  );
};

export default LegalDisclaimer;
