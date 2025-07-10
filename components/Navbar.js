// components/Navbar.js
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? 'bg-[#0f172a]/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-cyan-400 text-2xl font-extrabold tracking-widest drop-shadow">ABSOLUTE</h1>
        <ul className="hidden md:flex gap-8 text-white text-sm">
          <li><a href="#hero" className="hover:text-cyan-400">Beranda</a></li>
          <li><a href="#divisi" className="hover:text-cyan-400">Divisi</a></li>
          <li><a href="#rules" className="hover:text-cyan-400">Rules</a></li>
          <li><a href="#daftar" className="hover:text-cyan-400">Daftar</a></li>
        </ul>
        <div className="md:hidden text-white"><Menu /></div>
      </div>
    </motion.nav>
  )
}
