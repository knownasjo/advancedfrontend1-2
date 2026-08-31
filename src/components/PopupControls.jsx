import { useState } from "react";
import { FiPlay, FiCheck, FiPlus, FiChevronDown } from "react-icons/fi";

export default function PopupControls({ isInMyList, onToggleMyList }) {
  const [isPlayHovered, setIsPlayHovered] = useState(false);

  return (
    <div className="flex items-center gap-3 mb-4">
      <button
        onMouseEnter={() => setIsPlayHovered(true)}
        onMouseLeave={() => setIsPlayHovered(false)}
        aria-label="Putar"
        className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
          isPlayHovered ? "bg-white" : "bg-white/80"
        } text-black`}
      >
        <FiPlay />
      </button>

      <button
        onClick={onToggleMyList}
        aria-label={
          isInMyList ? "Hapus dari Daftar Saya" : "Tambah ke Daftar Saya"
        }
        className="w-9 h-9 flex items-center justify-center rounded-full border border-white/50 text-white hover:bg-white/10"
      >
        {isInMyList ? <FiCheck /> : <FiPlus />}
      </button>

      <button
        aria-label="Detail lain"
        className="w-9 h-9 flex items-center justify-center rounded-full border border-white/50 text-white hover:bg-white/10 ml-auto"
      >
        <FiChevronDown />
      </button>
    </div>
  );
}
