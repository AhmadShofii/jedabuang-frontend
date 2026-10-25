import { useState } from "react";
import Header from "./components/Header";
import DashboardSummary from "./components/DashboardSummary";
import BarangForm from "./components/BarangForm";
import BarangList from "./components/BarangList";
import "./App.css";

const dataAwal = [
  {
    id: "barang-001",
    nama: "Headphone Kabel Lama",
    kategori: "Elektronik",
    alasan: "Suara sebelah kiri sudah tidak berfungsi.",
    tanggalMasuk: "20 Okt 2026",
    status: "Dipertimbangkan",
  },
  {
    id: "barang-002",
    nama: "Jaket Denim",
    kategori: "Pakaian",
    alasan: "Sudah jarang dipakai karena ukurannya kurang sesuai.",
    tanggalMasuk: "21 Okt 2026",
    status: "Dipertimbangkan",
  },
  {
    id: "barang-003",
    nama: "Buku Kalkulus Semester 1",
    kategori: "Buku",
    alasan: "Mata kuliah sudah selesai dan buku masih layak digunakan.",
    tanggalMasuk: "18 Okt 2026",
    status: "Didonasikan",
  },
];

export default function App() {
  const [barangList, setBarangList] = useState([]);

  function handleTambahBarang(barangBaru) {
    setBarangList((sebelumnya) => [
      barangBaru,
      ...sebelumnya,
    ]);
  }

  return (
    <>
      <Header />

      <main className="container main-content">
        <DashboardSummary barangList={barangList} />

        <BarangForm onTambah={handleTambahBarang} />

        <BarangList barangList={barangList} />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <strong>JedaBuang.</strong>
          <span>Barang lama, kesempatan baru.</span>
          <small>© 2026 JedaBuang</small>
        </div>
      </footer>
    </>
  );
}