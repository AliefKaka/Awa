// Project converted to Next.js structure using dependencies from package.json

// Root files
// ├── pages/
// │   ├── _app.js
// │   └── index.js
// ├── components/
// │   ├── Hero.js
// │   ├── Divisions.js
// │   ├── Rules.js
// │   └── RegisterForm.js
// ├── public/
// │   └── shapes.svg (optional background assets)
// ├── styles/
// │   └── globals.css
// ├── tailwind.config.js
// ├── postcss.config.js
// └── next.config.js

// pages/_app.js
import '@/styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])
  return <Component {...pageProps} />
}

// pages/index.js
import Hero from '@/components/Hero'
import Divisions from '@/components/Divisions'
import Rules from '@/components/Rules'
import RegisterForm from '@/components/RegisterForm'

export default function Home() {
  return (
    <>
      <Hero />
      <Divisions />
      <Rules />
      <RegisterForm />
    </>
  )
}

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

// components/Divisions.js
export default function Divisions() {
  const divisions = [
    { name: 'Divisi 1', desc: 'Level Min. 30' },
    { name: 'Divisi 2', desc: 'Level Min. 20' },
    { name: 'Divisi 3', desc: 'Level Min. 12' },
    { name: 'Divisi 4', desc: 'Cadangan & Latihan' }
  ]
  return (
    <section className="p-10 text-center" id="divisions">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Divisi Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {divisions.map((div, i) => (
          <div key={i} className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-teal-400 transition-all" data-tilt>
            <h3 className="text-xl font-semibold text-white">{div.name}</h3>
            <p className="text-slate-300">{div.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// components/Rules.js
export default function Rules() {
  return (
    <section className="p-10 bg-[#0f172a] text-center" id="rules">
      <h2 className="text-3xl font-bold text-teal-400 mb-4">Peraturan Aliansi</h2>
      <ul className="space-y-2 text-slate-300">
        <li>- Aktif minimal 4x seminggu</li>
        <li>- No toxic & no cheat</li>
        <li>- Wajib ikut event internal</li>
        <li>- Patuhi pemimpin divisi</li>
      </ul>
    </section>
  )
}

// components/RegisterForm.js
export default function RegisterForm() {
  return (
    <section className="p-10 text-center" id="register">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Form Pendaftaran</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input className="w-full px-4 py-2 rounded bg-slate-800 text-white" type="text" placeholder="Nama In-Game" required />
        <input className="w-full px-4 py-2 rounded bg-slate-800 text-white" type="text" placeholder="ID OPBR" required />
        <input className="w-full px-4 py-2 rounded bg-slate-800 text-white" type="number" placeholder="Level Saat Ini" required />
        <select className="w-full px-4 py-2 rounded bg-slate-800 text-white" required>
          <option value="">Pilih Divisi</option>
          <option value="Divisi 1">Divisi 1</option>
          <option value="Divisi 2">Divisi 2</option>
          <option value="Divisi 3">Divisi 3</option>
          <option value="Divisi 4">Divisi 4</option>
        </select>
        <button type="submit" className="w-full bg-teal-500 py-2 rounded text-white font-bold hover:bg-teal-600">Daftar</button>
      </form>
    </section>
  )
}

// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background: linear-gradient(to bottom, #0c0f1a, #141927);
  color: white;
  font-family: 'Segoe UI', Tahoma, sans-serif;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #14b8a6;
  border-radius: 10px;
}

// tailwind.config.js and postcss.config.js should match the Tailwind CSS setup based on your devDependencies
// All dependencies like aos, gsap, framer-motion, etc., are now integrated into Next.js components properly
