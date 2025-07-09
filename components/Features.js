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
