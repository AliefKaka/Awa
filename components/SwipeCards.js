// components/SwipeCards.js
import { motion } from 'framer-motion'

const cards = ['Divisi 1', 'Divisi 2', 'Divisi 3', 'Divisi 4']

export default function SwipeCards() {
  return (
    <section className="p-10 bg-[#0f172a] text-center">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Geser Divisi</h2>
      <div className="flex overflow-x-scroll gap-4 no-scrollbar">
        {cards.map((name, i) => (
          <motion.div
            key={i}
            className="min-w-[250px] bg-slate-800 p-6 rounded-xl shadow-md"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            whileTap={{ scale: 1.05 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl text-white font-semibold">{name}</h3>
            <p className="text-slate-300">Swipe me →</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
