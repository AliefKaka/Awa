// components/Navbar.js
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-[#0e101a]/80 backdrop-blur-md fixed z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white font-bold text-xl tracking-wide">ABSOLUTE</div>

        <div className="hidden md:flex gap-6 text-white text-sm">
          <Link href="#hero" className="hover:text-cyan-400 transition">Beranda</Link>
          <Link href="#divisi" className="hover:text-cyan-400 transition">Divisi</Link>
          <Link href="#rules" className="hover:text-cyan-400 transition">Peraturan</Link>
          <Link href="#daftar" className="hover:text-cyan-400 transition">Daftar</Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 text-white space-y-2 bg-[#0e101a]">
          <Link href="#hero" className="block hover:text-cyan-400">Beranda</Link>
          <Link href="#divisi" className="block hover:text-cyan-400">Divisi</Link>
          <Link href="#rules" className="block hover:text-cyan-400">Peraturan</Link>
          <Link href="#daftar" className="block hover:text-cyan-400">Daftar</Link>
        </div>
      )}
    </nav>
  )
}
