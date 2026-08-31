import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyListCard from "../components/MyListCard";
import useMyList from "../hooks/useMyList";

export default function DaftarSaya() {
  const { myList, isLoading, removeFromMyList, toggleWatched } = useMyList();

  return (
    <div className="min-h-screen bg-chill-bg">
      <Navbar />

      <div className="px-3 sm:px-4 md:px-20 py-8 md:py-12">
        <h1 className="text-2xl md:text-[32px] font-bold mb-6 md:mb-8">
          Daftar Saya
        </h1>

        {isLoading ? (
          <p className="text-sm text-white/50">Memuat data...</p>
        ) : myList.length === 0 ? (
          <p className="text-sm text-white/50">
            Belum ada tontonan tersimpan. Kembali ke Beranda, lalu klik ikon "+"
            saat hover film/series buat menambahkan.
          </p>
        ) : (
          <div className="flex flex-wrap gap-4 md:gap-6">
            {myList.map((item) => (
              <MyListCard
                key={item.id}
                item={item}
                onRemove={() => removeFromMyList(item.id)}
                onToggleWatched={() => toggleWatched(item.id)}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
