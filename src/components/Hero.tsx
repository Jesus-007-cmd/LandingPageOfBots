import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Waves } from "lucide-react";

const Hero: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      audioRef.current?.play();
      setIsPlaying(true);
      setHasStarted(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      className="
        relative h-[60vh]
        bg-[url('/pattern-waves.svg')] bg-cover bg-center
        flex flex-col justify-center items-center text-center
        text-white
      "
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Descubre los Bots GPT que Transformarán tu Negocio
      </h1>
      <p className="max-w-2xl mb-8 opacity-90">
        Automatiza tareas, mejora tus ventas y ofrece atención 24/7 con inteligencia artificial.
      </p>
      <a
        href="#bots"
        className="
          bg-red-600 hover:bg-red-700
          px-6 py-3 rounded-full
          font-medium uppercase tracking-wide
          transition
        "
      >
        Ver Bots
      </a>

      {/* Control de audio */}
      <div className="absolute bottom-6 right-6 flex items-center gap-4">
        <button
          onClick={toggleAudio}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition backdrop-blur-lg"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-yellow-400 animate-pulse" />
          ) : (
            <Play className="w-6 h-6 text-yellow-400 animate-pulse" />
          )}
        </button>
        {hasStarted && (
          <motion.div
            className="flex gap-1"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <Waves className="w-5 h-5 text-blue-400" />
          </motion.div>
        )}
        <audio ref={audioRef} src="/audio/intro.mp3" preload="auto" />
      </div>
    </section>
  );
};

export default Hero;
