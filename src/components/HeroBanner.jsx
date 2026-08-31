import { FiPlay, FiInfo, FiVolumeX } from "react-icons/fi";

export default function HeroBanner() {
  return (
    <section
      className="relative w-full h-[360px] sm:h-[480px] md:h-[587px] bg-cover bg-center flex items-end pb-6 sm:pb-8 md:pb-16"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(24,26,28,1) 0%, rgba(24,26,28,0.1) 45%, rgba(24,26,28,0.55) 100%), url('/assets/banner-duty-after-school.png')",
      }}
    >
      <div className="px-3 sm:px-4 md:px-20 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-6">
          Duty After School
        </h1>

        <p className="max-w-[640px] text-white/80 text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-7 mb-4 sm:mb-5 md:mb-8 line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
          Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
          siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
          dalam perang.
        </p>

        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-wrap">
          <button className="flex items-center gap-1.5 sm:gap-2 bg-chill-primary hover:bg-chill-primaryHover rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold">
            <FiPlay /> Mulai
          </button>

          <button className="flex items-center gap-1.5 sm:gap-2 border border-white/40 hover:bg-white/10 rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold">
            <FiInfo /> Selengkapnya
          </button>

          <span className="border border-white/40 rounded-full px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 text-[10px] sm:text-xs">
            18+
          </span>

          <button
            aria-label="Mute/unmute"
            className="ml-auto w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-white/40 hover:bg-white/10"
          >
            <FiVolumeX />
          </button>
        </div>
      </div>
    </section>
  );
}
