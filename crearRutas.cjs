const fs = require('fs');
const path = require('path');

// Redirecciones (solo ejemplos, reemplaza o expande con los 40)
const redirects = {
  "asistente-estrategico-de-negocios": "https://chatgpt.com/g/g-DjhY1rCHk-asistente-estrategico-de-negocios",
  "asistente-virtual": "https://chatgpt.com/g/g-LMyTjCCb3-max-asistente-virtual",
  "automatizador-inteligente-de-marketing": "https://chatgpt.com/g/g-Jmm9mvgUM-automatizador-inteligente-de-marketing",
  "content-pro": "https://chatgpt.com/g/g-9Qk4ylRpR-contentpro",
  "estratega-de-correos-en-frio": "https://chatgpt.com/g/g-ERRYcse1H-estratega-de-correos-en-frio",
  "hookmaster-pro": "https://chatgpt.com/g/g-lIYUdETAz-hookmaster-pro",
  "instagrow-pro": "https://chatgpt.com/g/g-Kpyt7eqHc-instagrow-pro",
  "optimizador-de-marketing-ia": "https://chatgpt.com/g/g-KZHd2cIUu-optimizador-de-marketing-ia",
  "estrategias-para-redes-sociales": "https://chatgpt.com/g/g-RLWyvApbo-estrategias-para-redes-sociales",
  "face-growth-expert": "https://chatgpt.com/g/g-C77OJd6yE-face-growth-expert",
  "tom-atencion-a-clientes": "https://chatgpt.com/g/g-xmquk6Ek2-tom-atencion-a-clientes",
  "hiring-navigator-capacitador": "https://chatgpt.com/g/g-eOlSmlGrb-hiring-navigator-capacitador",
  "creador-de-e-books": "https://chatgpt.com/g/g-EHfx2z0Q7-creador-de-e-books",
  "visual-impact-pro": "https://chatgpt.com/g/g-LaRRHQZdM-visual-impact-pro",
  "creativo-de-video-viral": "https://chatgpt.com/g/g-00CTjhPFO-creativo-de-video-viral",
  "consultor-de-crecimiento-empresarial": "https://chatgpt.com/g/g-54OQA5xDt-consultor-de-crecimiento-empresarial",
  "linkedn-network-master": "https://chatgpt.com/g/g-QFwzOR9U9-linkedn-network-master",
  "desarrollo-de-productos": "https://chatgpt.com/g/g-5gytZafNr-desarrollo-de-productos",
  "seo-blog-master": "https://chatgpt.com/g/g-ZGJQfzUOD-seo-blog-master",
  "asesor-financiero-virtual": "https://chatgpt.com/g/g-Y58IidaHk-asesor-financiero-virtual",
  "gestion-de-equipos-empresariales": "https://chatgpt.com/g/g-spWqQoyTz-optiteam-gestion-de-equipos-empresariales",
  "asistente-gramatical": "https://chatgpt.com/g/g-5m0dcjLef-asistente-gramatical",
  "innovabot-empresarial": "https://chatgpt.com/g/g-Gr24ujluL-innovabot-empresarial",
  "mentor-de-excell": "https://chatgpt.com/g/g-0SCHjU17T-ben-mentor-de-excell",
  "estrategias-de-anuncios-para-altas-conversiones": "https://chatgpt.com/g/g-nriUb2ZnF-estrategias-de-anuncios-para-altas-conversiones",
  "promptmaster-360": "https://chatgpt.com/g/g-vSdR5EK38-promptmaster-360",
  "optiseo": "https://chatgpt.com/g/g-8PBblJoVI-ray-optiseo",
  "webmaster-asistant": "https://chatgpt.com/g/g-mLBTHYFgw-webmaster-asistant",
  "traductor-amigable": "https://chatgpt.com/g/g-BlInWl82x-traductor-amigable",
  "segmentador-de-audiencias-avanzado": "https://chatgpt.com/g/g-pkv1ap1J3-segmentador-de-audiencias-avanzado-gpt",
  "reclutador-ia-empresarial": "https://chatgpt.com/g/g-M724VvvNb-reclutador-ia-empresarial",
  "e-comoptimizer": "https://chatgpt.com/g/g-Pc23FIQKn-e-comoptimizer",
  "trackmaster-insights": "https://chatgpt.com/g/g-681e265ef6e88191a0462fdc6ec4456a-trackmaster-insights-gpt",
  "monetizador-de-redes-sociales": "https://chatgpt.com/g/g-t6LgRID8T-monetizador-de-redes-sociales",
  "optimizador-de-trading": "https://chatgpt.com/g/g-eyqr2ytNq-optimizador-de-trading",
  "realtorbot-pro": "https://chatgpt.com/g/g-683d35b804c08191ae6fc156f958189e-realtorbot-pro",
  "medibot": "https://chatgpt.com/g/g-683d3b9bac908191bce5ab6beb7e006f-medibot",
  "beautybot-pro": "https://chatgpt.com/g/g-683d42b94e2081919bd8489e21c4534d-beautybot-pro",
  "defensor-de-reputacion-online": "https://chatgpt.com/g/g-683f3f6e71508191842d8e74f05874a9-defensor-de-reputacion-online",
  "entrenador-ia-de-equipos-comerciales": "https://chatgpt.com/g/g-683f4031d7e08191a6d6d4c581dd9d45-entrenador-ia-de-equipos-comerciales"
};


const baseDir = path.join(__dirname, 'public', 'suite-bots');

const htmlTemplate = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <title>Redirigiendo...</title>
    <script>
        const redirectUrl = "%%URL%%";
        window.location.href = redirectUrl;
    </script>
</head>
<body>
    <p>Redirigiendo…</p>
</body>
</html>
`;

Object.entries(redirects).forEach(([slug, url]) => {
  const folderPath = path.join(baseDir, slug);
  const filePath = path.join(folderPath, 'index.html');

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const finalHtml = htmlTemplate.replace('%%URL%%', url);
  fs.writeFileSync(filePath, finalHtml, 'utf8');
  console.log(`✅ Ruta creada: ${slug}`);
});

console.log('\n🟢 Todas las rutas fueron generadas.');
