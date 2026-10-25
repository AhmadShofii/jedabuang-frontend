const gambarKategori = {
  Elektronik:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  Pakaian:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
  Buku:
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600",
  Perabot:
    "https://images.unsplash.com/photo-1503602642458-232111445657?w=600",
  Lainnya:
    "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600",
};

export default function BarangCard({ barang }) {
  const gambar =
    gambarKategori[barang.kategori] || gambarKategori.Lainnya;

  return (
    <article className="barang-card">
      <div className="barang-image">
        <img
          src={gambar}
          alt={`Ilustrasi kategori ${barang.kategori}`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="barang-body">
        <span className="category-tag">
          {barang.kategori}
        </span>

        <h3>{barang.nama}</h3>

        <p>{barang.alasan}</p>

        <div className="barang-footer">
          <span className="barang-date">
            {barang.tanggalMasuk}
          </span>

          <span
            className={`status-tag status-${barang.status.toLowerCase()}`}
          >
            {barang.status}
          </span>
        </div>
      </div>
    </article>
  );
}