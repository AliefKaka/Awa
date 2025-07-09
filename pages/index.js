// pages/index.js
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
