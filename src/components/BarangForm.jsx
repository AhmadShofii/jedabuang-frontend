import { useState } from "react";

export default function BarangForm({ onTambah }) {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [alasan, setAlasan] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!nama.trim() || !kategori || !alasan.trim()) {
      alert("Mohon lengkapi semua kolom terlebih dahulu.");
      return;
    }

    const barangBaru = {
      id: crypto.randomUUID(),
      nama: nama.trim(),
      kategori: kategori,
      alasan: alasan.trim(),
      tanggalMasuk: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      status: "Dipertimbangkan",
    };

    onTambah(barangBaru);

    setNama("");
    setKategori("");
    setAlasan("");
  }

  return (
    <section className="form-panel" id="tambah-barang">
      <div className="section-heading">
        <span className="eyebrow">LANGKAH PERTAMA</span>
        <h2>Tambah barang</h2>
        <p>
          Catat barang yang ingin kamu pertimbangkan kembali.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="barang-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nama">Nama Barang</label>

            <input
              id="nama"
              type="text"
              maxLength={100}
              placeholder="Contoh: Headphone kabel lama"
              value={nama}
              onChange={(event) => setNama(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="kategori">Kategori</label>

            <select
              id="kategori"
              value={kategori}
              onChange={(event) => setKategori(event.target.value)}
              required
            >
              <option value="">Pilih kategori</option>
              <option value="Elektronik">Elektronik</option>
              <option value="Pakaian">Pakaian</option>
              <option value="Buku">Buku</option>
              <option value="Perabot">Perabot</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="alasan">Alasan</label>

          <textarea
            id="alasan"
            rows="3"
            maxLength={300}
            placeholder="Mengapa barang ini ingin kamu pertimbangkan?"
            value={alasan}
            onChange={(event) => setAlasan(event.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          + Tambah Barang
        </button>
      </form>
    </section>
  );
}