// components/Hero.js
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#0c0f1a] to-[#141927]">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-teal-400"
      >
        ABSOLUTE OPBR ALLIANCE
      </motion.h1>
      <div className="mt-4 text-xl text-slate-400">
        <Typewriter
          options={{
            strings: ['One Piece. One Soul. One Alliance.', 'Divisi Solid & Aktif.', 'Gabung Sekarang!'],
            autoStart: true,
            loop: true
          }}
        />
      </div>
    </section>
  )
}
