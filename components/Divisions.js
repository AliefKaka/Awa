// components/Divisions.js
import { motion } from 'framer-motion'

const divisions = [
  { id: 1, title: 'Divisi 1', desc: 'Elite. Level 30+ dan aktif grinding setiap hari.' },
  { id: 2, title: 'Divisi 2', desc: 'Kompetitif. Level 20+ dan aktif event & boss.' },
  { id: 3, title: 'Divisi 3', desc: 'Santai. Level 12+ cukup login dan partisipasi.' },
]

export default function Divisions() {
  return (
    <section className="py-20 bg-[#0e101a] text-white" id="divisi">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-400">
          Divisi Kami
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {divisions.map((div) => (
            <motion.div
              key={div.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#1a1d2e] p-6 rounded-2xl shadow-md hover:scale-105 transition-transform border border-cyan-700"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">{div.title}</h3>
              <p className="text-sm text-slate-300">{div.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
