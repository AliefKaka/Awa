// components/Divisions.js
export default function Divisions() {
  const divisions = [
    { name: 'Divisi 1', desc: 'Level Min. 30' },
    { name: 'Divisi 2', desc: 'Level Min. 20' },
    { name: 'Divisi 3', desc: 'Level Min. 12' },
    { name: 'Divisi 4', desc: 'Cadangan & Latihan' }
  ]
  return (
    <section className="p-10 text-center" id="divisions">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Divisi Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {divisions.map((div, i) => (
          <div key={i} className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-teal-400 transition-all" data-tilt>
            <h3 className="text-xl font-semibold text-white">{div.name}</h3>
            <p className="text-slate-300">{div.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
