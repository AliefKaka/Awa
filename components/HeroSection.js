// components/HeroSection.js
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4 bg-background">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-primary mb-4"
      >
        Bergabunglah dengan Aliansi Terkuat OPBR
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-300 max-w-xl mb-6"
      >
        Gabung divisi elite, asah skill, dan menangkan pertempuran bersama kami.
      </motion.p>
      <motion.a
        href="#features"
        className="bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
        whileHover={{ scale: 1.05 }}
      >
        Gabung Sekarang
      </motion.a>
    </section>
  );
}
