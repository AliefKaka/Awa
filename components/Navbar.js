// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-primary font-bold text-xl">ABSOLUTE</h1>
      <div className="space-x-6">
        <Link href="#hero" className="text-white hover:text-primary transition">Home</Link>
        <Link href="#features" className="text-white hover:text-primary transition">Fitur</Link>
        <Link href="#footer" className="text-white hover:text-primary transition">Kontak</Link>
      </div>
    </nav>
  );
}
