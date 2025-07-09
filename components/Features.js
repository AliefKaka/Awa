// components/Features.js
import { useEffect } from 'react';

export default function Features() {
  useEffect(() => {
    const cards = document.querySelectorAll('.feature-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.2 });
    cards.forEach(card => observer.observe(card));
  }, []);

  const data = [
    { title: "Divisi Terstruktur", text: "Gabung dalam struktur divisi yang rapi, dipimpin oleh pemimpin handal." },
    { title: "Event dan Turnamen", text: "Ikuti kompetisi internal dan eksternal dengan hadiah menarik." },
    { title: "Komunitas Solid", text: "Bersama-sama kita tumbuh, berbagi strategi, dan dukung satu sama lain." },
  ];

  return (
    <section id="features" className="max-w-5xl mx-auto py-20 px-4">
      <div className="grid gap-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="feature-card bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md shadow-lg transform translate-y-14 opacity-0 transition duration-700"
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
