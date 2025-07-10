// components/Rules.js
import { motion } from 'framer-motion'

const rules = [
  'Bersikap sopan & tidak toxic',
  'Wajib partisipasi minimal 2 event/bulan',
  'Tidak boleh menggunakan cheat/hack',
  'Aktif di grup & merespon leader',
  'Menghargai sesama anggota tanpa drama'
]

export default function Rules() {
  return (
    <section className="py-20 bg-[#11131d] text-white" id="rules">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-400">
          Peraturan Aliansi
        </h2>
        <ul className="space-y-6">
          {rules.map((rule, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-[#1a1d2e] p-5 rounded-xl shadow-sm border-l-4 border-cyan-500 hover:pl-8 transition-all"
            >
              <span className="text-cyan-300 font-semibold mr-2">{idx + 1}.</span>
              <span className="text-sm text-slate-300">{rule}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
