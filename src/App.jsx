import SelfcareCard from "./selfcareCard"

const App = () => {
  return (
    <div className="navbar w-full h-screen">

      {/* navbar */}
      <nav className="fixed w-full flex justify-between items-center py-7 px-16">
        <div className="w-1/12">
          <img src="./assets/logo.png" alt="logo" />
        </div>

          <ul className="flex text-white">
            <li><a href="#" className="px-5 py-3 font-medium text-lg">Tentang</a></li>
            <li><a href="#" className="px-5 py-3 font-medium text-lg">Artikel</a></li>
            <li><a href="#" className="px-5 py-3 font-medium text-lg">Konsultan</a></li>
            <li><a href="#" className="px-5 py-3 font-medium text-lg">Layanan</a></li>
          </ul>

          <div>
            <img src="./assets/ava.png" alt="ava" className="w-12" />
          </div>
      </nav>


      {/* header */}
      <div className="header w-full h-3/5 bg-[#9F41EA]">
        <div className="bg-[url('./assets/Vector.png')] w-full h-full flex flex-col justify-center items-center gap-5 text-white">
          <h1 className="font-bold text-5xl text-center leading-[58px]">Sudahkah Kamu<br />Mengenali Diri Sendiri?</h1>
          <p>Kenali diri dulu, baru tentukan yang terbaik untukmu</p>
        </div>
      </div>

      {/* selfcare */}
      <div className="self-care container py-40 m-auto flex justify-center items-center">
          <div className="h-[500px] flex flex-wrap justify-between">
            <SelfcareCard gambar="./assets/self-1.png" judul="1 Minute Selfcare" deskripsi="1 Menit SelfCare untuk redakan kecemasanmu dan hal yang membuatmu tidak nyaman." />
            <SelfcareCard gambar="./assets/self-2.png" judul="Audio Mindfulness with Solfeggio Frequencies" deskripsi="Nikmati Audio kami yang tertanam dengan Frekuensi Solfeggio" />
            <SelfcareCard gambar="./assets/self-3.png" judul="Audio Self-Care 6 Minutes" deskripsi="Selfcare dengan Mindful Breathing, mari Sadar Penuh dan Hadir Utuh saat ini." />
            <SelfcareCard gambar="./assets/self-4.png" judul="4-7-8 Breathing Techniques" deskripsi="Rileks, dan tenangkan diri dengan teknik pernapasan 4-7-8" />
          </div>
      </div>
    </div>
  )
}

export default App