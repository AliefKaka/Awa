// pages/index.js
import Head from 'next/head'
import Hero from '../components/Hero'
import Divisions from '../components/Divisions'
import Rules from '../components/Rules'
import RegisterForm from '../components/RegisterForm'
import Navbar from '../components/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <>
      <Head>
        <title>ABSOLUTE OPBR Alliance</title>
        <meta name="description" content="Aliansi OPBR terbesar & solid di Indonesia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Divisi */}
      <section id="divisi" data-aos="fade-up">
        <Divisions />
      </section>

      {/* Rules */}
      <section id="rules" data-aos="fade-up">
        <Rules />
      </section>

      {/* Form Pendaftaran */}
      <section id="daftar" data-aos="fade-up">
        <RegisterForm />
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-slate-500 text-sm">
        © 2025 ABSOLUTE OPBR | Developed by AliefKaka
      </footer>
    </>
  )
}
