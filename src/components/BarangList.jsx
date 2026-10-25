import BarangCard from "./BarangCard";
import EmptyState from "./EmptyState";

export default function BarangList({ barangList }) {
  return (
    <section className="list-section" id="daftar-barang">
      <div className="section-heading">
        <span className="eyebrow">
          KOLEKSI PRIBADIMU
        </span>

        <h2>Daftar barang</h2>

        <p>
          Setiap barang punya cerita.
          Yuk, pertimbangkan langkah berikutnya.
        </p>
      </div>

      {barangList.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="barang-grid">
          {barangList.map((barang) => (
            <BarangCard
              key={barang.id}
              barang={barang}
            />
          ))}
        </div>
      )}
    </section>
  );
}