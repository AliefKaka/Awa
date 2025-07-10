// components/Hero.js
import { Spline } from '@splinetool/react-spline'
import Lottie from '@lottiefiles/dotlottie-react'
import Typewriter from 'typewriter-effect'
import animationData from '../public/scan.lottie.json'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        <Spline scene="https://prod.spline.design/hbX2OdN9k6OeYO3z/scene.splinecode" />
      </div>

      <div className="z-10 relative max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 drop-shadow-lg">
          ABSOLUTE OPBR ALLIANCE
        </h1>
        <div className="mt-4 text-lg text-slate-300 font-mono">
          <Typewriter
            options={{
              strings: ['Bersatu. Bertempur. Menang.', 'Aliansi OPBR Terbesar.'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="mt-6 flex justify-center">
          <Lottie animationData={animationData} style={{ width: 150 }} loop autoplay />
        </div>
      </div>
    </section>
  )
}
