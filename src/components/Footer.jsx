import { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import useBreakpoint from "../hooks/useBreakpoint";

const GENRES = [
  "Aksi",
  "Anak-anak",
  "Britania",
  "Drama",
  "Fantasi Ilmiah & Fantasi",
  "Kejahatan",
  "KDrama",
  "Komedi",
  "Petualangan",
  "Perang",
  "Romantis",
  "Sains & Alam",
  "Thriller",
  "Anime",
];

const HELP_LINKS = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"];

export default function Footer() {
  const { isMobile } = useBreakpoint();

  return isMobile ? <FooterMobile /> : <FooterDesktop />;
}

function FooterDesktop() {
  return (
    <footer className="bg-chill-bg border-t border-white/10 px-20 py-10">
      <div className="flex justify-between gap-8">
        <div>
          <img src="/assets/logo-chill.png" alt="Chill" className="h-8 mb-3" />
          <p className="text-xs text-white/50">
            @2026 Chill All Rights Reserved.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Genre</h3>
          <div className="grid grid-cols-3 gap-x-10 gap-y-2">
            {GENRES.map((genre) => (
              <a
                key={genre}
                href="#"
                className="text-xs text-white/60 hover:text-white"
              >
                {genre}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Bantuan</h3>
          <div className="flex flex-col gap-2">
            {HELP_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-white/60 hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterMobile() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <footer className="bg-chill-bg border-t border-white/10 px-5 py-8">
      <img src="/assets/logo-chill.png" alt="Chill" className="h-7 mb-4" />
      <p className="text-xs text-white/50 mb-6">
        @2026 Chill All Rights Reserved
      </p>

      <div className="border-t border-white/10">
        <button
          onClick={() => toggle("genre")}
          className="w-full flex items-center justify-between py-4 text-base font-semibold"
        >
          Genre
          {openSection === "genre" ? <FiChevronDown /> : <FiChevronRight />}
        </button>
        {openSection === "genre" && (
          <div className="grid grid-cols-2 gap-y-2 pb-4">
            {GENRES.map((genre) => (
              <a key={genre} href="#" className="text-sm text-white/70">
                {genre}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-white/10">
        <button
          onClick={() => toggle("bantuan")}
          className="w-full flex items-center justify-between py-4 text-base font-semibold"
        >
          Bantuan
          {openSection === "bantuan" ? <FiChevronDown /> : <FiChevronRight />}
        </button>
        {openSection === "bantuan" && (
          <div className="flex flex-col gap-2 pb-4">
            {HELP_LINKS.map((link) => (
              <a key={link} href="#" className="text-sm text-white/70">
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
