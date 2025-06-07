import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Waves, Volume2 } from "lucide-react";

const Hero: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = volume;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        }).catch(err => {
          console.warn("Autoplay bloqueado:", err);
        });
      }
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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleButtonClick = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    }
    document.querySelector("#bots")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="
        relative h-[60vh]
        bg-[url('/pattern-waves.svg')] bg-cover bg-center
        flex flex-col justify-center items-center text-center
        text-white
        px-4
      "
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Descubre los Bots GPT que Transformarán tu Negocio
      </h1>
      <p className="max-w-2xl mb-8 opacity-90">
        Automatiza tareas, mejora tus ventas y ofrece atención 24/7 con inteligencia artificial.
      </p>
      <button
        onClick={handleButtonClick}
        className="
          bg-red-600 hover:bg-red-700
          px-6 py-3 rounded-full
          font-medium uppercase tracking-wide
          transition
        "
      >
        Ver Bots
      </button>

      {/* 🎵 Control de audio */}
      <div
        className="
          absolute bottom-6 right-6
          flex items-center gap-4
          bg-black/40 px-4 py-2 rounded-xl
          backdrop-blur-lg
          z-10
        "
      >
        <button onClick={toggleAudio} className="p-2 rounded-full hover:bg-white/10 transition">
          {isPlaying ? (
            <Pause className="w-6 h-6 text-yellow-400 animate-pulse" />
          ) : (
            <Play className="w-6 h-6 text-yellow-400 animate-pulse" />
          )}
        </button>

        {hasStarted && (
          <motion.div
            className="flex gap-1"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <Waves className="w-5 h-5 text-blue-400" />
          </motion.div>
        )}

        <div className="hidden sm:flex items-center gap-2">
          <Volume2 className="w-5 h-5 text-white" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 accent-yellow-400"
          />
        </div>
        <audio ref={audioRef} src="/assets/audio/musicBotlyst.mp3" preload="auto" />
      </div>
    </section>
  );
};

export default Hero;
