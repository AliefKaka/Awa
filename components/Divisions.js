// components/Divisions.js
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const divisions = [
  { name: 'Divisi 1', min: 'Level 30+', color: 'from-cyan-500 to-blue-700' },
  { name: 'Divisi 2', min: 'Level 20+', color: 'from-purple-500 to-indigo-700' },
  { name: 'Divisi 3', min: 'Level 12+', color: 'from-rose-500 to-pink-600' },
  { name: 'Special Force', min: 'Elite Only', color: 'from-yellow-400 to-orange-600' },
]

export default function Divisions() {
  return (
    <section id="divisi" className="py-16 px-6 text-center">
      <h2 className="section-title">Divisi Kami</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {divisions.map((div, i) => (
          <motion.div
            key={i}
            data-aos="zoom-in"
            whileHover={{ scale: 1.05 }}
            className={`card-glow bg-gradient-to-br ${div.color} p-6 rounded-2xl shadow-lg`}
          >
            <Sparkles className="mx-auto text-white mb-2" />
            <h3 className="text-xl font-bold">{div.name}</h3>
            <p className="text-sm text-white/80">{div.min}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
