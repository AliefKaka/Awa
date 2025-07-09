// components/RegisterForm.js
export default function RegisterForm() {
  return (
    <section className="p-10 text-center" id="register">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Form Pendaftaran</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input className="w-full px-4 py-2 rounded bg-slate-800 text-white" type="text" placeholder="Nama In-Game" required />
        <input className="w-full px-4 py-2 rounded bg-slate-800 text-white" type="text" placeholder="ID OPBR" required />
        <input className="w-full px-4 py-2 rounded bg-slate-800 text-white" type="number" placeholder="Level Saat Ini" required />
        <select className="w-full px-4 py-2 rounded bg-slate-800 text-white" required>
          <option value="">Pilih Divisi</option>
          <option value="Divisi 1">Divisi 1</option>
          <option value="Divisi 2">Divisi 2</option>
          <option value="Divisi 3">Divisi 3</option>
          <option value="Divisi 4">Divisi 4</option>
        </select>
        <button type="submit" className="w-full bg-teal-500 py-2 rounded text-white font-bold hover:bg-teal-600">Daftar</button>
      </form>
    </section>
  )
}
