// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 px-8 py-4 bg-black/20 backdrop-blur-md flex justify-between items-center z-50">
      <h1 className="text-cyan-400 font-semibold text-xl">ABSOLUTE</h1>
      <div className="space-x-4">
        <a href="#hero" className="text-white hover:text-cyan-400 transition">Home</a>
        <a href="#features" className="text-white hover:text-cyan-400 transition">Fitur</a>
        <a href="#footer" className="text-white hover:text-cyan-400 transition">Kontak</a>
      </div>
    </nav>
  );
}
