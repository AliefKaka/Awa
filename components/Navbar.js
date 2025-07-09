// components/Navbar.js
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled
          ? 'backdrop-blur-md bg-[#0f172a]/80 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-cyan-400 font-bold text-2xl tracking-wide">ABSOLUTE</h1>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 text-white font-medium text-sm">
          <li><a href="#hero" className="hover:text-cyan-400 transition-all">Beranda</a></li>
          <li><a href="#divisi" className="hover:text-cyan-400 transition-all">Divisi</a></li>
          <li><a href="#rules" className="hover:text-cyan-400 transition-all">Rules</a></li>
          <li><a href="#daftar" className="hover:text-cyan-400 transition-all">Daftar</a></li>
        </ul>

        {/* Mobile */}
        <div className="md:hidden text-white">
          <Menu size={24} />
        </div>
      </div>
    </motion.nav>
  )
}
