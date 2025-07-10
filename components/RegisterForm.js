// components/RegisterForm.js
import { useState } from 'react'
import Swal from 'sweetalert2'

export default function RegisterForm() {
  const [form, setForm] = useState({ nama: '', level: '', divisi: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Berhasil Daftar!',
      text: `Selamat datang, ${form.nama}!`,
      icon: 'success',
      confirmButtonColor: '#06b6d4'
    })
    setForm({ nama: '', level: '', divisi: '' })
  }

  return (
    <section className="py-20 bg-[#0e101a] text-white" id="daftar">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-400">
          Formulir Pendaftaran
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1d2e] p-8 rounded-xl shadow-md space-y-6 border border-cyan-700"
        >
          <div>
            <label className="block text-sm mb-1">Nama In-Game</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0e101a] border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Level</label>
            <input
              type="number"
              name="level"
              value={form.level}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0e101a] border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Pilih Divisi</label>
            <select
              name="divisi"
              value={form.divisi}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0e101a] border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="" disabled>Pilih...</option>
              <option value="Divisi 1">Divisi 1 (≥ Level 30)</option>
              <option value="Divisi 2">Divisi 2 (≥ Level 20)</option>
              <option value="Divisi 3">Divisi 3 (≥ Level 12)</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Kirim Formulir
          </button>
        </form>
      </div>
    </section>
  )
}
