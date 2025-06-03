import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import suiteData from '../data/suiteBotsContent.json';

const container = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, ease: 'easeOut' } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
};

const SuiteBotsSection: React.FC = () => {
  const { title, intro, sections, cta, imagesBetween } = suiteData;
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, -200]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollNext = () => {
    if (!carouselRef.current) return;
    const w = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({ left: w, behavior: 'smooth' });
    setActiveIdx((prev) => (prev + 1) % sections.length);
  };

  const scrollPrev = () => {
    if (!carouselRef.current) return;
    const w = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({ left: -w, behavior: 'smooth' });
    setActiveIdx((prev) => (prev - 1 + sections.length) % sections.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative overflow-hidden bg-gray-900 py-24 px-6 sm:px-12 lg:px-24 text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 to-black" />

      <motion.h2
        variants={item}
        className="text-5xl sm:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent drop-shadow-xl"
      >
        {title}
      </motion.h2>

      <motion.p variants={item} className="max-w-2xl mx-auto text-center text-gray-300 mb-20 leading-relaxed">
        {intro}
      </motion.p>

      <motion.div variants={item} className="relative max-w-screen-xl mx-auto">
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-xl"
        >
          <ChevronLeft className="w-7 h-7 text-white" />
        </button>

        <div ref={carouselRef} className="overflow-hidden">
          <div className="flex snap-x snap-mandatory scroll-smooth">
            {sections.map((sec, idx) => {
              const fullText = `${sec.content1}  ${sec.content2}`;
              const summary = fullText.length > 150 ? fullText.slice(0, 150) + '…' : fullText;
              return (
                <motion.div
                  key={idx}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="snap-center flex-shrink-0 w-full max-w-full p-4"
                >
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-6 p-6 rounded-3xl shadow-2xl min-h-[400px]
                    ${idx % 2 === 0
                        ? 'bg-gradient-to-br from-gray-800 to-gray-700'
                        : 'bg-gradient-to-br from-purple-800 to-pink-900'
                      }`}
                  >
                    <div className="flex-1 px-4">
                      <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
                        {sec.heading}
                      </h3>
                      <p className="text-gray-200 mb-4 whitespace-pre-line">{summary}</p>
                      {fullText.length > 150 && (
                        <button
                          onClick={() => setOpenIdx(idx)}
                          className="text-indigo-300 hover:underline"
                        >
                          Ver más
                        </button>
                      )}
                    </div>
                    <motion.img
                      src={imagesBetween[idx]}
                      alt={sec.heading}
                      variants={item}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="flex-1 w-full max-w-md h-96 object-contain rounded-2xl shadow-2xl"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-xl"
        >
          <ChevronRight className="w-7 h-7 text-white" />
        </button>

        <div className="mt-6 flex justify-center gap-2">
          {sections.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${activeIdx === idx ? 'bg-white' : 'bg-gray-500'} transition`}
            />
          ))}
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-16 flex justify-center">
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-500 text-white font-bold text-lg py-3 px-8 rounded-full shadow-2xl uppercase animate-pulse transition-all"
        >
          {cta}
        </a>
      </motion.div>

      {openIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 text-white rounded-2xl max-w-lg w-full p-6 relative"
          >
            <button
              onClick={() => setOpenIdx(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-semibold mb-4">{sections[openIdx].heading}</h3>
            <p className="text-gray-200 whitespace-pre-line mb-4">{sections[openIdx].content1}</p>
            <p className="text-gray-200 whitespace-pre-line">{sections[openIdx].content2}</p>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default SuiteBotsSection;
