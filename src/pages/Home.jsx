import { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import MovieRow from '../components/MovieRow'
import PosterRow from '../components/PosterRow'
import Footer from '../components/Footer'
import Toast from '../components/Toast'
import useMyList from '../hooks/useMyList'
import { continueWatching, topRating, filmTrending, rilisBaru } from '../data/movies'

const TOAST_DURATION_MS = 2500

export default function Home() {
  const { isInMyList, handleToggleMyList } = useMyList()
  const [toastMessage, setToastMessage] = useState('')

  function handleToggle(item) {
    const wasInList = isInMyList(item.id)
    handleToggleMyList(item)

    if (!wasInList) {
      setToastMessage(`"${item.title}" ditambahkan ke Daftar Saya`)
      setTimeout(() => setToastMessage(''), TOAST_DURATION_MS)
    }
  }

  return (
    <div className="min-h-screen bg-chill-bg">
      <Navbar />
      <HeroBanner />

      <div className="pt-10">
        <MovieRow
          title="Melanjutkan Tonton Film"
          items={continueWatching}
          isInMyList={isInMyList}
          onToggleMyList={handleToggle}
        />
        <PosterRow
          title="Top Rating Film dan Series Hari ini"
          items={topRating}
          isInMyList={isInMyList}
          onToggleMyList={handleToggle}
        />
        <PosterRow
          title="Film Trending"
          items={filmTrending}
          isInMyList={isInMyList}
          onToggleMyList={handleToggle}
        />
        <PosterRow
          title="Rilis Baru"
          items={rilisBaru}
          isInMyList={isInMyList}
          onToggleMyList={handleToggle}
        />
      </div>

      <Footer />
      <Toast message={toastMessage} />
    </div>
  )
}
