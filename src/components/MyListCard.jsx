import { FiTrash2, FiCheck } from "react-icons/fi";

export default function MyListCard({ item, onRemove, onToggleWatched }) {
  return (
    <div className="shrink-0 w-[140px] sm:w-[170px] md:w-[200px]">
      <div className="relative rounded-lg overflow-hidden bg-chill-surface mb-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[210px] sm:h-[255px] md:h-[300px] object-cover"
        />

        {item.watched && (
          <div className="absolute top-2 left-2 bg-chill-primary text-white text-[10px] font-semibold px-2 py-1 rounded flex items-center gap-1">
            <FiCheck /> Ditonton
          </div>
        )}
      </div>

      <p className="text-xs font-medium truncate mb-2">{item.title}</p>

      <div className="flex items-center gap-2">
        <button
          onClick={onToggleWatched}
          className="flex-1 text-[11px] rounded-full border border-white/30 py-1.5 hover:bg-white/10 transition-colors"
        >
          {item.watched ? "Tandai belum" : "Tandai ditonton"}
        </button>
        <button
          onClick={onRemove}
          aria-label={`Hapus ${item.title} dari Daftar Saya`}
          className="w-7 h-7 flex items-center justify-center rounded-full border border-white/30 text-white/70 hover:text-chill-danger hover:border-chill-danger transition-colors"
        >
          <FiTrash2 size={13} />
        </button>
      </div>
    </div>
  );
}
