const icon = (name) =>
  `https://api.iconify.design/lucide/${name}.svg?color=%23344B3E`;

export default function Header() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">

          {/* Logo */}
          <a href="#beranda" className="brand">
            <img src={icon("leaf")} alt="Logo JedaBuang" />
            <span>
              JedaBuang<span className="brand-dot">.</span>
            </span>
          </a>

          {/* Navbar */}
          <nav className="navbar" aria-label="Navigasi utama">
            <a href="#beranda" className="nav-link">
              Beranda
            </a>

            <a href="#tambah-barang" className="nav-link">
              Tambah Barang
            </a>

            <a href="#daftar-barang" className="nav-link">
              Daftar Barang
            </a>
          </nav>

        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="beranda">
        <div className="container hero-inner">

          <div className="hero-content">
            <span className="eyebrow">
              A LITTLE PAUSE, A BETTER CHOICE
            </span>

            <h1>
              Barang lama,
              <br />
              <em>kesempatan baru.</em>
            </h1>

            <p>
              Tidak semua barang yang tak terpakai harus dibuang.
              Beri sedikit waktu untuk mempertimbangkannya kembali.
            </p>

            <a href="#tambah-barang" className="hero-button">
              Mulai Catat Barang
              <img src={icon("arrow-up-right")} alt="" />
            </a>
          </div>

          <div
            className="hero-photo"
            role="img"
            aria-label="Ruangan bernuansa natural"
          >
            <span className="hero-note">
              "Barang yang kita hargai hari ini,
              bisa bermanfaat lagi esok hari."
            </span>
          </div>

        </div>
      </section>
    </>
  );
}