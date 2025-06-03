import React, { useState } from "react";
import { Mail, Copy, CheckCircle } from "lucide-react";

const AfterPaymentInfo: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
/* "bots@vmmasdigital.com",
    "ventas@vmmasdigital.com",*/

  const emails = [
   "gpstrackerxy@gmail.com",
   "jesusgtz168@gmail.com"
  ];

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-6 text-center rounded-xl max-w-3xl mx-auto shadow-xl mt-10 border border-pink-500">
      <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-2">
        <Mail className="w-7 h-7 text-pink-400 animate-pulse" />
        ¿Ya pagaste?
      </h2>
      <p className="text-lg text-gray-300 mb-6">
        Envía tu comprobante de pago por correo y te enviaremos el acceso a tu paquete de bots.
      </p>

      <div className="space-y-4">
        {emails.map((email, i) => (
          <div
            key={i}
            className="bg-gray-800 border border-pink-500 rounded-lg p-4 flex items-center justify-between"
          >
            <span className="text-pink-300 font-mono">{email}</span>
            <button
              onClick={() => copyToClipboard(email)}
              className="flex items-center gap-2 text-sm bg-pink-600 hover:bg-pink-700 px-3 py-1 rounded-full transition"
            >
              {copiedEmail === email ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AfterPaymentInfo;
