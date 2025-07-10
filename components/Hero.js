// components/Hero.js
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#0e101a] to-[#1a1d2e] text-white relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
      >
        ABSOLUTE OPBR ALLIANCE
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl text-cyan-400"
      >
        <Typewriter
          options={{
            strings: ['Aliansi Terbesar', 'Komunitas Solid', 'Bergabung Sekarang!'],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-8"
      >
        <Link
          href="#daftar"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-lg transition-all"
        >
          Daftar Sekarang
        </Link>
      </motion.div>

      {/* Paralaks background animasi */}
      <div className="absolute -z-10 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-600/10 via-transparent to-transparent animate-pulse"></div>
    </div>
  )
}
