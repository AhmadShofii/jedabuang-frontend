const icon = (name) =>
  `https://api.iconify.design/lucide/${name}.svg?color=%23344B3E`;

export default function DashboardSummary({ barangList }) {
  const statistik = [
    {
      label: "Total Barang",
      jumlah: barangList.length,
      icon: "package",
    },
    {
      label: "Dipertimbangkan",
      jumlah: barangList.filter(
        (barang) => barang.status === "Dipertimbangkan"
      ).length,
      icon: "clock",
    },
    {
      label: "Diperbaiki",
      jumlah: barangList.filter(
        (barang) => barang.status === "Diperbaiki"
      ).length,
      icon: "wrench",
    },
    {
      label: "Didonasikan",
      jumlah: barangList.filter(
        (barang) => barang.status === "Didonasikan"
      ).length,
      icon: "gift",
    },
    {
      label: "Dibuang",
      jumlah: barangList.filter(
        (barang) => barang.status === "Dibuang"
      ).length,
      icon: "trash-2",
    },
  ];

  return (
    <section className="summary-grid">
      {statistik.map((item) => (
        <div className="summary-card" key={item.label}>
          <img
            src={icon(item.icon)}
            alt=""
            className="summary-icon"
          />

          <span className="summary-label">
            {item.label}
          </span>

          <strong>
            {String(item.jumlah).padStart(2, "0")}
          </strong>

          <small>barang</small>
        </div>
      ))}
    </section>
  );
}