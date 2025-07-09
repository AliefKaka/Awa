// Struktur Next.js - Versi Ringan ABSOLUTE OPBR Site

// pages/index.js
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>ABSOLUTE OPBR Alliance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </>
  );
}

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

// components/Features.js
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Divisi Terstruktur',
    desc: 'Gabung dalam struktur divisi yang rapi, dipimpin oleh pemimpin handal.'
  },
  {
    title: 'Event dan Turnamen',
    desc: 'Ikuti kompetisi internal dan eksternal dengan hadiah menarik.'
  },
  {
    title: 'Komunitas Solid',
    desc: 'Bersama-sama kita tumbuh, berbagi strategi, dan dukung satu sama lain.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-background relative z-10">
      <div className="max-w-4xl mx-auto space-y-12">
        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-lg shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl text-primary font-semibold mb-2">{feat.title}</h3>
            <p className="text-gray-300">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// components/Footer.js
export default function Footer() {
  return (
    <footer id="footer" className="bg-background text-center py-8 text-gray-500">
      <p>&copy; 2025 ABSOLUTE OPBR Alliance. All rights reserved.</p>
    </footer>
  );
}

// tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00d4ff',
        background: '#0c0f1a'
      },
    },
  },
  plugins: [],
};
